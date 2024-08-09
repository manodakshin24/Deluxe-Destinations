"use client"
import Slider from "react-slick"
import Image from "next/image"
import Link from "next/link"
import { FEATURE } from "@/constant"
import {RiArrowRightSLine, RiArrowLeftSLine} from "react-icons/ri"

const Feature = () => {

  const NextArrow = (props: any) => {
    const {onClick} = props;
    return (
      <div onClick={onClick} className="bg-white text-2x1 p-3 inline-block rounded-lg shadow-md 
      absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 
      hover:bg-primary">
        <RiArrowRightSLine />
      </div>
    )
  }

  const PrevArrow = (props: any) => {
    const {onClick} = props;
    return (
      <div onClick={onClick} className="bg-white text-2x1 p-3 inline-block rounded-lg shadow-md 
      absolute top-1/2 right-0 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 
      hover:bg-primary">
        <RiArrowLeftSLine />
      </div>
    )
  }

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  }
  return (
    <section 
    className="max_padd_container py-20 x1:py-32 bg-white" 
    id="feature"
    >
      <div className="w-[90%] m-auto">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">What we serve</h4>
          <h3 className="h3 max-w-lg">We Provide Top Destinations</h3>
          <p className="max-w-lg">Discover the world's most popular destinations with my expertly organized selection of 
          top travel spots. Whether you're seeking tropical beaches with palm trees, family-friendly 
          resorts, or scenic places with breathtaking views, “Deluxe Destinations” offers 
          personalized recommendations and insider tips to help you create unforgettable memories.</p>
        </div>
          {}
        <div className="pt-12">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <FeatureItem
              key={feature.URL}
              URL={feature.URL}
              title={feature.title}
              des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  URL: string;
  title: string;
  des: string;
}

const FeatureItem = ({title, URL, des}: FeatureItem) => {
  return (
    <div>
      <Link href= "/" className="overflow-hidden relative">
        <div className="mx-4 overflow-hidden group">
          <Image 
          src={URL} 
          alt="Img" 
          height = {600} 
          width = {510} 
          className="hover:scale-105 transition-all duration-700 overflow-hidden"/>
        </div>
        <h4 className="capitalize regular-22 absolute top-6 left-4 text-white"> 
        {title} </h4>
        <p className="regular-18 absolute bottom-6 right 0 bg-tertiary text-white 
        px-4 py-2 rounded-1-full group-hover:bg-secondary group-hover:!pr-8 
        transition-all duration-300"> {des} </p>
      </Link>
    </div>
  );
}


export default Feature