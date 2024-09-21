import { render, screen } from '@testing-library/react';

import { Typography } from '../Typography';

describe('Typography', () => {
  it('should render correctly', () => {
    render(<Typography text="heading 1" />);
    expect(screen.getByText('heading 1')).toBeInTheDocument();
  });
});
