import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>click me</Button>);
    expect(screen.getByText('click me')).toBeInTheDocument();
  });

  it('should render button as child', () => {
    render(
      <Button asChild>
        <p>click me</p>
      </Button>,
    );
    expect(screen.getByText('click me')).toBeInTheDocument();
  });
});
