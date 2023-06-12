export default function AirPodMax() {
  return (
    <section>


      <div className="relative pt-16">


        <div className="z-10 flex justify-center ">
          <div className="absolute ">
            <img src="/pagesImages/airPodMax.png" alt="Page Image" />
          </div>
        </div>

        <div className="z-0 flex justify-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl pt-16 text-center font-bold">
            AirPods Max
          </h1>
        </div>

        <div className="flex justify-center items-center pt-32 md:pt-96 lg:pt-80 space-x-3">
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
