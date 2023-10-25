export default function Trending() {
  return (
    <div className="flex flex-col items-center py-20 gap-8 w-390 max-w-1400 h-1273.5 min-h-650 bg-[#F4E5EC] rounded-b-16">
      <h2 className="text-32 font-playfair font-extrabold text-center text-[#0F172A] w-225 h-43">Trending Products</h2>
      <p className="text-base font-poppins font-normal leading-24 text-center text-[#64748B] w-345 max-w-358 h-24 m-8">
        Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Womens Fashion Products
      </p>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8 sm:grid-cols-4 sm:gap-8">
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/whitedress.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/guesswatch.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/blackpurse.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/guccibag.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/taperedjeans.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/sunglasses.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/browntshirt.png" alt="" />
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/beigeheels.png" alt="" />
            </div>
          </a>
        </div>
      </div>
      <button className="p-4 w-167.13 rounded-5 bg-[#ED3849] text-white text-center">Load More</button>
    </div>
  );
}
