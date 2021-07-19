import React from "react";

import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrowscomponent";

const HeroCarousal =() => {

    const settingsLg = {
        arrows: true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
      };

      const images = [
        "https://bd.gaadicdn.com/processedimages/husqvarna/vitpilen-250/640X309/vitpilen-2505e5de8498ac87.jpg?tr=w-135",
        "https://images.financialexpress.com/2020/09/top-5-beginners-bikes-in-india-yamaha-r15-1.jpg?w=800&h=533&imflag=true",
        "https://imgd.aeplcdn.com/640x348/n/cw/ec/46756/yamaha-mt-15-front-right-three-quarter1.jpeg?wm=2&q=75",
        "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/26/912837-honda-cb350-scrambler.jpg",
        "https://www.bennetts.co.uk/-/media/bikesocial/2020-july-images/top-10-fastest-bikes/top-10-ten-fastest-bikes-2020-(9).ashx?h=493&w=740&la=en&hash=E49BA5BBEBC3AEAC66EAD839C46B783C976E4E94",
    ];

    return (
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
            {images.map((image)=> (
                <div className="w-full h-56 md:h-80 py-3">
                    <img 
                        src={image} 
                        alt="testing" 
                        className="w-full h-full"
                    />
                </div>
            ))}
        </HeroSlider>
    </div>
    <div className="hidden lg: block">
    <HeroSlider {...settingsLg}>
            {images.map((image)=> (
                <div className="w-full h-96 px-2 py-3">
                    <img 
                        src={image} 
                        alt="testing" 
                        className="w-full h-full rounded-md"
                    />
                </div>
            ))}
        </HeroSlider>
    </div>

        
    </>
    );
};

export default HeroCarousal;