import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { cn } from "~/lib/cn";
import { type BookingFormData, bookingSchema } from "~/schemas/booking";
import BookingButton from "./BookingButton";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      sessionType: "Yin Yoga",
      date: "",
      time: "",
    },
  });

  const onSubmit = async (data: BookingFormData): Promise<void> => {
    try {
      // Simulate API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      reset(); // Clear form data
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-65 backdrop-blur-md z-50",
        "animate-in fade-in duration-200",
        "flex items-center justify-center",
      )}
      onClick={onClose}
      onKeyUp={onClose}
    >
      <div
        className={cn(
          "bg-[url('../assets/images/bg-booking-modal.png')] bg-cover bg-bottom md:bg-center bg-no-repeat rounded-[20px] shadow-xl relative overflow-hidden",
          "animate-in slide-in-from-top-4 duration-300",
          "w-full md:max-w-[987.5px] 2xl:max-w-[1317px]",
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
      >
        <div className=" bg-lotus-black bg-opacity-65 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-0 right-[35px] md:right-[112px] text-white h-[160px] w-[112px] bg-lotus-black rounded-b-full flex justify-center items-center"
          >
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="">
            <div className="flex flex-col justify-center pt-[150px] px-[32px] pb-[74px] md:px-[74px] md:pt-[160px] md:pb-[148px]">
              <h3 className="md:text-base font-suse font-bold leading-[1.25] text-center md:text-left">
                JOIN THE LOTUS GLOW
              </h3>
              <h2 className="text-[53px] px-[40px] md:px-0 md:text-7xl font-bold leading-[1.15] text-center md:text-left">
                <span className="text-lotus-main">BOOK</span> A{" "}
                <span>SESSION</span>
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-lotus-main inset-0 md:px-[80px] md:pt-[20px] md:pb-[40px]"
              noValidate
            >
              <div className="space-y-4 ">
                <div>
                  <label
                    className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                    htmlFor="fullName"
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    className={cn(
                      "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                      "text-white font-suse placeholder:text-white/80",
                      "focus:border-white focus:outline-none transition-colors",
                      errors.fullName && "border-red-500",
                    )}
                    placeholder="Eg. Jane Done"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                      htmlFor="email"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={cn(
                        "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                        "text-white font-suse placeholder:text-white/80",
                        "focus:border-white focus:outline-none transition-colors",
                        errors.email && "border-red-500",
                      )}
                      placeholder="Eg. janedoe@gmail.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                      htmlFor="phone"
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={cn(
                        "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                        "text-white font-suse placeholder:text-white/80",
                        "focus:border-white focus:outline-none transition-colors",
                        errors.phone && "border-red-500",
                      )}
                      placeholder="Eg. 1631260100"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                    htmlFor="sessionType"
                  >
                    PREFERRED SESSION TYPE
                  </label>
                  <select
                    id="sessionType"
                    {...register("sessionType")}
                    className={cn(
                      "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                      "text-white font-suse",
                      "focus:border-white focus:outline-none transition-colors",
                      errors.sessionType && "border-red-500",
                    )}
                  >
                    <option value="Yin Yoga" className="bg-[#191614]">
                      Yin Yoga
                    </option>
                    <option value="Hatha Yoga" className="bg-[#191614]">
                      Hatha Yoga
                    </option>
                    <option value="Vinyasa Flow" className="bg-[#191614]">
                      Vinyasa Flow
                    </option>
                    <option value="Power Yoga" className="bg-[#191614]">
                      Power Yoga
                    </option>
                  </select>
                  {errors.sessionType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sessionType.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                      htmlFor="date"
                    >
                      DATE
                    </label>
                    <input
                      type="date"
                      id="date"
                      {...register("date")}
                      className={cn(
                        "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                        "text-white font-suse placeholder:text-white/80",
                        "focus:border-white focus:outline-none transition-colors",
                        errors.date && "border-red-500",
                      )}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-suse tracking-[3.3px] text-lotus-black mb-2"
                      htmlFor="time"
                    >
                      TIME
                    </label>
                    <input
                      type="time"
                      id="time"
                      {...register("time")}
                      className={cn(
                        "w-full bg-transparent border-2 border-white/80 rounded-full px-8 py-4",
                        "text-white font-suse placeholder:text-white/80",
                        "focus:border-white focus:outline-none transition-colors",
                        errors.time && "border-red-500",
                      )}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <BookingButton type="submit" variant="light">
                  BOOK NOW
                </BookingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
