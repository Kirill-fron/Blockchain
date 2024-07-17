import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden relative flex-col items-center px-4 sm:px-6 lg:px-8 w-full min-h-screen">
        <div className="flex relative gap-2.5 mt-20 sm:mt-28 lg:mt-36 text-xl sm:text-2xl font-semibold leading-9 text-blue-600">
          <div className="shrink-0 my-auto w-8 sm:w-10 h-0.5 bg-blue-600 border-2 border-blue-600 border-solid" />
          <div>Crypto Brains</div>
        </div>
        <h1 className="relative mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tighter text-center text-white">
          Poster Can Be One of The Effective Marketing <br className="hidden sm:inline" />
          and Advertising Materials.
        </h1>
        <p className="relative mt-8 sm:mt-11 text-base sm:text-lg leading-7 text-center text-gray-400 max-w-3xl">
        Lorem Ipsum has been the industry&apos;s standard dummy text since
  the 1500s, when an unknown printer took a galley of type and
  scrambled type specimen book.
        </p>
        <Image
          className="mt-12 sm:mt-16 lg:mt-20 max-w-full w-full sm:w-auto h-auto"
          src="/assets/3d_male_character.png"
          alt="projects"
          width={843}
          height={580}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 843px"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 justify-between self-center p-8 sm:p-10 w-full bg-neutral-800">
        {[
          { number: "10M +", text: "Trusted Users" },
          { number: "₹ 20B +", text: "Coins Purchased" },
          { number: "10 +", text: "Years of Experience" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center sm:items-start">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{item.number}</div>
            <div className="mt-2 text-xl sm:text-2xl leading-9 text-gray-300">{item.text}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center bg-neutral-800">
        <div className="flex overflow-hidden relative flex-col items-center p-8 sm:p-12 lg:p-20 w-full">
          <div className="relative w-full max-w-6xl">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="w-full sm:w-2/5">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  What Traders Saying About Us!
                </h2>
              </div>
              <div className="w-full sm:w-3/5">
                <p className="text-base sm:text-lg leading-7 text-gray-400">
                Lorem Ipsum has been the industry&apos;s standard dummy text since
  the 1500s, when an unknown printer took a galley of type and
  scrambled type specimen book.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-px bg-gray-700 my-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex flex-col p-6 sm:p-8 bg-gray-800 rounded-xl">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/WesternMan.png"
                    alt="User avatar"
                    width={72}
                    height={72}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-xl font-semibold text-white">John Doe</div>
                    <div className="text-sm text-neutral-300">USA, America</div>
                  </div>
                </div>
                <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white">
                &quot;Lorem Ipsum has been the industry&apos;s standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book.&quot;
                </p>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Page;
