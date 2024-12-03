const ContactBar = () => {
  return (
    <div className="w-[641px] h-[81px] bg-[#c7a78a] rounded-tl-[20px] rounded-tr-[60px] rounded-br-none rounded-bl-none relative z-[202] mt-[36px] mr-0 mb-0 ml-[739px]">
      <div className="w-[114px] h-[81px] bg-[#9a816a] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[160px] rounded-bl-none absolute top-0 left-0 z-[203]">
        <div className="w-[48px] h-[48px] relative overflow-hidden z-[205] mt-[17px] mr-0 mb-0 ml-[24px]">
          <div className="w-[38.6px] h-[38.6px] bg-[url(../assets/images/122cf8eb-6a50-4368-b01e-f3fe4890b8ac.png)] bg-[length:100%_100%] bg-no-repeat relative z-[206] mt-[4.7px] mr-0 mb-0 ml-[4.7px]" />
        </div>
      </div>
      <div className="w-[492px] h-[27px] font-['SUSE'] text-[20px] font-medium leading-[25.2px] tracking-[4.6px] absolute top-[27px] left-[125px] text-center whitespace-nowrap z-[204]">
        <span className="font-['Gotham_Black'] text-[20px] font-medium leading-[25.2px] text-[#191614] tracking-[4.6px] relative text-center">
          GIVE US A CALL:
        </span>
        <span className="font-['SUSE'] text-[20px] font-medium leading-[25.2px] text-[#191614] tracking-[4.6px] relative text-center">
          {' '}
          (312) 555-7890
        </span>
      </div>
    </div>
  );
};

export default ContactBar;
