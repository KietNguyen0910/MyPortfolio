"use client";
import React, { useRef } from "react";
import { TitleCustom } from "../animation/TitleCustom";
import { motion } from "framer-motion";
import SplashCursor from "../animation/SplashCursor";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AnimatedBorderButton from "../common/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//@ts-expect-error/ignote-type-swiper
import "swiper/css";
//@ts-expect-error/ignote-type-swiper
import "swiper/css/pagination";

const data = [
  {
    img: "/pro1.png",
    title: "yen dao can gio",
    desc: "Thương hiệu yến sào nguyên chất, được khai thác tại huyện đảo Cần Giờ và sơ chế theo tiêu chuẩn an toàn thực phẩm. Tự hào đảm bảo chất lượng và hương vị tinh hoa từ tổ yến Việt. ",
    link: "https://yendaocangio.monaweb.dev/",
  },
  {
    img: "/pro2.png",
    title: "Petdays",
    desc: "Chuỗi dịch vụ chăm sóc thú cưng đầy yêu thương, hoạt động chuyên nghiệp hơn 20 năm, mang đến sự an tâm tuyệt đối cho thú cưng của bạn. ",
    link: "https://petdays.vn",
  },
  {
    img: "/pro3.png",
    title: "Lsoul",
    desc: "Thương hiệu thời trang cao cấp theo đuổi tinh thần tự do cá tính, thiết kế độc đáo dành riêng cho các cô nàng yêu trang phục độc lạ, chất-lừ. ",
    link: "https://lsoul.com/",
  },
  {
    img: "/pro4.png",
    title: "Phong thuy thien an",
    desc: "Dịch vụ phong thuỷ chuyên nghiệp: từ xem mộ phần, tử vi đến thiết kế kiến trúc hợp phong thủy. Uy tín lâu năm tại TP.HCM & Hà Nội.",
    link: "#",
  },
  {
    img: "/pro5.png",
    title: "Stemgouse edu",
    desc: "Trung tâm giáo dục STEM theo mô hình quốc tế, dạy học sinh chủ động qua trải nghiệm, hơn 10 năm hoạt động tại TP.HCM.",
    link: "https://stemhouse.edu.vn/",
  },
  {
    img: "/pro6.png",
    title: "Boc academy",
    desc: "Học viện diễn họa kiến trúc trực thuộc BOC Studio, đào tạo chuyên nghiệp software như 3ds Max, Revit & V‑Ray từ năm 2011.",
    link: "https://boc.mona.academy/learn",
  },
  {
    img: "/pro7.png",
    title: "curnon watch",
    desc: "Thương hiệu đồng hồ thời trang Việt đầu tiên, hướng tới sản phẩm chính hãng, sáng tạo và thiết kế tinh tế phù hợp giới trẻ. ",
    link: "https://curnonwatch.com/",
  },
  {
    img: "/pro8.png",
    title: "rechic brand",
    desc: "Local brand thời trang nữ Việt, theo đuổi phong cách chic city girl, chất lượng cao với mức giá hợp lí và giao hàng toàn cầu. ",
    link: "https://rechicbrand.com/",
  },
  {
    img: "/pro9.png",
    title: "kolan",
    desc: "Thương hiệu dược mỹ phẩm Việt 50 năm kinh nghiệm, nghiên cứu & sản xuất theo tiêu chuẩn cGMP với công thức từ thiên nhiên an toàn cho làn da Á Đông.",
    link: "https://kolan.vn/",
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 2000,
  //   cssEase: "linear",
  //   swipeToSlide: true,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 768, // dưới 768px (mobile/tablet)
  //       settings: {
  //         slidesToShow: 2, // 👉 hiển thị 2 item
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480, // dưới 480px (mobile nhỏ)
  //       settings: {
  //         slidesToShow: 1, // 👉 chỉ 1 item cho screen nhỏ
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <section
      ref={containerRef}
      className="projects relative overflow-hidden sec-pd bg-[#121212]"
      id="projects"
    >
      {/* @ts-expect-error/dsfs */}
      <SplashCursor containerRef={containerRef} />
      <div className="container relative z-[2]">
        <div className="flex flex-col items-center">
          <TitleCustom className="text-primary" textCenter="center">
            Projects
          </TitleCustom>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 max-w-[50rem] text-center"
          >
            A curated selection of real-world projects I’ve built — from
            high-performance e-commerce platforms to animated landing pages.
            Each one showcases my skills in React, Next.js, GraphQL, and
            frontend performance.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col mt-4"
        >
          {/* <Slider {...settings}>
            {data?.map((item, index) => (
              <div className="px-2" key={index}>
                <ProItem item={item} />
              </div>
            ))}
          </Slider> */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={3}
              spaceBetween={16} // tương đương với px-2 của bạn
              pagination={{ clickable: true }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={8000}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
};
const ProItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col h-full rounded-2xl border overflow-hidden backdrop-blur-sm bg-[rgba(0,0,0,0.4)] border-[rgba(255,255,255,0.1)]">
      <a className="relative pt-[56%] overflow-hidden group" href={item?.link}>
        <img
          className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 duration-500 group-hover:scale-[1.05]"
          src={item?.img}
          alt={`pro`}
          loading="lazy"
        />
      </a>
      <div className="flex flex-col p-3">
        <h3 className="font-semibold text-center uppercase">{item?.title}</h3>
        <p className="mb-3 text-sm text-center line-clamp-2">{item?.desc}</p>
        <AnimatedBorderButton className="w-full mt-auto" href={item?.link}>
          Link Website
        </AnimatedBorderButton>
      </div>
    </div>
  );
};

export default Projects;
