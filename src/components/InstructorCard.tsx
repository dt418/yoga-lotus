import type React from 'react';

interface InstructorCardProps {
  name: string;
  description: string;
  imageUrl: string;
  socialIcons: string[];
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  name,
  description,
  imageUrl,
  socialIcons,
}) => {
  return (
    <div className="w-[427px] h-[506px] shrink-0 bg-[#100f0e] rounded-[10px] relative">
      <div
        className="w-[195px] h-[143px] bg-cover bg-no-repeat relative z-[67] mt-[28px] mr-0 mb-0 ml-[35px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <span className="block h-[27px] font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-[#c7a78a] relative text-left uppercase whitespace-nowrap z-[43] mt-[35px] mr-0 mb-0 ml-[35px]">
        {name}
      </span>
      <span className="flex w-[356px] h-[126px] justify-start items-start font-['SUSE'] text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[44] mt-[29px] mr-0 mb-0 ml-[35px]">
        {description}
      </span>
      <div className="flex w-[136px] h-[32px] justify-between items-center relative z-[54] mt-[46px] mr-0 mb-0 ml-[35px]">
        {socialIcons.map((icon, index) => (
          <div
            key={icon}
            className="w-[32px] h-[32px] shrink-0 bg-[length:100%_100%] bg-no-repeat relative"
            style={{ backgroundImage: `url(${icon})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorCard;
