import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { paths } from '../../utils/routes';
import { PASS_REWARD_CONFIG } from '../../config/passReward';

export default function PassRewardBanner({ className = '', compact = false }) {
  if (compact) {
    return (
      <div className={`p-3 rounded-xl bg-accent-warm/10 border border-accent-warm/20 flex items-center justify-between gap-3 ${className}`}>
        <div className="flex items-center gap-2">
          <Badge variant="warm" className="text-xs shrink-0">Pass Reward</Badge>
          <p className="text-xs text-text-primary">
            Pass your exam and get your {PASS_REWARD_CONFIG.standardPriceCad} course fee back.
          </p>
        </div>
        <Link
          to={paths.passReward}
          className="text-xs font-semibold text-accent-warm hover:underline shrink-0"
        >
          Details →
        </Link>
      </div>
    );
  }

  return (
    <div className={`p-5 rounded-2xl bg-gradient-to-r from-accent-warm/15 via-accent/10 to-surface border border-accent-warm/30 relative overflow-hidden ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="warm" className="text-xs">
              {PASS_REWARD_CONFIG.headlines.badge}
            </Badge>
            <span className="text-xs text-text-muted">6-Month Window</span>
          </div>
          <h4 className="text-lg font-display font-bold text-text-primary">
            {PASS_REWARD_CONFIG.headlines.primary}
          </h4>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            Pass your certification exam within 6 months of purchase, submit reasonable proof, and we’ll refund your full course fee. No positive review required.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Link
            to={paths.passReward}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-surface border border-border text-sm font-semibold text-text-primary hover:text-accent hover:border-accent transition-colors"
          >
            Learn How It Works →
          </Link>
        </div>
      </div>
    </div>
  );
}
