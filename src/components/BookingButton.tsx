import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/lib/cn';

const bookingButtonVariants = cva(
  'w-[293px] rounded-[60px] relative z-[160] mt-[72px] mr-0 mb-0 py-[20px] px-[34px] flex row justify-between group',
  {
    variants: {
      variant: {
        light: 'bg-lotus-hover text-lotus-text fill-current',
        dark: 'bg-lotus-main text-lotus-black fill-current',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'dark',
      fullWidth: false,
    },
  },
);

interface BookingButtonProps
  extends React.HTMLProps<HTMLButtonElement>,
    VariantProps<typeof bookingButtonVariants> {}

const BookingButton: React.FC<BookingButtonProps> = ({
  type = 'button',
  className,
  variant,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={cn(bookingButtonVariants({ variant, fullWidth, className }))}
      {...props}
    >
      <span className="w-[174px] h-[18px] font-suse text-[14px] font-bold leading-[17.64px] border-none tracking-[3.22px] whitespace-nowrap pointer uppercase">
        Book a session
      </span>
      <span className="w-[14px] h-[11.5px] bg-[url(../assets/images/arrow-to-right.svg)] bg-[length:100%_100%] bg-no-repeat group-hover:translate-x-2 translate-x-0 transition duration-300" />
    </button>
  );
};

export default BookingButton;
