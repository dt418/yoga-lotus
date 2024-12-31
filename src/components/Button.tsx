import type { MouseEventHandler } from 'react';

interface IButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}
function Button({ label, onClick, isDisabled }: Readonly<IButtonProps>) {
  return (
    <button
      onClick={onClick}
      type="button"
      data-testid="button"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}

export default Button;
