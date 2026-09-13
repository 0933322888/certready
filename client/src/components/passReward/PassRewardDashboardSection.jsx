import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Spinner from '../ui/Spinner';
import api from '../../utils/api';
import toast from 'react-hot-toast';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

const STATUS_CONFIG = {
  ELIGIBLE_UNCLAIMED: {
    badge: 'warm',
    label: 'Eligible — Not Claimed',
    canClaim: true,
  },
  SUBMITTED: {
    badge: 'accent',
    label: 'Claim Submitted',
    canClaim: false,
    desc: 'Your claim has been received and is waiting for review.',
  },
  UNDER_REVIEW: {
    badge: 'accent',
    label: 'Under Review',
    canClaim: false,
    desc: 'Our team is actively verifying your examination results.',
  },
  APPROVED: {
    badge: 'success',
    label: 'Approved',
    canClaim: false,
    desc: 'Congratulations! Your Pass Reward has been approved and refund is queued.',
  },
  REFUND_PROCESSING: {
    badge: 'warm',
    label: 'Refund Processing',
    canClaim: false,
    desc: 'Stripe refund is in progress.',
  },
  REFUNDED: {
    badge: 'success',
    label: 'Refunded',
    canClaim: false,
    desc: 'Full course fee refunded to your original payment card.',
  },
  REJECTED: {
    badge: 'outline',
    label: 'Rejected',
    canClaim: false,
    desc: 'Claim was not approved.',
  },
  EXPIRED: {
    badge: 'outline',
    label: 'Claim Window Expired',
    canClaim: false,
    desc: 'The 6-month claim period for this purchase has ended.',
  },
  ALREADY_REFUNDED: {
    badge: 'outline',
    label: 'Refunded',
    canClaim: false,
  },
  NOT_ELIGIBLE: {
    badge: 'outline',
    label: 'Not Eligible',
    canClaim: false,
  },
};

