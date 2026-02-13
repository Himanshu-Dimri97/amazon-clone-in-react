import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import { data } from "./bannerCardData";


const slides = [slider1, slider2, slider3];

const FullscreenSlider = () => {
    const settings = {
        // dots: true,          
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,  
        autoplaySpeed: 3000,
    };
    return (
        <div className="relative w-full h-160">
            <Slider {...settings} style={{ height: "100%" }}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img
                            className="mask-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))]"
                            src={slide}
                            alt={`slide-${index + 1}`}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </Slider>
            <div className="absolute top-[42%]">
                <div className="flex justify-evenly">
                    {
                        data.map((item, index) => {
                            return (
                                <div className="w-[23%] bg-white p-5 shadow rounded">
                                    <h2 className="text-xl font-bold text-black">{item.itemTitle}</h2>
                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                        {
                                            item.imgData.map((dt, index) => {
                                                return (
                                                    <div className="">
                                                        <img src={dt.img} />
                                                        <a href="#" className="text-black text-[12px] leading-4 inline-block">{dt.title}</a>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                                    <div className="mt-3">
                                        <a href="#" className="text-sm text-[#2162a1]">See more</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FullscreenSlider