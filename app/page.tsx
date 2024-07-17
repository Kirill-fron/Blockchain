import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <div className="flex overflow-hidden relative flex-col pb-8 w-full min-h-screen">
        <div className="flex relative flex-col self-center px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 lg:mt-40 w-full max-w-7xl">
          <div className="flex gap-2.5 self-start text-lg sm:text-xl lg:text-2xl font-semibold leading-9 text-blue-600">
            <div className="shrink-0 my-auto w-8 sm:w-10 h-0.5 bg-blue-600 border-2 border-blue-600 border-solid" />
            <div>Crypto Brains</div>
          </div>
          <h1 className="mt-6 sm:mt-8 lg:mt-10 text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-slate-50">
            Buy & Sell Crypto Easy
            <br />
            With Crypto Brains
          </h1>
          <div className="hidden sm:block shrink-0 mt-4 ml-0 sm:ml-24 lg:ml-48 max-w-full h-0.5 w-full sm:w-[60%] lg:w-[547px]" />
          <p className="mt-4 sm:mt-6 lg:mt-7 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mt-20 sm:mt-32 lg:mt-40">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col px-4 py-2.5 rounded bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm sm:text-base leading-6 text-gray-600">
                    BTC / INR
                  </div>
                  <div className="flex gap-1.5 items-center text-xs sm:text-sm font-semibold leading-5 text-emerald-500 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a5ec3ddc96ad9f30d8e780f331b86b45cd229abca630cfd45e5c715c821fe48?apiKey=237bdc947ea641029dc710c0a8f395df&"
                      className="w-4 sm:w-[18px] aspect-square"
                      alt=""
                    />
                    <div>5.76%</div>
                  </div>
                </div>
                <div className="mt-2 text-base sm:text-lg lg:text-xl font-semibold leading-8 text-black animated-text">
                  ₹ 28,214,25.341
                </div>
              </div>
            ))}
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[160px] lg:h-[160px] mt-10 self-center sm:self-start">
            <Image
              src="/assets/rounded-text.png"
              alt="projects"
              width={160}
              height={160}
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 160px"
              className="slow-spin"
            />
          </div>


        </div>
      </div>
    </main>
  );
}
