import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Spinner from '../components/ui/Spinner';
import SEO from '../components/seo/SEO';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { formatPrice } from '../utils/formatters';

const STATUS_BADGES = {
  SUBMITTED: { variant: 'warm', label: 'Submitted' },
  UNDER_REVIEW: { variant: 'accent', label: 'Under Review' },
  APPROVED: { variant: 'success', label: 'Approved' },
  REFUND_PROCESSING: { variant: 'warm', label: 'Processing Refund' },
  REFUNDED: { variant: 'success', label: 'Refunded' },
  REJECTED: { variant: 'outline', label: 'Rejected' },
};

export default function AdminClaimsPage() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [processingRefund, setProcessingRefund] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');

  const fetchClaims = async (status = statusFilter) => {
    setLoading(true);
    try {
      const url = status ? `/pass-reward/admin/claims?status=${status}` : '/pass-reward/admin/claims';
      const res = await api.get(url);
      setClaims(res.data);
      if (selectedClaim) {
        const refreshed = res.data.find((c) => c._id === selectedClaim._id);
        setSelectedClaim(refreshed || null);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to load claims. Ensure ADMIN_EMAILS includes your email.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClaims(statusFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const handleSelectClaim = (claim) => {
    setSelectedClaim(claim);
    setAdminNotes(claim.adminNotes || '');
    setRejectionReason(claim.rejectionReason || '');
  };

  const handleUpdateStatus = async (newStatus) => {
    if (!selectedClaim) return;
    setUpdatingStatus(true);
    try {
      const res = await api.post(`/pass-reward/admin/claims/${selectedClaim._id}/status`, {
        status: newStatus,
        adminNotes,
        rejectionReason: newStatus === 'REJECTED' ? rejectionReason : undefined,
      });
      toast.success(`Claim status updated to ${newStatus}`);
      setSelectedClaim(res.data.claim);
      fetchClaims(statusFilter);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update claim status');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleProcessRefund = async () => {
    if (!selectedClaim) return;
    const confirmMsg = `Confirm refunding ${formatPrice(selectedClaim.purchase?.amount || 4999, selectedClaim.purchase?.currency || 'CAD')} via Stripe for ${selectedClaim.user?.email}?`;
    if (!window.confirm(confirmMsg)) return;

    setProcessingRefund(true);
    try {
      const res = await api.post(`/pass-reward/admin/claims/${selectedClaim._id}/refund`);
      toast.success(res.data.message || 'Refund successfully executed via Stripe!');
      setSelectedClaim(res.data.claim);
      fetchClaims(statusFilter);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Refund execution failed');
    } finally {
      setProcessingRefund(false);
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

  return (
    <div className="min-h-screen bg-bg py-12">
      <SEO noIndex title="Admin: Pass Reward Claims Management" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-text-primary">
              Pass Reward Claims Management
            </h1>
            <p className="text-sm text-text-muted mt-1">
              Review examination pass documents, manage approvals, and execute Stripe refunds.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/users">
              <Button variant="outline" size="sm">
                &larr; Users Management
              </Button>
            </Link>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-border bg-surface px-4 py-2 text-sm text-text-primary"
            >
              <option value="">All Statuses</option>
              <option value="SUBMITTED">Submitted</option>
              <option value="UNDER_REVIEW">Under Review</option>
              <option value="APPROVED">Approved</option>
              <option value="REFUND_PROCESSING">Refund Processing</option>
              <option value="REFUNDED">Refunded</option>
              <option value="REJECTED">Rejected</option>
            </select>
            <Button variant="outline" size="sm" onClick={() => fetchClaims(statusFilter)}>
              Refresh
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Spinner size="lg" />
          </div>
        ) : claims.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-text-muted">No Pass Reward claims found matching the filter.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List of Claims */}
            <div className="lg:col-span-1 space-y-3 max-h-[75vh] overflow-y-auto pr-2">
              {claims.map((c) => {
                const isSelected = selectedClaim?._id === c._id;
                const statusInfo = STATUS_BADGES[c.status] || { variant: 'outline', label: c.status };
                const hasWarnings = c.warnings && c.warnings.length > 0;

                return (
                  <div
                    key={c._id}
                    onClick={() => handleSelectClaim(c)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-accent bg-surface shadow-md'
                        : 'border-border bg-surface/60 hover:bg-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-text-primary text-sm truncate max-w-[180px]">
                        {c.user?.name || c.user?.email || 'Student'}
                      </span>
                      <Badge variant={statusInfo.variant} className="text-xs">
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <p className="text-xs text-text-muted mb-1 truncate">
                      {c.course?.title || 'Trade Course'}
                    </p>
                    <div className="flex justify-between items-center text-xs text-text-muted">
                      <span>Exam: {formatDate(c.examDate)}</span>
                      <span>Sub: {formatDate(c.submittedAt)}</span>
                    </div>
                    {hasWarnings && (
                      <div className="mt-2 text-xs text-accent-warm flex items-center gap-1">
                        <span>⚠️</span>
                        <span>{c.warnings.length} warning(s)</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Claim Details & Action Panel */}
            <div className="lg:col-span-2">
              {selectedClaim ? (
                <Card className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
                    <div>
                      <h2 className="text-xl font-display font-bold text-text-primary">
                        Claim #{selectedClaim._id.slice(-6).toUpperCase()}
                      </h2>
                      <p className="text-xs text-text-muted mt-1">
                        Submitted on {formatDate(selectedClaim.submittedAt)}
                      </p>
                    </div>
                    <Badge
                      variant={STATUS_BADGES[selectedClaim.status]?.variant || 'outline'}
                      className="text-sm px-3 py-1"
                    >
                      {STATUS_BADGES[selectedClaim.status]?.label || selectedClaim.status}
                    </Badge>
                  </div>

                  {/* Warnings */}
                  {selectedClaim.warnings && selectedClaim.warnings.length > 0 && (
                    <div className="p-4 rounded-xl bg-accent-warm/15 border border-accent-warm/30 space-y-1">
                      <strong className="text-sm font-semibold text-accent-warm block mb-1">
                        ⚠️ Fraud & Verification Warnings:
                      </strong>
                      {selectedClaim.warnings.map((w, idx) => (
                        <p key={idx} className="text-xs text-text-primary">• {w}</p>
                      ))}
                    </div>
                  )}

                  {/* Summary Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-3 rounded-lg bg-surface-2 border border-border">
                      <span className="text-xs text-text-muted block">Student</span>
                      <strong className="text-text-primary">{selectedClaim.user?.name || '—'}</strong>
                      <div className="text-xs text-text-muted">{selectedClaim.user?.email}</div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-2 border border-border">
                      <span className="text-xs text-text-muted block">Course & Paid Amount</span>
                      <strong className="text-text-primary">{selectedClaim.course?.title}</strong>
                      <div className="text-xs text-accent font-semibold">
                        Paid: {formatPrice(selectedClaim.purchase?.amount || 0, selectedClaim.purchase?.currency || 'cad')}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-2 border border-border">
                      <span className="text-xs text-text-muted block">Exam Passed</span>
                      <strong className="text-text-primary">{selectedClaim.examName}</strong>
                      <div className="text-xs text-text-muted">Date: {formatDate(selectedClaim.examDate)}</div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-2 border border-border">
                      <span className="text-xs text-text-muted block">Purchase & Claim Deadline</span>
                      <div className="text-xs text-text-primary">
                        Purchased: {formatDate(selectedClaim.purchase?.completedAt || selectedClaim.purchase?.createdAt)}
                      </div>
                      <div className="text-xs text-text-muted">
                        Deadline: {formatDate(selectedClaim.purchase?.passRewardClaimDeadline)}
                      </div>
                    </div>
                  </div>

                  {/* Student Notes */}
                  {selectedClaim.customerNotes && (
                    <div>
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                        Student Notes
                      </h4>
                      <p className="text-sm text-text-primary p-3 rounded-lg bg-surface-2 border border-border">
                        {selectedClaim.customerNotes}
                      </p>
                    </div>
                  )}

                  {/* Submitted Proof File Link */}
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Submitted Examination Proof
                    </h4>
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-2 border border-border">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">
                            {selectedClaim.proofFile?.originalFilename || 'Exam-Proof-Document'}
                          </p>
                          <p className="text-xs text-text-muted">
                            {selectedClaim.proofFile?.mimeType} • {Math.round((selectedClaim.proofFile?.size || 0) / 1024)} KB
                          </p>
                        </div>
                      </div>
                      <a
                        href={`/api/pass-reward/claim/${selectedClaim._id}/proof?token=${encodeURIComponent(localStorage.getItem('token') || '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-semibold text-accent hover:border-accent"
                      >
                        View Proof ↗
                      </a>
                    </div>
                  </div>

                  {/* Internal Admin Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                      Internal Admin Notes
                    </label>
                    <textarea
                      rows={2}
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add private internal notes regarding verification..."
                      className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary text-sm focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Rejection Reason (when applicable) */}
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                      Rejection Reason (Emailed to student if rejected)
                    </label>
                    <input
                      type="text"
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="e.g. Document was blurry / Name does not match student account"
                      className="w-full px-3 py-2 rounded-lg bg-surface-2 border border-border text-text-primary text-sm focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={updatingStatus}
                        onClick={() => handleUpdateStatus('UNDER_REVIEW')}
                      >
                        Mark Under Review
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={updatingStatus}
                        onClick={() => handleUpdateStatus('APPROVED')}
                        className="text-success hover:border-success"
                      >
                        Approve Claim
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={updatingStatus}
                        onClick={() => handleUpdateStatus('REJECTED')}
                        className="text-danger hover:border-danger"
                      >
                        Reject Claim
                      </Button>
                    </div>

                    {/* Trigger Stripe Refund */}
                    {selectedClaim.status !== 'REFUNDED' && (
                      <Button
                        size="sm"
                        disabled={processingRefund || selectedClaim.status === 'REJECTED'}
                        onClick={handleProcessRefund}
                        className="bg-accent-warm hover:bg-accent-warm/90 text-bg font-semibold"
                      >
                        {processingRefund ? 'Processing Refund...' : 'Trigger Stripe Refund'}
                      </Button>
                    )}

                    {selectedClaim.status === 'REFUNDED' && (
                      <div className="text-xs text-success font-semibold flex items-center gap-1">
                        <span>✓</span>
                        <span>Stripe Refund ID: {selectedClaim.stripeRefundId || 'Processed'}</span>
                      </div>
                    )}
                  </div>
                </Card>
              ) : (
                <Card className="text-center py-20 text-text-muted">
                  Select a claim on the left to view details and process approval or refund.
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
