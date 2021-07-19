import React from "react";
import Slider from "react-slick";

const EntertainmentCard = () => {
    return (
    <>
        <div className="w-full h-30 px-2">
            <img 
            className="w-full h-full rounded-xl" 
            src={props.src}
            alt="entertainment image"/>
        </div>
    </>
    );
};

const EntertainmentCardSlider = () =>{
    
    const EntertainmentImages = [
        "https://images.jawamotorcycles.com/medium/42/listing/42.png?v=4",
        "https://images.jawamotorcycles.com/medium/perak/listing/perak.png?v=1",
        "https://images.jawamotorcycles.com/medium/jawa-the-brave-the-bold/listing/jawa-the-brave-the-bold.png?v=2",
        "https://images.jawamotorcycles.com/medium/jawa/listing/jawa.png?v=2",
        "https://images.jawamotorcycles.com/medium/forty-two/listing/forty-two.png?v=2",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFSebB53Zlye5zNgc3pIYIgQRcOxYrOod9A&usqp=CAU",
        "https://i.pinimg.com/originals/c6/79/49/c67949745ceb189af9b8864ccd6f3fc8.jpg",
    ];

    const settings = {
        infinite:false,
        autoplay:false,
        slidesToShow:4,
        slidestoScroll:4,
        InitialSlide:0,
        responsive: [
            {
                breakpoints:1024,
                settings: {
                    slidesToShow:3,
                    slidestoScroll:2,
                    infinite:true,
            },    
        },
        {
            breakpoints:480,
            settings: 
            {
                slidesToShow:2,
                slidestoScroll:1,
            },
        }
    ],
    }
    
    return (
        <>
            <Slider {...settings}>
                {
                    EntertainmentImage.map((image) => (
                    <EntertainmentCard src={image} />
                    ))
                }
            </Slider>            
        </>
    );
};

export default EntertainmentCardSlider;