export default function AirPods() {
  return (
    <section className="bg-[#F9F9F9] h-screen w-full flex flex-col pt-20 mt-14">
      <div className="relative">
        <div className=" z-10 flex justify-center space-x-28 inset-0 absolute">
          <div className="flex justify-center">
            <div className="absolute w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60">
              <img src="/pagesImages/image2.png" alt="page image"></img>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="absolute w-48 h-48 md:w-52 md:h-52 lg:w-72 lg:h-72">
              <img src="/pagesImages/image1.png" alt="page image"></img>
            </div>
          </div>
        </div>

        <div className="z-0 flex justify-center md:mt-96 mt-72">
          <h1 className="text-6xl md:text-8xl lg:text-9xl ml-14 font-extrabold text-center">
            AirPods
          </h1>
        </div>

        <div className="flex justify-center items-center pb-20 space-x-3">
          <button className="h-16 w-16">
            <img src="buyButton.png" alt="buy button"></img>
          </button>

          <button className="h-24 w-24">
            <img src="learnMore.png" alt="learn more"></img>
          </button>
        </div>
      </div>
    </section>
  );
}