export default function PassRewardDashboardSection() {
  const [eligibilityData, setEligibilityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [claimingPurchase, setClaimingPurchase] = useState(null);
  const [examDate, setExamDate] = useState('');
  const [examName, setExamName] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchEligibility = async () => {
    try {
      const res = await api.get('/pass-reward/my-eligibility');
      setEligibilityData(res.data || []);
    } catch (_) {
      setEligibilityData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEligibility();
  }, []);

  const handleStartClaim = (purchase) => {
    setClaimingPurchase(purchase);
    setExamName(purchase.course?.title ? `${purchase.course.title} Exam` : '');
    setExamDate('');
    setNotes('');
    setSelectedFile(null);
    trackEvent('pass_reward_claim_started', { courseSlug: purchase.course?.slug });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size exceeds 10MB limit');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64Content = reader.result.split(',')[1];
      setSelectedFile({
        originalFilename: file.name,
        mimeType: file.type,
        size: file.size,
        data: base64Content,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitClaim = async (e) => {
    e.preventDefault();
    if (!claimingPurchase || !examDate || !examName || !selectedFile) {
      toast.error('Please fill all required fields and attach proof');
      return;
    }

    setSubmitting(true);
    try {
      await api.post('/pass-reward/submit-claim', {
        purchaseId: claimingPurchase.purchaseId,
        examDate,
        examName,
        customerNotes: notes,
        proofFile: selectedFile,
      });

      trackEvent('pass_reward_claim_submitted', {
        courseSlug: claimingPurchase.course?.slug,
      });

      toast.success('Pass Reward claim submitted successfully! We will review it shortly.');
      setClaimingPurchase(null);
      fetchEligibility();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit claim');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (d) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Only render if user has eligible purchases or claims
  const relevantItems = eligibilityData.filter((item) => item.passRewardEligible || item.claim);
  if (loading || relevantItems.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-display font-semibold text-text-primary flex items-center gap-2">
            <span>🎉</span>
            <span>CertReady Pass Reward Status</span>
          </h2>
          <p className="text-text-muted text-sm mt-1">
            Pass your exam within 6 months of purchase to receive a full refund of your course fee.
          </p>
        </div>
        <Link to={paths.passReward} className="text-sm text-accent hover:underline">
          View Campaign Terms →
        </Link>
      </div>

      <div className="space-y-4">
        {relevantItems.map((item) => {
          const cfg = STATUS_CONFIG[item.state] || STATUS_CONFIG.NOT_ELIGIBLE;
          return (
            <Card key={item.purchaseId} className="p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <strong className="text-base text-text-primary">
                      {item.course?.title || 'Skilled Trade Course'}
                    </strong>
                    <Badge variant={cfg.badge} className="text-xs">
                      {cfg.label}
                    </Badge>
                  </div>
                  <p className="text-xs text-text-muted">
                    Purchased: {formatDate(item.completedAt)} • Claim Deadline: {formatDate(item.passRewardClaimDeadline)}
                  </p>
                  {cfg.desc && (
                    <p className="text-xs text-accent-warm mt-1.5">{cfg.desc}</p>
                  )}
                  {item.claim?.rejectionReason && (
                    <p className="text-xs text-danger mt-1">
                      Reason: {item.claim.rejectionReason}
                    </p>
                  )}
                </div>

                <div>
                  {cfg.canClaim && !item.isExpired && (
                    <Button
                      size="sm"
                      onClick={() => handleStartClaim(item)}
                      className="bg-accent-warm hover:bg-accent-warm/90 text-bg font-semibold"
                    >
                      Claim Pass Reward
                    </Button>
                  )}
                  {item.claim && (
                    <a
                      href={`/api/pass-reward/claim/${item.claim._id}/proof?token=${encodeURIComponent(localStorage.getItem('token') || '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-accent hover:underline block text-right mt-1"
                    >
                      View Submitted Proof ↗
                    </a>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Claim Submission Modal / Form */}
      {claimingPurchase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <Card className="max-w-lg w-full p-6 space-y-5 relative my-8">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <h3 className="text-xl font-display font-bold text-text-primary">
                Submit Pass Reward Claim
              </h3>
              <button
                type="button"
                onClick={() => setClaimingPurchase(null)}
                className="text-text-muted hover:text-text-primary text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-text-muted">
              Course: <strong>{claimingPurchase.course?.title}</strong>
              <br />
              Claim Deadline: <strong>{formatDate(claimingPurchase.passRewardClaimDeadline)}</strong>
            </p>

            <form onSubmit={handleSubmitClaim} className="space-y-4 text-sm">
              <div>
                <label className="block font-medium text-text-primary mb-1">
                  Exam / Certification Name *
                </label>
                <input
                  type="text"
                  required
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  placeholder="e.g. Red Seal Construction Electrician 309A"
                  className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block font-medium text-text-primary mb-1">
                  Exam Pass Date *
                </label>
                <input
                  type="date"
                  required
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  max={new Date().toISOString().slice(0, 10)}
                  className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block font-medium text-text-primary mb-1">
                  Upload Pass Proof (PDF, PNG, JPG - max 10MB) *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.png,.jpg,.jpeg,.webp"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary text-xs file:mr-3 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:bg-accent file:text-white file:font-semibold"
                />
                <p className="text-xs text-text-muted mt-1">
                  Accepts official result letter, score portal screenshot, or certificate clearly showing your name and pass status.
                </p>
              </div>

              <div>
                <label className="block font-medium text-text-primary mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any details you'd like to share with our review team..."
                  className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent text-xs"
                />
              </div>

              <div className="p-3 rounded-lg bg-accent-warm/10 border border-accent-warm/20 text-xs text-text-muted">
                🛡️ <strong>No review required:</strong> Your refund is strictly based on verified exam results and does not require leaving a review or rating.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setClaimingPurchase(null)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  disabled={submitting || !selectedFile}
                  className="bg-accent-warm hover:bg-accent-warm/90 text-bg font-semibold"
                >
                  {submitting ? 'Submitting...' : 'Submit Claim'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
