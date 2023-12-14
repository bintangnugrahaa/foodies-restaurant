import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Bintang",
    text: "Pelayanan yang luar biasa! Makanan yang disajikan benar-benar lezat dan penuh dengan cita rasa. Pengalaman yang tak terlupakan!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dova",
    text: "Sangat terkesan dengan variasi menu dan kualitas makanannya. Stafnya juga ramah dan profesional. Saya akan kembali lagi dan memesan lebih banyak menu!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Juno",
    text: "Tempat yang sempurna untuk menikmati hidangan lezat. Rasa dan presentasi makanannya luar biasa. Sangat direkomendasikan!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <span id="testimonial"></span>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Temukan pengalaman luar biasa dari pelanggan kami yang telah
              menikmati layanan kami. Ulasan mereka memperkuat komitmen kami
              untuk memberikan yang terbaik.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6" key={data.id}>
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
