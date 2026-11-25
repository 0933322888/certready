import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from '../context/AuthContext.jsx';

function MockExamAccessProbe() {
  const { dispatch, hasMockExamAccess } = useAuth();

  return (
    <>
      <output>{hasMockExamAccess('plumber-306a') ? 'unlocked' : 'locked'}</output>
      <button
        onClick={() => dispatch({
          type: 'SET_USER',
          payload: {
            purchases: [{ slug: 'plumber-306a' }],
            mockExamSlugs: [],
          },
        })}
      >
        Add free-window purchase
      </button>
      <button
        onClick={() => dispatch({
          type: 'SET_USER',
          payload: {
            purchases: [{ slug: 'plumber-306a' }],
            mockExamSlugs: ['plumber-306a'],
          },
        })}
      >
        Add full-access purchase
      </button>
    </>
  );
}

describe('AuthContext course access', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('does not treat a free-window course purchase as full-course access', () => {
    render(
      <AuthProvider>
        <MockExamAccessProbe />
      </AuthProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add free-window purchase' }));
    expect(screen.getByText('locked')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Add full-access purchase' }));
    expect(screen.getByText('unlocked')).toBeInTheDocument();
  });
});
