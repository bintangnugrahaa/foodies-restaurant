import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Nikmati kelezatan Biryani yang khas dengan rempah-rempah pilihan yang memikat lidah Anda sepanjang perjalanan rasa. Terinspirasi dari tradisi masakan khas India, hidangan ini adalah perpaduan sempurna antara nasi, daging, dan bumbu yang menggugah selera.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      "Rasakan keharmonisan rempah-rempah dalam Chicken Kari yang lezat ini. Setiap suapan membawa rasa kaya dan aroma yang memikat dari masakan kari khas, menciptakan pengalaman rasa yang tak terlupakan.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Coffee",
    description:
      "Nikmati sensasi segar dan kenikmatan dari setiap tegukan Cold Coffee kami. Minuman ini tidak hanya memberikan kafein yang menyegarkan, tetapi juga menyajikan kelezatan rasa kopi yang memanjakan lidah Anda.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Temukan layanan unggulan kami yang dirancang untuk memenuhi
              kebutuhan kuliner Anda. Dengan pengalaman yang memikat dan cita
              rasa yang menggugah selera, kami hadir untuk memberikan pengalaman
              makanan yang tak terlupakan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
