import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button label="click me" />);
    expect(screen.getByText('click me')).toBeInTheDocument();
  });

  it('should have class storybook-button-primary when button is primary', () => {
    render(<Button label="click me" primary />);
    expect(screen.getByText('click me')).toHaveClass(
      'storybook-button--primary',
    );
  });
});
