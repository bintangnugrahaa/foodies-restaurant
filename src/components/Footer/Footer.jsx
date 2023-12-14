import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p className="">
              Nikmati sensasi kuliner terbaik dengan cita rasa yang autentik.
              Kami berkomitmen untuk memberikan pengalaman makanan yang tak
              terlupakan.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Citayam, Jawa Barat</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+ 911 </p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com/bintang_nugrahaa/" target="_blank">
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/muhammad.bintangnuhgraha?mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://github.com/bintangnugrahaa/" target="_blank">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Usefull Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Testimonial</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Best Seller
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Biryani</li>
                  <li className="cursor-pointer">Chicken Kari</li>
                  <li className="cursor-pointer">Cold Coffee</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Cabang Foodie
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Jakarta Selatan</li>
                  <li className="cursor-pointer">Bogor</li>
                  <li className="cursor-pointer">Depok</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-14 border-t-2 border-gray-300/50">
            Create with ❤️ by Stareighteen.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
