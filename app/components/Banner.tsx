import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col items-center py-20 gap-8 w-390 max-w-1400 h-1273.5 min-h-650 bg-[#F4E5EC] rounded-b-16">
      <h4 className="text-base font-poppins font-normal leading-24 text-center text-[#ED3849] w-197 max-w-358 h-24">UP TO 20% DISCOUNT ON</h4>

      <div className="w-full lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="w-297 max-w-358 h-107 font-playfair font-extrabold text-5xl leading-107 text-center text-[#0F172A]">
            <span>Girlss</span>
            <br />
            <span>Fashion</span>
          </h1>
          <p className="text-base font-poppins font-normal leading-24 text-center text-[#64748B] w-345 max-w-358 h-24 m-8">
            Discover the latest trends and express your unique style with our Women s Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
          </p>
          <div className="text-center mt-4">
            <button className="bg-[#ED3849] text-white rounded-md py-2 px-4 text-sm">EXPLORE NOW</button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <Image src="/img/header.png" alt="" width={297} height={107} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center lg:hidden">
        <Image src="/img/header.png" alt="" width={297} height={107} />
      </div>
    </div>
  );
}
