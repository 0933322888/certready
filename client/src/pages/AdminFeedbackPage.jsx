import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Spinner from '../components/ui/Spinner';
import SEO from '../components/seo/SEO';
import api from '../utils/api';
import toast from 'react-hot-toast';

const STATUS_STYLES = {
  pending: { variant: 'warm', label: 'Pending' },
  approved: { variant: 'success', label: 'Approved' },
  rejected: { variant: 'danger', label: 'Rejected' },
};

export default function AdminFeedbackPage() {
  const [feedback, setFeedback] = useState([]);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const query = statusFilter ? `?status=${statusFilter}` : '';
      const response = await api.get(`/feedback/admin${query}`);
      setFeedback(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load course feedback.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const moderateFeedback = async (feedbackId, status) => {
    setUpdatingId(feedbackId);
    try {
      await api.patch(`/feedback/admin/${feedbackId}`, { status });
      toast.success(`Feedback ${status}.`);
      await fetchFeedback();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update feedback.');
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-bg py-12">
      <SEO noIndex title="Admin: Course Feedback" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">Course Feedback</h1>
            <p className="text-sm text-text-muted mt-1">Approve feedback before it appears on the home page.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/users">
              <Button variant="outline" size="sm">Users Admin</Button>
            </Link>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              aria-label="Filter feedback by status"
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary min-h-[40px]"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="">All statuses</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Spinner size="lg" /></div>
        ) : feedback.length === 0 ? (
          <Card className="text-center py-12"><p className="text-text-muted">No feedback to review.</p></Card>
        ) : (
          <div className="space-y-4">
            {feedback.map((item) => {
              const status = STATUS_STYLES[item.status] || STATUS_STYLES.pending;
              return (
                <Card key={item._id}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="font-semibold text-text-primary">{item.customerName}</h2>
                      <p className="text-sm text-text-muted">
                        {item.course?.title}{item.course?.tradeCode ? ` (${item.course.tradeCode})` : ''}
                      </p>
                    </div>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>
                  <p className="text-text-primary leading-relaxed whitespace-pre-wrap">{item.text}</p>
                  {item.status === 'pending' && (
                    <div className="flex gap-3 mt-5">
                      <Button size="sm" disabled={updatingId === item._id} onClick={() => moderateFeedback(item._id, 'approved')}>
                        Approve
                      </Button>
                      <Button variant="outline" size="sm" disabled={updatingId === item._id} onClick={() => moderateFeedback(item._id, 'rejected')}>
                        Reject
                      </Button>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}