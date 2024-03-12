import React from 'react'
import Slider from 'react-slick';

const SliderSection = () => {
    const Data = [
        {
            has: "trending",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/9/g/o/s-na-bdlypair06-torontocn-original-imagzfkc3wrgpmrs.jpeg?q=70"
        },
        {
            has: "device",
            image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/i/x/-original-imagyr3vfpqrpkbv.jpeg?q=70"
        },
        {
            has: "menTrends",
            image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            has: "playWithUs",
            image: "https://images.pexels.com/photos/8007405/pexels-photo-8007405.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            has: "justWalk",
            image: "https://cdn.pixabay.com/photo/2020/04/08/05/58/shoes-5015809_1280.jpg"
        }
    ]
    var settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        // nextArrow: <SampleNextArrow slidesToShow={3} />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    //   nextArrow: <SampleNextArrow slidesToShow={2} />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    //   nextArrow: <SampleNextArrow slidesToShow={2} />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //   nextArrow: <SampleNextArrow slidesToShow={1} />,
                },
            },
        ],
    };
    return (

        <div className=" px-5 py-5 lg:py-10 mx:5 lg:mx-10 my-16 lg:my-32 font-roboto">
            <div className='pl-5 text-2xl lg:text-3xl'>
                <p>Join Our <span className='text-red-500'>#</span> And Enjoy With Our Products</p>
            </div>
            <Slider {...settings1}>
                {Data.map((item) => {
                    const {has,image}= item;
                    return (
                        <>
                            <div className="border-[1px] border-black rounded-xl p-5 m-5 h-96 transition-transform hover:scale-110">
                                <p className='font-quicksand text-2xl'><span className='text-red-500'>#</span>{has}</p>
                                <img src={image} alt={"Hastage images"} className='object-cover h-80 w-80 rounded-lg '/>
                            </div></>
                    )


                })}
            </Slider>
        </div>

    )
}

export default SliderSection