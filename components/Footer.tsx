import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-neutral-800">
      <div className="flex overflow-hidden relative flex-col items-center px-20 pt-20 pb-10 w-full  max-md:px-5 max-md:max-w-full">
        <div className="flex relative gap-5 justify-between mt-4 w-full max-w-[1590px] max-md:flex-wrap max-md:max-w-full">
          <Image
            src="/assets/icons/discord.svg"
            alt="discord"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 193px"
            className="shrink-0 max-w-full aspect-[5.26] w-[193px]"
          />
          <Image
            src="/assets/icons/facebook.svg"
            alt="facebook"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 193px"
            className="shrink-0 max-w-full aspect-[5.26] w-[193px]"
          />
          <Image
            src="/assets/icons/instagram.svg"
            alt="instagram"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 193px"
            className="shrink-0 max-w-full aspect-[5.26] w-[193px]"
          />
        </div>

        <div className="relative shrink-0 mt-4 max-w-full h-px w-[1590px] max-md:mt-10" />
        <div className="flex relative gap-5 justify-between mt-16 w-full text-base leading-6 text-white max-w-[1590px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap">
            <div>©Copyright 2024 All Rights Are Reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
