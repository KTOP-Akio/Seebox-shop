import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../../../components/tagline";
import Navbar from "../../../components/navbar";
import ProductDetail from "../../../components/product-detail";
import ProductAboutTab from "../../../components/product-about-tab";
import ArrivalItem from "../../../components/arrival-item";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";
import ScrollToTop from "../../../components/scroll-to-top";

import image1 from '../../../assets/images/shop/mens-jecket.jpg'
import image2 from '../../../assets/images/shop/mens-jecket-3.jpg'
import image3 from '../../../assets/images/shop/mens-jecket-left.jpg'
import image4 from '../../../assets/images/shop/mens-jecket-back.jpg'
import image5 from '../../../assets/images/shop/mens-jecket-4.jpg'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ProductDetailThree(){
    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      };
    let image = [
        {
            id:1,
            image:image1
        },
        {
            id:2,
            image:image2
        },
        {
            id:3,
            image:image3
        },
        {
            id:4,
            image:image4
        },
        {
            id:5,
            image:image5
        },
    ]
    return(
        <>
        <Tagline/>
        <Navbar navClass="defaultscroll is-sticky tagline-height"/>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Mens Brown Jecket</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link to="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link to="/shop-grid">Store</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Mens Brown Jecket</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div className="lg:col-span-5">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {image.map((item,index)=>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="m-0.5">
                                                <img src={item.image} className="shadow dark:shadow-gray-700" alt=""/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <ProductDetail/>
                    </div>
                </div>
                
                <ProductAboutTab/>
            </div>

            <ArrivalItem/>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}