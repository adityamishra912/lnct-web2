"use client";
import React, { useEffect, useState, useRef } from "react";


export default function Award() {

    // WIDTH FOR imagesBox2

    const galleryRef2 = useRef<HTMLDivElement | null>(null);
    const [dimensionsGbox2, setdimensionsGbox2] = useState({ width: 0, height: 0 });



    useEffect(() => {
        const element = galleryRef2.current;
        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect) {
                    setdimensionsGbox2({
                        height: entry.contentRect.height,
                        width: ((window.innerWidth >= 1024) ? entry.contentRect.width : 3 * entry.contentRect.width),
                    });
                }
            }
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);


    // Slider

    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex2(prev => {
                const slides = (window.innerWidth >= 1024) ? document.querySelectorAll(".imagesBox2") : document.querySelectorAll(".imageElement2");
                const totalSlides = slides.length;
                return (prev + 1) % totalSlides;
            });
        }, 4000);

        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            const slides = document.querySelectorAll(".imagesBox2");
            const slider = document.querySelector(".imagesBox2Container") as HTMLElement;
            const sliderWidth = (document.querySelector(".imagesBox2") as HTMLElement).offsetWidth;
            const totalSlides = slides!.length;
            setIndex2(prevIndex2 => prevIndex2 % totalSlides);
            slider.style.transform = `translateX(-${index2 * sliderWidth}px)`;
        } else {
            console.log(1);
            const slides = document.querySelectorAll(".imageElement2");
            const slider = document.querySelector(".imagesBox2Container") as HTMLElement;
            const sliderWidth = (document.querySelector(".imageElement2") as HTMLElement).offsetWidth;
            const totalSlides = slides!.length;
            setIndex2(prevIndex2 => prevIndex2 % totalSlides);
            slider.style.transform = `translateX(-${index2 * (sliderWidth + 8)}px)`;
        }
    }, [index2])



    return (
        <section>
            <div className="h-20"></div>

            <div className="w-full">
                <div className="float-right bg-black w-[90%] lg:w-[80%] rounded-[18px_0_0_18px] py-4 flex flex-col justify-center items-center gap-4 text-center">

                    <h1 className="text-white text-4xl font-extrabold">Awards & Achievements</h1>
                    <div className="bg-white w-[80%] lg:w-[80%] h-[300px] my-4 rounded-2xl flex justify-center items-center">
                        <div><p onClick={() => { setIndex2(index2 - 1 + (window.innerWidth >= 1024 ? document.querySelectorAll(".imagesBox2").length : document.querySelectorAll(".imageElement2").length)) }} className="bg-black text-3xl text-white h-[40px] w-[40px] flex justify-center items-center rounded-xl shadow-[0_0_1px_1px_white] -translate-x-5">&#60;</p></div>
                        <div ref={galleryRef2} className="galleryBox w-[240px] h-[190px] lg:w-[80%] overflow-hidden">

                            <div className="imagesBox2Container flex transition-transform duration-300" style={{ height: dimensionsGbox2.height, width: (3 * dimensionsGbox2.width) }}>

                                <div className="imagesBox2 flex" style={{ height: dimensionsGbox2.height, width: dimensionsGbox2.width }}>
                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award1.jpg" className="w-[100%] h-[100%] self-center" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award2.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award3.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>
                                </div>

                                <div className="imagesBox2 flex" style={{ height: dimensionsGbox2.height, width: dimensionsGbox2.width }}>
                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award4.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award5.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award6.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>
                                </div>

                                <div className="imagesBox2 flex" style={{ height: dimensionsGbox2.height, width: dimensionsGbox2.width }}>
                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award7.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award8.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>

                                    <div className="imageElement2 h-[240px] flex-1 m-1">
                                        <div className="w-full flex justify-center items-center"><img src="/ranking/award9.jpg" className="w-[100%] h-[100%]" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div onClick={() => { setIndex2(index2 + 1); }}><p className="bg-black  text-3xl text-white h-[40px] w-[40px] flex justify-center items-center rounded-xl shadow-[0_0_1px_1px_white] translate-x-5">&#62;</p></div>
                    </div>

                </div>
            </div>

        </section>
    )
}