import InstructorCard from "./InstructorCard";

interface InstructorData {
  name: string;
  description: string;
  imageUrl: string;
  socialIcons: string[];
}

export default function InstructorSection() {
  const instructors: InstructorData[] = [
    {
      name: "Ava Hart",
      description:
        "Ava Hart is a dedicated instructor specializing in Kundalini Yoga. With over 10 years of experience, Ava is known for her ability to guide students through transformative practices that awaken spiritual energy and promote self-awareness. Her classes integrate dynamic postures, breathwork, and meditation to help students achieve a deeper connection with their inner selves.",
      imageUrl: "../assets/images/0a2b3757-67a9-4a78-a4e7-8a6bb7aba102.png",
      socialIcons: [
        "../assets/images/e90bf78b-e0c9-4438-8bb9-e97769e3c772.png",
        "../assets/images/ad9f5196-a834-4334-bf6d-fe97d931fbc5.png",
        "../assets/images/99bb3a51-1426-4a0a-805e-35bfb105530f.png",
      ],
    },
    {
      name: "Sofia Wells",
      description:
        "Sofia Wells focuses on Yin Yoga, bringing a calming and restorative approach to her practice. With extensive training in gentle, long-held postures, Sofia helps students release deep-seated tension and improve flexibility. Her nurturing guidance and emphasis on mindfulness create a serene environment for deep relaxation and healing.",
      imageUrl: "../assets/images/4d023761-197a-4868-920d-8040d7019cdb.png",
      socialIcons: [
        "../assets/images/741484b2-0da6-42f0-9bf4-ec19973e4628.png",
        "../assets/images/0460267f-be44-49c5-9a2a-7828f692301b.png",
        "../assets/images/3243c42f-f7a7-4f26-a08d-06fafc4b758c.png",
      ],
    },
    {
      name: "Maya Collins",
      description:
        "Maya Collins is an expert in Bikram Yoga and Iyengar Yoga. Her Bikram classes are held in a heated environment to enhance detoxification and flexibility, while her Iyengar sessions emphasize precise alignment and the use of props to support students' practice. Maya's comprehensive approach ensures a well-rounded and effective yoga experience for all levels.",
      imageUrl: "../assets/images/5fd9de33-f29e-4349-b903-d8e063764a7f.png",
      socialIcons: [
        "../assets/images/16599df0-6c0a-47ae-8730-420bb5f0bad6.png",
        "../assets/images/0712876f-8b6f-41b9-89c0-d08ff4fba070.png",
        "../assets/images/7234556f-2a2e-44ef-a88c-fde1d3efe1a2.png",
      ],
    },
  ];

  return (
    <>
      <div className="flex w-[1319.5px] h-[118px] justify-between items-center relative z-[39] mt-[78px] mr-0 mb-0 ml-[60px]">
        <div className="w-[475px] h-[118px] shrink-0 font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] relative text-left whitespace-nowrap z-[4]">
          <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-[#fff] relative text-left">
            MEET THE LOTUS
          </span>
          <span className="font-['Gotham_Black'] text-[53px] font-medium leading-[58.565px] text-[#c7a78a] relative text-left">
            MASTERS
          </span>
        </div>
        <div className="w-[719.5px] h-px shrink-0 bg-[url(../assets/images/70584609-6056-42ca-bb3e-7e284963e467.png)] bg-cover bg-no-repeat relative z-[39]" />
      </div>

      <div className="flex w-[1321px] h-[506px] justify-between items-center relative z-[42] mt-[67px] mr-0 mb-0 ml-[60px]">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </>
  );
}
