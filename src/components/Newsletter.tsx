const Newsletter = () => {
	return (
		<div className="w-[1321px] h-[302px] bg-[url(../assets/images/8e23ffe6-527f-4430-bdb6-a70e93a1ef17.png)] bg-cover bg-no-repeat relative z-[70] mt-[73px] mr-0 mb-0 ml-[60px]">
			<div className="w-[449px] h-[102px] font-['Gotham_Black'] text-[46px] font-medium leading-[50.83px] absolute top-[99px] left-[50px] text-left whitespace-nowrap z-[71]">
				<span className="font-['Gotham_Black'] text-[46px] font-medium leading-[55.2px] text-[#fff] relative text-left">
					STAY IN TOUCH
					<br />
					WITH
				</span>
				<span className="font-['Gotham_Black'] text-[46px] font-medium leading-[55.2px] text-[#c7a78a] relative text-left">
					THE LOTUS
				</span>
			</div>
			<div className="w-[459px] h-[67px] text-[0px] rounded-[40px] border-solid border-2 border-[#fff] absolute top-[117px] left-[566px] z-[75]">
				<span className="block h-[13px] font-['SUSE'] text-[10px] font-bold leading-[12.6px] text-[#c7a78a] tracking-[3.3px] relative text-left whitespace-nowrap z-[77] mt-[12px] mr-0 mb-0 ml-[38px]">
					YOUR EMAIL
				</span>
				<input
					type="email"
					placeholder="Eg. Jane Done"
					className="block h-[25px] w-full font-['SUSE'] text-[20px] font-normal leading-[25px] text-[#fff] bg-transparent border-none outline-none relative text-left whitespace-nowrap z-[78] mt-[5px] mr-0 mb-0 ml-[38px]"
				/>
			</div>
			<button
				type="button"
				className="w-[231px] h-[67px] bg-[#c7a78a] rounded-[40px] absolute top-[117px] left-[1043px] z-[76] hover:bg-[#b39578] transition-colors"
			>
				<span className="flex w-[174px] h-[18px] justify-center items-start font-['SUSE'] text-[14px] font-bold leading-[17.64px] text-[#191614] tracking-[3.22px] absolute top-[25px] left-[29px] text-center uppercase whitespace-nowrap z-[79]">
					SUBSCRIBE
				</span>
			</button>
		</div>
	);
};

export default Newsletter;
