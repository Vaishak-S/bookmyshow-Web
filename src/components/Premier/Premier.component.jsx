import React from 'react';
import Slider from 'react-slick';

//components
import Poster from '../Poster/poster.component';

export const Premier = () => {
    
    const settings = {
        infinite:false,
        autoplay:false,
        slidesToShow:5,
        slidestoScroll:2,
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
            breakpoints:600,
            settings: 
            {
                slidesToShow:2,
                slidestoScroll:1,
                InitialSlide:1,
            },
        },
        {
            breakpoints:480,
            settings: 
            {
                slidesToShow:2,
                slidestoScroll:1,
            },
        },
    ],
    };
    const PremierImages = [
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
        {
            src:"https://wallit.in/pub/media/catalog/product/cache/9b736478c52626bad9b81dd284964bfc/3/7/37_nrkvoekanmf1qjph.jpg",
            alt:"Avengers",
            title:"Avengers Infinity War",
            subtitle:"english",
        },
    ];

    return (
        <>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </>
    );
};

export default Premier;