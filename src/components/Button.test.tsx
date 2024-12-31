import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick handler when clicked with disabled button', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} isDisabled />);
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
