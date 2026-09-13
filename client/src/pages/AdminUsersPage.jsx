import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Spinner from '../components/ui/Spinner';
import SEO from '../components/seo/SEO';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { formatPrice } from '../utils/formatters';

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 20, totalUsers: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState('createdAt_desc');

  // Selected user modal / slide-over details
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [detailUser, setDetailUser] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'courses' | 'purchases' | 'studyPlans' | 'activity'

  const fetchUsers = async (page = 1, searchQuery = search, sortOption = sort) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: '20',
        sort: sortOption,
      });
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      const res = await api.get(`/admin/users?${params.toString()}`);
      setUsers(res.data.users);
      setPagination(res.data.pagination);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to load users list. Ensure you have admin access.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(1, search, sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput.trim());
  };

  const openUserDetails = async (userId) => {
    setSelectedUserId(userId);
    setLoadingDetails(true);
    setActiveTab('overview');
    try {
      const res = await api.get(`/admin/users/${userId}`);
      setDetailUser(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to load user details');
      setSelectedUserId(null);
    } finally {
      setLoadingDetails(false);
    }
  };

  const closeUserDetails = () => {
    setSelectedUserId(null);
    setDetailUser(null);
  };

  const formatDate = (d, includeTime = false) => {
    if (!d) return '—';
    const date = new Date(d);
    return date.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...(includeTime && { hour: '2-digit', minute: '2-digit' }),
    });
  };

  return (
    <div className="min-h-screen bg-bg py-12">
      <SEO noIndex title="Admin: Users Management" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-display font-bold text-text-primary">
                Users Management
              </h1>
              <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-accent/20 text-accent font-semibold">
                Admin
              </span>
            </div>
            <p className="text-sm text-text-muted mt-1">
              Inspect user accounts, course enrollments, Stripe transactions, study plans, and learning activity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/admin/claims">
              <Button variant="outline" size="sm">
                Pass Reward Claims &rarr;
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-surface border border-border rounded-xl p-4 mb-6 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-surface-2 border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-2.5 text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Button type="submit" size="sm">
              Search
            </Button>
            {search && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchInput('');
                  setSearch('');
                }}
              >
                Clear
              </Button>
            )}
          </form>

          <div className="flex items-center gap-2">
            <label className="text-xs text-text-muted whitespace-nowrap">Sort by:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-surface-2 border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent"
            >
              <option value="createdAt_desc">Newest Registered</option>
              <option value="createdAt_asc">Oldest Registered</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Users Table / List */}
        {loading ? (
          <div className="py-24 flex justify-center">
            <Spinner size="lg" />
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-16 bg-surface border border-border rounded-xl">
            <p className="text-text-muted text-base">No users found matching your query.</p>
          </div>
        ) : (
          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-2 text-text-muted text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">User</th>
                    <th className="py-3.5 px-4 font-semibold">Registered</th>
                    <th className="py-3.5 px-4 font-semibold">Courses / Access</th>
                    <th className="py-3.5 px-4 font-semibold">Purchases</th>
                    <th className="py-3.5 px-4 font-semibold">Study Plans</th>
                    <th className="py-3.5 px-4 font-semibold">Practice Accuracy</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((u) => (
                    <tr
                      key={u._id}
                      className="hover:bg-surface-2/60 transition-colors cursor-pointer"
                      onClick={() => openUserDetails(u._id)}
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-accent/20 text-accent font-semibold flex items-center justify-center shrink-0">
                            {u.name ? u.name.charAt(0).toUpperCase() : '?'}
                          </div>
                          <div>
                            <div className="font-medium text-text-primary flex items-center gap-2">
                              <span>{u.name}</span>
                              {u.isAdmin && (
                                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-accent-warm/20 text-accent-warm font-semibold">
                                  Admin
                                </span>
                              )}
                              {u.googleId && (
                                <span className="text-[10px] px-1 rounded bg-surface-3 text-text-muted border border-border">
                                  Google
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-text-muted">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-text-muted whitespace-nowrap">
                        {formatDate(u.createdAt)}
                        {u.inFreeWindow && (
                          <div className="mt-0.5">
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">
                              Free Window Active
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-semibold text-text-primary">
                          {u.purchasesCount}
                        </span>{' '}
                        <span className="text-text-muted text-xs">course(s)</span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div>
                          <span className="font-semibold text-text-primary">
                            {u.completedPurchasesCount}
                          </span>{' '}
                          <span className="text-text-muted text-xs">completed</span>
                        </div>
                        {u.totalSpent > 0 && (
                          <div className="text-xs text-accent-warm font-medium">
                            {formatPrice(u.totalSpent, 'CAD')}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-semibold text-text-primary">
                          {u.studyPlansCount}
                        </span>{' '}
                        <span className="text-text-muted text-xs">plan(s)</span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {u.answersCount > 0 ? (
                          <div>
                            <span className="font-semibold text-text-primary">
                              {Math.round((u.correctAnswersCount / u.answersCount) * 100)}%
                            </span>
                            <span className="text-xs text-text-muted block">
                              ({u.correctAnswersCount}/{u.answersCount} correct)
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-text-muted">No answers</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openUserDetails(u._id)}
                        >
                          View Details &rarr;
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
              <div className="p-4 border-t border-border flex items-center justify-between text-sm">
                <span className="text-text-muted">
                  Showing page {pagination.page} of {pagination.totalPages} ({pagination.totalUsers} total users)
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={pagination.page <= 1}
                    onClick={() => fetchUsers(pagination.page - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={pagination.page >= pagination.totalPages}
                    onClick={() => fetchUsers(pagination.page + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* User Details Slide-over Modal */}
      {selectedUserId && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end transition-opacity">
          <div className="w-full max-w-4xl bg-surface border-l border-border h-full flex flex-col shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between bg-surface-2/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-lg flex items-center justify-center">
                  {detailUser?.user?.name ? detailUser.user.name.charAt(0).toUpperCase() : '?'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-text-primary">
                      {detailUser?.user?.name || 'Loading user...'}
                    </h2>
                    {detailUser?.user?.isAdmin && (
                      <span className="text-xs uppercase px-2 py-0.5 rounded bg-accent-warm/20 text-accent-warm font-semibold">
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-muted">{detailUser?.user?.email}</p>
                </div>
              </div>

              <button
                onClick={closeUserDetails}
                className="text-text-muted hover:text-text-primary p-2 rounded-lg hover:bg-surface-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            {loadingDetails ? (
              <div className="flex-1 flex items-center justify-center">
                <Spinner size="lg" />
              </div>
            ) : detailUser ? (
              <div className="flex-1 overflow-y-auto flex flex-col">
                {/* Navigation Tabs */}
                <div className="flex border-b border-border px-6 gap-6 bg-surface-2/20">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'overview'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeTab === 'courses'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <span>Courses</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-surface-3 text-text-muted">
                      {detailUser.user?.directPurchases?.length || 0}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('purchases')}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeTab === 'purchases'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <span>Purchases & Orders</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-surface-3 text-text-muted">
                      {detailUser.purchases?.length || 0}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('studyPlans')}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeTab === 'studyPlans'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <span>Study Plans</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-surface-3 text-text-muted">
                      {detailUser.studyPlans?.length || 0}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('activity')}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
                      activeTab === 'activity'
                        ? 'border-accent text-accent'
                        : 'border-transparent text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <span>Practice & Answers</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-surface-3 text-text-muted">
                      {detailUser.activity?.totalAnswers || 0}
                    </span>
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="p-6 space-y-6 flex-1">
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase font-medium">Account ID</span>
                          <p className="text-xs font-mono text-text-primary mt-1 select-all">
                            {detailUser.user._id}
                          </p>
                        </div>
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase font-medium">Registration Date</span>
                          <p className="text-sm font-semibold text-text-primary mt-1">
                            {formatDate(detailUser.user.createdAt, true)}
                          </p>
                        </div>
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase font-medium">Free 5-Day Window</span>
                          <div className="mt-1">
                            {detailUser.user.inFreeWindow ? (
                              <span className="inline-flex items-center text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                                Active (Expires {formatDate(detailUser.user.freeWindowExpiresAt)})
                              </span>
                            ) : (
                              <span className="text-xs text-text-muted">
                                Expired ({formatDate(detailUser.user.freeWindowExpiresAt)})
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quick Summary Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="p-4 bg-surface-2/60 rounded-xl border border-border">
                          <div className="text-2xl font-bold text-text-primary">
                            {detailUser.user.directPurchases?.length || 0}
                          </div>
                          <div className="text-xs text-text-muted mt-0.5">Assigned Courses</div>
                        </div>
                        <div className="p-4 bg-surface-2/60 rounded-xl border border-border">
                          <div className="text-2xl font-bold text-text-primary">
                            {detailUser.purchases?.filter((p) => p.status === 'completed').length || 0}
                          </div>
                          <div className="text-xs text-text-muted mt-0.5">Completed Orders</div>
                        </div>
                        <div className="p-4 bg-surface-2/60 rounded-xl border border-border">
                          <div className="text-2xl font-bold text-text-primary">
                            {detailUser.studyPlans?.length || 0}
                          </div>
                          <div className="text-xs text-text-muted mt-0.5">Active Study Plans</div>
                        </div>
                        <div className="p-4 bg-surface-2/60 rounded-xl border border-border">
                          <div className="text-2xl font-bold text-accent">
                            {detailUser.activity?.accuracy || 0}%
                          </div>
                          <div className="text-xs text-text-muted mt-0.5">
                            Accuracy ({detailUser.activity?.totalAnswers || 0} answered)
                          </div>
                        </div>
                      </div>

                      {/* Stripe Details if present */}
                      {detailUser.user.stripeCustomerId && (
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase font-medium">Stripe Customer ID</span>
                          <p className="text-xs font-mono text-text-primary mt-1 select-all">
                            {detailUser.user.stripeCustomerId}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* COURSES TAB */}
                  {activeTab === 'courses' && (
                    <div className="space-y-4">
                      <h3 className="text-base font-semibold text-text-primary">
                        Enrolled Courses ({detailUser.user.directPurchases?.length || 0})
                      </h3>
                      {(!detailUser.user.directPurchases || detailUser.user.directPurchases.length === 0) ? (
                        <p className="text-sm text-text-muted">No courses assigned to this user profile.</p>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {detailUser.user.directPurchases.map((course) => (
                            <div
                              key={course._id || course.slug}
                              className="p-4 bg-surface-2 rounded-xl border border-border flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="text-xs font-mono uppercase px-1.5 py-0.5 bg-surface-3 rounded text-text-muted">
                                    {course.tradeCode || 'COURSE'}
                                  </span>
                                  {course.isPublished ? (
                                    <span className="text-[10px] text-emerald-400">Published</span>
                                  ) : (
                                    <span className="text-[10px] text-warm">Draft</span>
                                  )}
                                </div>
                                <h4 className="font-semibold text-text-primary text-sm mt-1">
                                  {course.title}
                                </h4>
                                <p className="text-xs text-text-muted mt-1">
                                  Slug: <span className="font-mono">{course.slug}</span>
                                </p>
                              </div>
                              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                                <span>{course.totalChapters || 0} chapters</span>
                                <span>{course.totalQuestions || 0} questions</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* PURCHASES & ORDERS TAB */}
                  {activeTab === 'purchases' && (
                    <div className="space-y-4">
                      <h3 className="text-base font-semibold text-text-primary">
                        Purchases & Transactions ({detailUser.purchases?.length || 0})
                      </h3>
                      {(!detailUser.purchases || detailUser.purchases.length === 0) ? (
                        <p className="text-sm text-text-muted">No purchase records found for this user.</p>
                      ) : (
                        <div className="space-y-3">
                          {detailUser.purchases.map((p) => (
                            <div
                              key={p._id}
                              className="p-4 bg-surface-2 rounded-xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-text-primary text-sm">
                                    {p.course?.title || p.course?.slug || 'TradePrep Course'}
                                  </span>
                                  <Badge
                                    variant={
                                      p.status === 'completed'
                                        ? 'success'
                                        : p.status === 'refunded'
                                        ? 'outline'
                                        : 'warm'
                                    }
                                  >
                                    {p.status}
                                  </Badge>
                                  {p.isFreeWindow && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-3 text-text-muted border border-border">
                                      Free Window Auto-Grant
                                    </span>
                                  )}
                                  {p.passRewardEligible && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-warm/20 text-accent-warm font-medium">
                                      Pass Reward Eligible
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-text-muted flex flex-wrap gap-x-4 gap-y-1">
                                  <span>Date: {formatDate(p.createdAt, true)}</span>
                                  {p.promoCode && (
                                    <span>Promo: <strong className="text-text-primary">{p.promoCode}</strong></span>
                                  )}
                                  {p.stripePaymentIntent && (
                                    <span className="font-mono">PI: {p.stripePaymentIntent}</span>
                                  )}
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                <div className="text-base font-bold text-text-primary">
                                  {formatPrice(p.amount || 0, p.currency || 'CAD')}
                                </div>
                                {p.passRewardClaimDeadline && (
                                  <div className="text-[11px] text-text-muted">
                                    Claim by: {formatDate(p.passRewardClaimDeadline)}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STUDY PLANS TAB */}
                  {activeTab === 'studyPlans' && (
                    <div className="space-y-4">
                      <h3 className="text-base font-semibold text-text-primary">
                        Study Plans ({detailUser.studyPlans?.length || 0})
                      </h3>
                      {(!detailUser.studyPlans || detailUser.studyPlans.length === 0) ? (
                        <p className="text-sm text-text-muted">This user has not generated any study plans yet.</p>
                      ) : (
                        <div className="space-y-4">
                          {detailUser.studyPlans.map((plan) => (
                            <div
                              key={plan._id}
                              className="p-5 bg-surface-2 rounded-xl border border-border space-y-3"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div>
                                  <h4 className="font-semibold text-text-primary text-base">
                                    {plan.courseTitle || plan.courseSlug}
                                  </h4>
                                  <div className="text-xs text-text-muted flex gap-3 mt-0.5">
                                    <span>Type: <strong className="capitalize text-text-primary">{plan.planType}</strong></span>
                                    <span>Target Exam: <strong className="text-text-primary">{formatDate(plan.examDate)}</strong></span>
                                    <span>Created: {formatDate(plan.createdAt)}</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-accent">
                                    {plan.progressPercent}%
                                  </div>
                                  <div className="text-xs text-text-muted">
                                    {plan.completedItems} / {plan.totalItems} steps completed
                                  </div>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="w-full bg-surface-3 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-accent h-full rounded-full transition-all duration-300"
                                  style={{ width: `${plan.progressPercent}%` }}
                                />
                              </div>

                              {/* Collapsible/Scrollable Items preview */}
                              <details className="mt-3 text-xs text-text-muted">
                                <summary className="cursor-pointer font-medium text-text-primary hover:text-accent select-none">
                                  View all {plan.items?.length || 0} plan milestones
                                </summary>
                                <div className="mt-2 space-y-1.5 max-h-48 overflow-y-auto pr-2">
                                  {plan.items?.map((item) => (
                                    <div
                                      key={item.id}
                                      className="flex items-center justify-between p-2 rounded bg-surface border border-border"
                                    >
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="checkbox"
                                          checked={item.completed}
                                          readOnly
                                          className="rounded text-accent focus:ring-0"
                                        />
                                        <span className={item.completed ? 'line-through text-text-muted' : 'text-text-primary'}>
                                          {item.label}
                                        </span>
                                      </div>
                                      <span className="text-[11px] text-text-muted">
                                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </details>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ACTIVITY & ANSWERS TAB */}
                  {activeTab === 'activity' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase">Total Questions Answered</span>
                          <p className="text-2xl font-bold text-text-primary mt-1">
                            {detailUser.activity?.totalAnswers || 0}
                          </p>
                        </div>
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase">Correct Answers</span>
                          <p className="text-2xl font-bold text-emerald-400 mt-1">
                            {detailUser.activity?.correctAnswers || 0}
                          </p>
                        </div>
                        <div className="p-4 bg-surface-2 rounded-xl border border-border">
                          <span className="text-xs text-text-muted uppercase">Overall Accuracy</span>
                          <p className="text-2xl font-bold text-accent mt-1">
                            {detailUser.activity?.accuracy || 0}%
                          </p>
                        </div>
                      </div>

                      {/* Course by Course Activity */}
                      {detailUser.activity?.coursesActivity?.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-3">
                            Activity by Course
                          </h4>
                          <div className="space-y-2">
                            {detailUser.activity.coursesActivity.map((ca) => (
                              <div
                                key={ca.courseId}
                                className="p-3 bg-surface-2 rounded-lg border border-border flex items-center justify-between text-xs"
                              >
                                <div>
                                  <span className="font-semibold text-text-primary">
                                    Course ID: {ca.courseId}
                                  </span>
                                  <div className="text-text-muted mt-0.5">
                                    {ca.chaptersAttempted} chapter(s) attempted &bull; Last active:{' '}
                                    {formatDate(ca.lastAnsweredAt, true)}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="font-bold text-sm text-text-primary">
                                    {ca.accuracy}% accuracy
                                  </span>
                                  <div className="text-text-muted">
                                    {ca.correctAnswered} / {ca.totalAnswered} correct
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recent Answers sample */}
                      {detailUser.activity?.recentAnswers?.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-3">
                            Recent Answers (Latest 20)
                          </h4>
                          <div className="max-h-64 overflow-y-auto space-y-1.5 border border-border rounded-xl p-2 bg-surface-2">
                            {detailUser.activity.recentAnswers.map((ans) => (
                              <div
                                key={ans._id}
                                className="p-2 rounded bg-surface border border-border/60 flex items-center justify-between text-xs"
                              >
                                <div>
                                  <span className="font-mono text-text-primary">
                                    Question {ans.questionId}
                                  </span>{' '}
                                  <span className="text-text-muted">
                                    (Chapter: {ans.chapterId})
                                  </span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                                      ans.isCorrect
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : 'bg-danger/20 text-danger'
                                    }`}
                                  >
                                    {ans.isCorrect ? 'Correct' : 'Incorrect'}
                                  </span>
                                  <span className="text-text-muted">
                                    {formatDate(ans.answeredAt, true)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
