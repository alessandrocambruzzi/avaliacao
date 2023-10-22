export default function categories() {
  return (
    <div className="flex flex-col items-center py-20 gap-8 w-390 max-w-1400 h-1273.5 min-h-650 bg-[#F4E5EC] rounded-b-16">
<h2 className="text-32 font-playfair font-extrabold text-center text-[#0F172A] w-225 h-43">Top Categories</h2>

      <p className="text-base font-poppins font-normal leading-24 text-center text-[#64748B] w-345 max-w-358 h-24 m-8">
        Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!
      </p>
      <div className="flex gap-8">
        <div className="bg-[#F4E5EC] rounded-md pb-2 flex-1">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/cosmetics.png" alt="" />
              <h3 className="mt-2">Cosmetics</h3>
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2 flex-1">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/dress.png" alt="" />
              <h3 className="mt-2">Dress Collection</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="bg-[#F4E5EC] rounded-md pb-2 flex-1">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/accessories.png" alt="" />
              <h3 className="mt-2">Accessories</h3>
            </div>
          </a>
        </div>
        <div className="bg-[#F4E5EC] rounded-md pb-2 flex-1">
          <a href="######">
            <div className="text-black text-center font-playfair font-semibold text-19 leading-26">
              <img className="hover:scale-105 mx-auto" src="/img/jewerllery.png" alt="" />
              <h3 className="mt-2">Jewellery</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
