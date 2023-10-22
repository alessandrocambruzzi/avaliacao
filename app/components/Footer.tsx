import { Kaushan_Script } from 'next/font/google'

const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: '400'
})

export default function Footer() {
  return (
<footer className="bg-[#F4E5EC] text-[#64748B] py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
  <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
    <div className="mb-4 sm:mb-0 flex items-center">
      <img src="/img/localizacao.png" alt="Localização" className="mr-2" />
      <div>
        <h4 className="text-lg font-kaushan font-bold mb-2">CONTACT INFO</h4>
        <p>123, London Bridge Street, London</p>
        <div className="flex items-center">
          <img src="/img/mail.png" alt="Mail" className="mr-2" />
          <p>support@lebaba.com</p>
        </div>
        <div className="flex items-center">
          <img src="/img/phone.png" alt="Phone" className="mr-2" />
          <p>(+012) 3456 789</p>
        </div>
      </div>
    </div>
    <div>
      <h4 className="text-lg font-kaushan font-bold mb-2">COMPANY</h4>
      <ul className="list-none p-0">
        <li><a href="#" className="text-[#ED3849] hover:underline">Home</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">About Us</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Work with Us</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Our Blog</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Terms & Conditions</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-kaushan font-bold mb-2">USEFUL LINK</h4>
      <ul className="list-none p-0">
        <li><a href="#" className="text-[#ED3849] hover:underline">Help</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Track my Order Us</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Men</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Woman</a></li>
        <li><a href="#" className="text-[#ED3849] hover:underline">Dresses</a></li>
      </ul>
    </div>
  </div>
</footer>


  
  );
}
