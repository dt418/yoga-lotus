import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import BookingButton from "~/components/BookingButton";
import BookingModal from "~/components/BookingModal";
import Logo from "~/components/Logo";

export default function Main() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };
  return (
    <>
      <div className="main-container md:max-w-[1440px] bg-[#191614] relative overflow-hidden mx-auto my-0 z-[0]">
        <Link to={"/"}>
          <h1 className="inline-block ml-[60px] mt-[34px] z-10">
            <Logo width={155} height={127} title="Logo top" />
          </h1>
        </Link>
        <span className="block h-[20px] font-suse text-[16px] font-bold leading-[20px] text-lotus-main tracking-[9.6px] relative text-left whitespace-nowrap z-[158] mt-[115px] mr-0 mb-0 ml-[63px]">
          LOTUS GLOW YOGA CLUB
        </span>
        <div className="w-[489px] h-[162px] font-['Gotham_Black'] text-[73px] font-medium leading-[80.665px] relative text-left whitespace-nowrap z-[157] mt-[37px] mr-0 mb-0 ml-[60px]">
          <span className="font-['Gotham_Black'] text-[73px] font-medium leading-[87.6px] text-[#fff] relative text-left">
            FIND YOUR
            <br />
            INNER
          </span>
          <span className="font-['Gotham_Black'] text-[73px] font-medium leading-[87.6px] text-lotus-main relative text-left">
            LIGHT
          </span>
        </div>
        <span className="flex w-[521px] h-[50px] justify-start items-start font-suse text-[20px] font-normal leading-[25.2px] text-[#fff] relative text-left z-[159] mt-[52px] mr-0 mb-0 ml-[63px]">
          Illuminate your path with Lotus Glow – find balance and serenity
          through our organic yoga experience.
        </span>
        <BookingButton onClick={handleOpenBookingModal} className="ml-[63px]" />
        <div className="w-[641px] h-[81px] bg-lotus-main rounded-tl-[20px] rounded-tr-[60px] rounded-br-none rounded-bl-none relative z-[202] mt-[36px] mr-0 mb-0 ml-[739px]">
          <div className="w-[114px] h-[81px] bg-[#9a816a] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[160px] rounded-bl-none absolute top-0 left-0 z-[203]">
            <div className="w-[48px] h-[48px] relative overflow-hidden z-[205] mt-[17px] mr-0 mb-0 ml-[24px]">
              <div className="w-[38.6px] h-[38.6px] bg-[url(../assets/images/122cf8eb-6a50-4368-b01e-f3fe4890b8ac.png)] bg-[length:100%_100%] bg-no-repeat relative z-[206] mt-[4.7px] mr-0 mb-0 ml-[4.7px]" />
            </div>
          </div>
          <div className="w-[492px] h-[27px] font-suse text-[20px] font-medium leading-[25.2px] tracking-[4.6px] absolute top-[27px] left-[125px] text-center whitespace-nowrap z-[204]">
            <span className="font-['Gotham_Black'] text-[20px] font-medium leading-[25.2px] text-[#191614] tracking-[4.6px] relative text-center">
              GIVE US A CALL:
            </span>
            <span className="font-suse text-[20px] font-medium leading-[25.2px] text-[#191614] tracking-[4.6px] relative text-center">
              (312) 555-7890
            </span>
          </div>
        </div>
        <div className="w-[1440px] h-[406px] bg-[#0f0e0d] relative z-[1] mt-0 mr-0 mb-0 ml-0">
          <div className="w-[427px] h-[238px] bg-[url(../assets/images/8eebb04e-2b96-41eb-b694-88ed0c88a8f5.png)] bg-cover bg-no-repeat absolute top-[85px] left-[953px] z-[6]" />
          <span className="flex w-[386px] h-[225px] justify-start items-start font-suse text-[20px] font-normal leading-[25.2px] text-[#fff] absolute top-[85px] left-[507px] text-left z-[5]">
            At Lotus Glow, we believe in the power of mindful movement and inner
            peace. Our organic yoga practices are designed to nurture your body,
            calm your mind, and elevate your spirit. Join our community to
            experience a holistic approach to wellness in a serene and
            supportive environment. Discover your path to balance and
            tranquility with us.
          </span>
          <div className="w-[309px] h-[118px] font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] absolute top-[85px] left-[60px] text-left whitespace-nowrap z-[2]">
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[63.6px] text-[#fff] relative text-left">
              THE LOTUS
              <br />
            </span>
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[63.6px] text-lotus-main relative text-left">
              CLUB
            </span>
          </div>
        </div>
        <div className="flex w-[1311px] h-[118px] justify-between items-center relative z-[38] mt-[65px] mr-0 mb-0 ml-[67px]">
          <div className="w-[502px] h-[118px] shrink-0 font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] relative text-left whitespace-nowrap z-[3]">
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-[#fff] relative text-left">
              DISCOVER <br />
              THE LOTUS
            </span>
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-lotus-main relative text-left">
              TYPES
            </span>
          </div>
          <div className="w-[719.5px] h-px shrink-0 bg-[url(../assets/images/2933bdb6-6ea3-4de1-9e8e-7caba6c57449.png)] bg-cover bg-no-repeat relative z-[38]" />
        </div>
        <div className="flex w-[1317px] h-[325px] justify-between items-center relative z-[32] mt-[65px] mr-0 mb-0 ml-[60px]">
          <div className="w-[315px] h-[325px] shrink-0 text-[0px] bg-[#100f0e] rounded-[10px] relative z-[7]">
            <span className="block h-[13px] font-suse text-[10px] font-bold leading-[12.6px] text-[#4b443d] tracking-[3px] relative text-left whitespace-nowrap z-[13] mt-[101px] mr-0 mb-0 ml-[27px]">
              AWAKEN YOUR INNER ENERGY
            </span>
            <span className="flex w-[260px] h-[126px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[14] mt-[12px] mr-0 mb-0 ml-[27px]">
              Kundalini Yoga focuses on awakening the spiritual energy within
              through a combination of postures, breathwork, meditation, and
              chanting. This practice aims to elevate your consciousness,
              increase self-awareness, and bring a profound sense of inner peace
              and vitality.
            </span>
            <div className="w-[33px] h-[61px] bg-lotus-main rounded-tl-none rounded-tr-none rounded-br-[40px] rounded-bl-[40px] absolute top-0 left-[262px] z-[11]" />
            <span className="flex h-[27px] justify-start items-start font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main absolute top-[39px] left-[27px] text-left whitespace-nowrap z-[12]">
              Kundalini Yoga
            </span>
            <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-bold leading-[17.64px] text-lotus-main tracking-[3.22px] absolute top-[277px] left-[62px] text-left uppercase whitespace-nowrap z-[15]">
              Start Now!
            </span>
            <div className="w-[14px] h-[11.5px] bg-[url(../assets/images/bee0d322-d270-4c0e-ab38-9754d9d9ee05.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[280.25px] left-[27px] z-[156]" />
          </div>
          <div className="w-[650px] h-[325px] shrink-0 bg-[url(../assets/images/c94ad7b7-6994-4ba3-b2c1-b077046468bc.png)] bg-cover bg-no-repeat relative z-[32]" />
          <div className="w-[315px] h-[325px] shrink-0 text-[0px] bg-[#100f0e] rounded-[10px] relative z-10">
            <span className="block h-[13px] font-suse text-[10px] font-bold leading-[12.6px] text-[#4b443d] tracking-[3px] relative text-left uppercase whitespace-nowrap z-[28] mt-[101px] mr-0 mb-0 ml-[28px]">
              Deep Relaxation and Flexibility
            </span>
            <span className="flex w-[260px] h-[108px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[29] mt-[12px] mr-0 mb-0 ml-[28px]">
              Yin Yoga involves holding postures for extended periods to target
              deep connective tissues and promote flexibility and relaxation.
              This meditative practice encourages the release of tension and
              fosters a sense of calm and introspection.
            </span>
            <div className="w-[33px] h-[61px] bg-lotus-main rounded-tl-none rounded-tr-none rounded-br-[40px] rounded-bl-[40px] absolute top-0 left-[263px] z-[26]" />
            <span className="flex h-[27px] justify-start items-start font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main absolute top-[39px] left-[28px] text-left whitespace-nowrap z-[27]">
              Yin Yoga
            </span>
            <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-bold leading-[17.64px] text-lotus-main tracking-[3.22px] absolute top-[277px] left-[63px] text-left uppercase whitespace-nowrap z-30">
              Start Now!
            </span>
            <div className="w-[14px] h-[11.5px] bg-[url(../assets/images/48bde671-c77a-43a6-805f-ea74a0b819da.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[280.25px] left-[28px] z-[154]" />
          </div>
        </div>
        <div className="flex w-[1317px] h-[325px] justify-between items-center relative z-[31] mt-[29px] mr-0 mb-0 ml-[60px]">
          <div className="w-[315px] h-[325px] shrink-0 text-[0px] bg-[#100f0e] rounded-[10px] relative z-[9]">
            <span className="block h-[13px] font-suse text-[10px] font-bold leading-[12.6px] text-[#4b443d] tracking-[3px] relative text-left uppercase whitespace-nowrap z-[18] mt-[101px] mr-0 mb-0 ml-[27px]">
              Detox and Strengthen
            </span>
            <span className="flex w-[260px] h-[108px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[19] mt-[12px] mr-0 mb-0 ml-[27px]">
              Bikram Yoga is practiced in a heated room with a fixed sequence of
              26 postures and 2 breathing exercises. The heat enhances
              flexibility, promotes detoxification, and provides a challenging
              workout that strengthens and tones the body.
            </span>
            <div className="w-[33px] h-[61px] bg-lotus-main rounded-tl-none rounded-tr-none rounded-br-[40px] rounded-bl-[40px] absolute top-0 left-[262px] z-[16]" />
            <span className="flex h-[27px] justify-start items-start font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main absolute top-[39px] left-[27px] text-left whitespace-nowrap z-[17]">
              Bikram Yoga
            </span>
            <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-bold leading-[17.64px] text-lotus-main tracking-[3.22px] absolute top-[277px] left-[62px] text-left uppercase whitespace-nowrap z-20">
              Start Now!
            </span>
            <div className="w-[14px] h-[11.5px] bg-[url(../assets/images/aa832b17-9548-4118-9a6e-0773138cef4e.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[279.25px] left-[27px] z-[152]" />
          </div>
          <div className="w-[315px] h-[325px] shrink-0 text-[0px] bg-[#100f0e] rounded-[10px] relative z-[8]">
            <span className="block h-[13px] font-suse text-[10px] font-bold leading-[12.6px] text-[#4b443d] tracking-[3px] relative text-left uppercase whitespace-nowrap z-[23] mt-[101px] mr-0 mb-0 ml-[30px]">
              Precision and Alignment
            </span>
            <span className="flex w-[260px] h-[108px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[24] mt-[12px] mr-0 mb-0 ml-[30px]">
              Iyengar Yoga emphasizes precise alignment and the use of props to
              help practitioners achieve correct postures. This method builds
              strength, flexibility, and stability while improving overall
              posture and reducing the risk of injury.
            </span>
            <div className="w-[33px] h-[61px] bg-lotus-main rounded-tl-none rounded-tr-none rounded-br-[40px] rounded-bl-[40px] absolute top-0 left-[265px] z-[21]" />
            <span className="flex h-[27px] justify-start items-start font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main absolute top-[39px] left-[30px] text-left whitespace-nowrap z-[22]">
              Iyengar Yoga
            </span>
            <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-bold leading-[17.64px] text-lotus-main tracking-[3.22px] absolute top-[277px] left-[65px] text-left uppercase whitespace-nowrap z-[25]">
              Start Now!
            </span>
            <div className="w-[14px] h-[11.5px] bg-[url(../assets/images/8eb7d4ba-fe67-410a-864c-b6ef8c786643.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[279.25px] left-[32px] z-[150]" />
          </div>
          <div className="w-[647px] h-[325px] shrink-0 bg-[url(../assets/images/a9cffb28-9d0b-41db-9af1-77c74a456ab6.png)] bg-cover bg-no-repeat relative z-[31]" />
        </div>
        <div className="w-[1320px] h-[438px] bg-[url(../assets/images/f02cec1a-06d4-4b39-9cf4-a2c02a9fb7e8.png)] bg-cover bg-no-repeat relative z-[33] mt-[70px] mr-0 mb-0 ml-[60px]">
          <div className="w-[769px] h-[118px] font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] relative text-center z-[34] mt-[76px] mr-0 mb-0 ml-[275px]">
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[63.6px] text-[#fff] relative text-center">
              THE LOTUS PATH TO YOUR
            </span>
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[63.6px] text-lotus-main relative text-center">
              INNER HARMONY
            </span>
          </div>
          <span className="flex w-[520px] h-[25px] justify-center items-start font-suse text-[20px] font-normal leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[35] mt-[35px] mr-0 mb-0 ml-[400px]">
            Join +1K Members in the Lotus Club
          </span>
          <BookingButton />
        </div>
        <div className="flex w-[1319.5px] h-[118px] justify-between items-center relative z-[39] mt-[78px] mr-0 mb-0 ml-[60px]">
          <div className="w-[475px] h-[118px] shrink-0 font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] relative text-left whitespace-nowrap z-[4]">
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-[#fff] relative text-left">
              MEET THE LOTUS
              <br />
            </span>
            <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-lotus-main relative text-left">
              INSTRUCTORS
            </span>
          </div>
          <div className="w-[719.5px] h-px shrink-0 bg-[url(../assets/images/70584609-6056-42ca-bb3e-7e284963e467.png)] bg-cover bg-no-repeat relative z-[39]" />
        </div>
        <div className="flex w-[1321px] h-[506px] justify-between items-center relative z-[42] mt-[67px] mr-0 mb-0 ml-[60px]">
          <div className="w-[427px] h-[506px] shrink-0 bg-[#100f0e] rounded-[10px] relative z-40">
            <div className="w-[195px] h-[143px] bg-[url(../assets/images/0a2b3757-67a9-4a78-a4e7-8a6bb7aba102.png)] bg-cover bg-no-repeat relative z-[67] mt-[28px] mr-0 mb-0 ml-[35px]" />
            <span className="block h-[27px] font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main relative text-left uppercase whitespace-nowrap z-[43] mt-[35px] mr-0 mb-0 ml-[35px]">
              Ava Hart
            </span>
            <span className="flex w-[356px] h-[126px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[44] mt-[29px] mr-0 mb-0 ml-[35px]">
              Ava Hart is a dedicated instructor specializing in Kundalini Yoga.
              With over 10 years of experience, Ava is known for her ability to
              guide students through transformative practices that awaken
              spiritual energy and promote self-awareness. Her classes integrate
              dynamic postures, breathwork, and meditation to help students
              achieve a deeper connection with their inner selves.
            </span>
            <div className="flex w-[136px] h-[32px] justify-between items-center relative z-[54] mt-[46px] mr-0 mb-0 ml-[35px]">
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/e90bf78b-e0c9-4438-8bb9-e97769e3c772.png)] bg-[length:100%_100%] bg-no-repeat relative z-[54]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/ad9f5196-a834-4334-bf6d-fe97d931fbc5.png)] bg-[length:100%_100%] bg-no-repeat relative z-[52]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/99bb3a51-1426-4a0a-805e-35bfb105530f.png)] bg-[length:100%_100%] bg-no-repeat relative z-50" />
            </div>
          </div>
          <div className="w-[427px] h-[506px] shrink-0 bg-[#100f0e] rounded-[10px] relative z-[41]">
            <div className="w-[195px] h-[143px] bg-[url(../assets/images/4d023761-197a-4868-920d-8040d7019cdb.png)] bg-cover bg-no-repeat relative z-[68] mt-[28px] mr-0 mb-0 ml-[36px]" />
            <span className="block h-[27px] font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main relative text-left uppercase whitespace-nowrap z-[45] mt-[35px] mr-0 mb-0 ml-[36px]">
              SOFIA WELLS
            </span>
            <span className="flex w-[356px] h-[108px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[46] mt-[29px] mr-0 mb-0 ml-[36px]">
              Sofia Wells focuses on Yin Yoga, bringing a calming and
              restorative approach to her practice. With extensive training in
              gentle, long-held postures, Sofia helps students release
              deep-seated tension and improve flexibility. Her nurturing
              guidance and emphasis on mindfulness create a serene environment
              for deep relaxation and healing.
            </span>
            <div className="flex w-[136px] h-[32px] justify-between items-center relative z-[60] mt-[64px] mr-0 mb-0 ml-[36px]">
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/741484b2-0da6-42f0-9bf4-ec19973e4628.png)] bg-[length:100%_100%] bg-no-repeat relative z-[60]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/0460267f-be44-49c5-9a2a-7828f692301b.png)] bg-[length:100%_100%] bg-no-repeat relative z-[58]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/3243c42f-f7a7-4f26-a08d-06fafc4b758c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[56]" />
            </div>
          </div>
          <div className="w-[427px] h-[506px] shrink-0 bg-[#100f0e] rounded-[10px] relative z-[42]">
            <div className="w-[195px] h-[143px] bg-[url(../assets/images/5fd9de33-f29e-4349-b903-d8e063764a7f.png)] bg-cover bg-no-repeat relative z-[69] mt-[28px] mr-0 mb-0 ml-[36px]" />
            <span className="block h-[27px] font-['Gotham_Black'] text-[24px] font-medium leading-[26.52px] text-lotus-main relative text-left uppercase whitespace-nowrap z-[47] mt-[35px] mr-0 mb-0 ml-[36px]">
              Maya Collins
            </span>
            <span className="flex w-[356px] h-[126px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] relative text-left z-[48] mt-[29px] mr-0 mb-0 ml-[36px]">
              Maya Collins is an expert in Bikram Yoga and Iyengar Yoga. Her
              Bikram classes are held in a heated environment to enhance
              detoxification and flexibility, while her Iyengar sessions
              emphasize precise alignment and the use of props to support
              students’ practice. Maya’s comprehensive approach ensures a
              well-rounded and effective yoga experience for all levels.
            </span>
            <div className="flex w-[136px] h-[32px] justify-between items-center relative z-[66] mt-[46px] mr-0 mb-0 ml-[36px]">
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/16599df0-6c0a-47ae-8730-420bb5f0bad6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[66]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/0712876f-8b6f-41b9-89c0-d08ff4fba070.png)] bg-[length:100%_100%] bg-no-repeat relative z-[64]" />
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/7234556f-2a2e-44ef-a88c-fde1d3efe1a2.png)] bg-[length:100%_100%] bg-no-repeat relative z-[62]" />
            </div>
          </div>
        </div>
        <div className="w-[1321px] h-[302px] bg-[url(../assets/images/8e23ffe6-527f-4430-bdb6-a70e93a1ef17.png)] bg-cover bg-no-repeat relative z-[70] mt-[73px] mr-0 mb-0 ml-[60px]">
          <div className="w-[449px] h-[102px] font-['Gotham_Black'] text-[46px] font-medium leading-[50.83px] absolute top-[99px] left-[50px] text-left whitespace-nowrap z-[71]">
            <span className="font-['Gotham_Black'] text-[46px] font-medium leading-[55.2px] text-[#fff] relative text-left">
              STAY IN TOUCH
              <br />
              WITH
            </span>
            <span className="font-['Gotham_Black'] text-[46px] font-medium leading-[55.2px] text-lotus-main relative text-left">
              THE LOTUS
            </span>
          </div>
          <div className="w-[459px] h-[67px] text-[0px] rounded-[40px] border-solid border-2 border-[#fff] absolute top-[117px] left-[566px] z-[75]">
            <span className="block h-[13px] font-suse text-[10px] font-bold leading-[12.6px] text-lotus-main tracking-[3.3px] relative text-left whitespace-nowrap z-[77] mt-[12px] mr-0 mb-0 ml-[38px]">
              YOUR EMAIL
            </span>
            <span className="block h-[25px] font-suse text-[20px] font-normal leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[78] mt-[5px] mr-0 mb-0 ml-[38px]">
              Eg. Jane Done
            </span>
          </div>
          <div className="w-[231px] h-[67px] bg-lotus-main rounded-[40px] absolute top-[117px] left-[1043px] z-[76]">
            <span className="flex w-[174px] h-[18px] justify-center items-start font-suse text-[14px] font-bold leading-[17.64px] text-[#191614] tracking-[3.22px] absolute top-[25px] left-[29px] text-center uppercase whitespace-nowrap z-[79]">
              SUBSCRIBE
            </span>
          </div>
        </div>
        <div className="w-[1297px] h-[185.992px] relative z-[142] mt-[73.008px] mr-0 mb-0 ml-[60px]">
          <Link to="/">
            <h1>
              <Logo width={214} height={175} title="Logo bottom" />
            </h1>
          </Link>
          <span className="flex h-[22px] justify-start items-start font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] absolute top-[7.992px] left-[337px] text-left whitespace-nowrap z-[72]">
            PAY US A VISIT
          </span>
          <span className="flex h-[22px] justify-start items-start font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] absolute top-[7.992px] left-[670px] text-left whitespace-nowrap z-[73]">
            LOTUS GLOW
          </span>
          <span className="flex h-[22px] justify-start items-start font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] absolute top-[7.992px] left-[1005px] text-left whitespace-nowrap z-[74]">
            FIND YOUR INNER LIGHT
          </span>
          <span className="flex w-[188px] h-[36px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] absolute top-[57.992px] left-[382px] text-left z-[111]">
            432 Evergreen TerraceSpringfield, IL 62704
          </span>
          <span className="flex w-[188px] h-[128px] justify-start items-start font-suse text-[14px] font-normal leading-[32px] text-[#fff] absolute top-[57.992px] left-[674px] text-left overflow-hidden z-[113]">
            About Us
            <br />
            Lotus Types
            <br />
            Instructors
            <br />
            Join The Club
          </span>
          <div className="w-[34px] h-[22px] bg-lotus-main rounded-tl-none rounded-tr-[40px] rounded-br-[40px] rounded-bl-none absolute top-[58.992px] left-[335px] z-[117]">
            <div className="w-[9.5px] h-[11.25px] bg-[url(../assets/images/3ca6348d-683c-4bd8-87fa-c22726087995.png)] bg-[length:100%_100%] bg-no-repeat relative z-[119] mt-[4.875px] mr-0 mb-0 ml-[11.25px]" />
          </div>
          <div className="w-[32px] h-[32px] bg-[url(../assets/images/1470a982-2c99-4551-983f-18c299bdaf10.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[69.992px] left-[1005px] z-[133]" />
          <div className="w-[2.62%] h-[18.28%] bg-[url(../assets/images/f2651e29-56ca-4bf1-a4da-1d99b844b1b8.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[37.36%] left-[81.38%] z-[139]">
            <div className="w-[20.427px] h-[19.119px] bg-[url(../assets/images/f21b646c-34c6-468e-b65d-10466d28af8c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[141] mt-[7.44px] mr-0 mb-0 ml-[6.786px]" />
          </div>
          <div className="w-[32px] h-[32px] bg-[url(../assets/images/0a2e7461-5ac8-409c-90c5-39c7c03d57a2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[69.992px] left-[1109px] z-[135]" />
          <div className="w-[32px] h-[32px] bg-[url(../assets/images/2f3ebec4-4abc-4047-9af4-a0055f9198d0.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[69.992px] left-[1161px] z-[137]" />
          <div className="w-[32px] h-[32px] bg-[url(../assets/images/e1e04545-707d-4b45-aa39-1d2adb800868.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[69.992px] left-[1213px] z-[131]" />
          <div className="w-[32px] h-[32px] bg-[url(../assets/images/ebb55949-8393-433c-8a40-5846a0c2ece5.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[69.992px] left-[1265px] z-[129]" />
          <div className="w-[34px] h-[22px] bg-lotus-main rounded-tl-none rounded-tr-[40px] rounded-br-[40px] rounded-bl-none absolute top-[111.992px] left-[335px] z-[121]">
            <div className="w-[11.25px] h-[11.25px] bg-[url(../assets/images/bd7f3c89-ccc8-49c1-bdbc-7974ba2bb841.png)] bg-[length:100%_100%] bg-no-repeat relative z-[123] mt-[4.875px] mr-0 mb-0 ml-[9.875px]" />
          </div>
          <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] absolute top-[112.992px] left-[382px] text-left whitespace-nowrap z-[114]">
            (312) 555-7890
          </span>
          <div className="w-[265px] h-[47px] bg-lotus-main rounded-[60px] absolute top-[133.992px] left-[1005px] z-[142]">
            <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-bold leading-[17.64px] text-[#191614] tracking-[3.22px] absolute top-[15px] left-[26px] text-left uppercase whitespace-nowrap z-[143]">
              Book a Session
            </span>
            <div className="w-[13.5px] h-[9.5px] bg-[url(../assets/images/833a6cd3-6765-4dae-9fc2-8ea63d62d5e4.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[18.25px] left-[224.25px] z-[145]" />
          </div>
          <div className="w-[34px] h-[22px] bg-lotus-main rounded-tl-none rounded-tr-[40px] rounded-br-[40px] rounded-bl-none absolute top-[155.992px] left-[335px] z-[125]">
            <div className="w-[11.25px] h-[8.5px] bg-[url(../assets/images/bef66a2d-c2d9-4cec-94d3-07e340722d68.png)] bg-[length:100%_100%] bg-no-repeat relative z-[127] mt-[6.75px] mr-0 mb-0 ml-[9.875px]" />
          </div>
          <span className="flex h-[18px] justify-start items-start font-suse text-[14px] font-normal leading-[17.64px] text-[#fff] absolute top-[157.992px] left-[382px] text-left whitespace-nowrap z-[115]">
            Contact@lotusglow.com
          </span>
        </div>
        <div className="w-[1319.5px] h-px bg-[url(../assets/images/be2a1910-5829-4490-b08e-43ee2c8952a2.png)] bg-cover bg-no-repeat relative z-[146] mt-[49px] mr-0 mb-0 ml-[60px]" />
        <span className="flex w-[792px] h-[18px] justify-center items-start font-suse text-[14px] font-bold leading-[17.64px] text-lotus-main tracking-[4.62px] relative text-center whitespace-nowrap z-[112] mt-[29px] mr-0 mb-0 ml-[324px]">
          LOTUS GLOW YOGA CLUB ALL RIGHTS RESERVED 2024
        </span>
        {/* <div className="inline w-full h-[856px] bg-[url(../assets/images/5be85dd5-00a6-4f69-9815-73727cb9312a.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-0" /> */}
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />
    </>
  );
}
