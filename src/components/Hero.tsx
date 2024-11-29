import React from "react";

const Hero = () => {
	return (
		<div className="hero-section">
			<span className="block h-[20px] font-['SUSE'] text-[16px] font-bold leading-[20px] text-[#c7a78a] tracking-[9.6px] relative text-left whitespace-nowrap z-[158] mt-[115px] mr-0 mb-0 ml-[63px]">
				LOTUS GLOW YOGA CLUB
			</span>
			<div className="w-[489px] h-[162px] font-['Gotham_Black'] text-[73px] font-medium leading-[80.665px] relative text-left whitespace-nowrap z-[157] mt-[37px] mr-0 mb-0 ml-[60px]">
				<span className="font-['Gotham_Black'] text-[73px] font-medium leading-[87.6px] text-[#fff] relative text-left">
					FIND YOUR
					<br />
					INNER
				</span>
				<span className="font-['Gotham_Black'] text-[73px] font-medium leading-[87.6px] text-[#c7a78a] relative text-left">
					LIGHT
				</span>
			</div>
			<span className="flex w-[521px] h-[50px] justify-start items-start font-['SUSE'] text-[20px] font-normal leading-[25.2px] text-[#fff] relative text-left z-[159] mt-[52px] mr-0 mb-0 ml-[63px]">
				Illuminate your path with Lotus Glow – find balance and serenity through
				our organic yoga experience.
			</span>
			<div className="w-[293px] h-[69px] bg-[#c7a78a] rounded-[60px] relative z-[160] mt-[72px] mr-0 mb-0 ml-[60px]">
				<button
					type="button"
					className="w-[174px] h-[18px] font-['SUSE'] text-[14px] font-bold leading-[17.64px] text-[#191614] border-none tracking-[3.22px] absolute top-[25px] left-[34px] whitespace-nowrap z-[161] pointer"
				>
					BOOK A SESSION
				</button>
				<div className="w-[14px] h-[11.5px] bg-[url(../assets/images/dcb5c4f8-6282-4dbe-85c1-95b0e9ac5af8.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[28.25px] left-[246px] z-[200]" />
			</div>
		</div>
	);
};

export default Hero;
