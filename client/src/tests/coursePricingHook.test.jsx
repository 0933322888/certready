import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '../context/AuthContext.jsx';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing.js';

vi.mock('../utils/api', () => ({
  default: {
    get: vi.fn(),
  },
}));

import api from '../utils/api';

function PricingProbe() {
  const { dispatch } = useAuth();
  const { pricing } = useCoursePricingBySlug('plumber-306a');

  return (
    <>
      <output>{pricing?.ownsCourse ? 'access-granted' : 'no-access'}</output>
      <button
        onClick={() => dispatch({
          type: 'SET_USER',
          payload: {
            id: 'user-1',
            purchases: [{ slug: 'plumber-306a' }],
          },
        })}
      >
        Start free preview
      </button>
    </>
  );
}

describe('course pricing access refresh', () => {
  beforeEach(() => {
    localStorage.clear();
    api.get.mockReset();
    api.get.mockImplementation(async () => ({
      data: {
        currentPrice: 0,
        fullPrice: 14900,
        ownsCourse: api.get.mock.calls.length > 1,
        isFreeWindowActive: true,
      },
    }));
  });

  it('refetches course access after the same user receives a preview purchase', async () => {
    render(
      <AuthProvider>
        <PricingProbe />
      </AuthProvider>
    );

    await waitFor(() => expect(api.get).toHaveBeenCalledTimes(1));
    fireEvent.click(screen.getByRole('button', { name: 'Start free preview' }));

    expect(await screen.findByText('access-granted')).toBeInTheDocument();
    expect(api.get).toHaveBeenCalledTimes(2);
  });
});
