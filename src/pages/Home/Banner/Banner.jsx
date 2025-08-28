import { MdOutlineArrowOutward } from "react-icons/md";
import bannerImg1 from "../../../../src/assets/Banner/bannerImg-1.png";


 const Banner = () => {
  return (
    <section className="bg-base-200 py-12 px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0">
      <div className="max-w-[1444px] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-base-content maven-pro-font text-2xl px-3 py-1 tracking-tighter">
              New Spring 2025 <br /> Collections
            </span>
          </div>

          <h1 className="text-4xl md:text-[72px] tracking-tighter  font-semibold leading-tight text-[#1D1818]">
            Fashion That <br />
            Feels As Good As <br />
            It <span className="text-primary">Looks</span>
          </h1>

          <p className="text-base-content text-base leading-relaxed">
            Streetwear-inspired and flavor-packed, every drop celebrates 
            individuality, freedom, <br /> and effortless style—where comfort meets 
            cultural edge.
          </p>

          <button className="bg-primary cursor-pointer text-white px-[33px] py-[18px] font-semibold text-lg leading-6 inline-flex items-center">
            Get Started <MdOutlineArrowOutward className="ml-4 text-2xl font-bold" />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          <img
            src={ bannerImg1 }
            alt="Product"
            className=""
          />

          <div className="absolute top-6 right-6 p-4 max-w-[180px]">
            <img src="../../../../src/assets/Banner/qoutetion.png" alt="" />
            <p className="text-gray-700 text-sm italic">
              I love that it’s made with gentle ingredients — no irritation at all, even on my sensitive skin.
            </p>
            <span className="mt-2 block text-sm font-medium text-gray-800">— Alfa Jaman</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;