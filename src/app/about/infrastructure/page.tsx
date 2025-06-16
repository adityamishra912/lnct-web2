"use client";
import React from "react";

export default function trust() {

    function infoOpen(e: React.MouseEvent<HTMLDivElement>) {
        const info = (e.currentTarget as HTMLElement)!.querySelector(".info");
        const readBtn = (e.currentTarget as HTMLElement)!.querySelector(".readBtn");
        readBtn!.classList.add("translate-x-[110px]");
        info!.classList.remove("-translate-x-[100%]");
    }

    function infoClose(e: React.MouseEvent<HTMLDivElement>) {
        const info = (e.currentTarget as HTMLElement)!.querySelector(".info");
        const readBtn = (e.currentTarget as HTMLElement)!.querySelector(".readBtn");
        readBtn!.classList.remove("translate-x-[110px]");
        info!.classList.add("-translate-x-[100%]");
    }

    return (
        <div>
            <section className="h-screen w-full overflow-hidden">
                <img
                    className="object-cover h-full w-full inset-0"
                    alt="Banner"
                    src="/media/img1.jpg"
                />
            </section>

            <section className="flex flex-col gap-6 items-center h-auto">
                <div className="h-[80px] my-6 flex justify-center items-center text-center"><h1 className="text-6xl font-extrabold font-serifs">Infrastructure</h1></div>

                <div onMouseOver={(e) => infoOpen(e)} onMouseOut={(e) => infoClose(e)} className="h-[300px] w-[80%] sticky top-[144px] rounded-2xl overflow-hidden shadow-[0_0_1px_1px_black]">
                    <img src="/facility/fac1.jpg" className="h-full w-full object-cover" />
                    <div className="info -translate-x-[100%] transition-transform duration-300 text-white bg-black h-full w-[70%] absolute top-0 left-0">
                        <p className="mt-12 mx-2 text-[13px] md:text-xl">LNCT Bhopal has a well-equipped central library with a large collection of books, journals, e-books, and digital resources. It offers Wi-Fi, computer access, and study space for students. A book-bank scheme and departmental libraries further support academic needs.</p>
                        <div className="readBtn h-[40px] w-[180px] rotate-90 bg-black hover:bg-white hover:text-black text-white absolute right-0 bottom-[40px] rounded-[18px_0_0_0] transition-transform duration-300"><a href="#" className="text-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Read More</a></div>
                    </div>
                    <h1 className="text-white text-2xl font-bold position absolute top-0 left-0 bg-black p-2 rounded-[0_0_18px_0]">Library</h1>
                </div>

                <div onMouseOver={(e) => infoOpen(e)} onMouseOut={(e) => infoClose(e)} className="h-[300px] w-[80%] sticky top-[144px] rounded-2xl overflow-hidden shadow-[0_0_1px_1px_black]">
                    <img src="/facility/fac2.jpg" className="h-full w-full object-cover" />
                    <div className="info -translate-x-[100%] transition-transform duration-300 text-white bg-black h-full w-[70%] absolute top-0 left-0">
                        <p className="mt-12 mx-2 text-[12px] md:text-xl">LNCT Bhopal&#39;s classrooms are fully digital and designed for interactive learning. They&#39;re equipped with digital boards, LCD projectors, and digital writing pads that let instructors write, draw, and highlight content in real time—without obstructing students&#39; views  . Lectures can be effortlessly recorded, edited, and shared via the campus network or web, enabling students to access them anytime as video modules or e-learning content.</p>
                        <div className="readBtn h-[40px] w-[180px] rotate-90 bg-black hover:bg-white hover:text-black text-white absolute right-0 bottom-[40px] rounded-[18px_0_0_0] transition-transform duration-300"><a href="#" className="text-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Read More</a></div>
                    </div>
                    <h1 className="text-white text-2xl font-bold position absolute top-0 left-0 bg-black p-2 rounded-[0_0_18px_0]">Digital Classrooms</h1>
                </div>

                <div onMouseOver={(e) => infoOpen(e)} onMouseOut={(e) => infoClose(e)} className="h-[300px] w-[80%] sticky top-[144px] rounded-2xl overflow-hidden shadow-[0_0_1px_1px_black]">
                    <img src="/facility/fac4.jpg" className="h-full w-full object-cover" />
                    <div className="info -translate-x-[100%] transition-transform duration-300 text-white bg-black h-full w-[70%] absolute top-0 left-0">
                        <p className="mt-12 mx-2 text-[13px] md:text-xl">LNCT Bhopal provides comprehensive on&#45;campus healthcare services through a well&#45;staffed Health Center offering free primary care to students, faculty, and their dependents. Managed by a qualified medical officer alongside healthcare assistants, it delivers first aid, routine check-ups, vaccinations, and basic medical treatments year-round.</p>
                        <div className="readBtn h-[40px] w-[180px] rotate-90 bg-black hover:bg-white hover:text-black text-white absolute right-0 bottom-[40px] rounded-[18px_0_0_0] transition-transform duration-300"><a href="#" className="text-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Read More</a></div>
                    </div>
                    <h1 className="text-white text-2xl font-bold position absolute top-0 left-0 bg-black p-2 rounded-[0_0_18px_0]">Health Care</h1>
                </div>

                <div onMouseOver={(e) => infoOpen(e)} onMouseOut={(e) => infoClose(e)} className="h-[300px] w-[80%] sticky top-[144px] rounded-2xl overflow-hidden shadow-[0_0_1px_1px_black]">
                    <img src="/facility/fac5.jpg" className="h-full w-full object-cover" />
                    <div className="info -translate-x-[100%] transition-transform duration-300 text-white bg-black h-full w-[70%] absolute top-0 left-0"><p className="mt-12 mx-2 text-[12px] md:text-xl">Hostels at LNCT are well-maintained and provide a comfortable and secure environment for students. They are equipped with essential facilities such as Wi-Fi, mess, laundry, and 24/7 security. Separate accommodations are available for boys and girls, and the hostel staff ensures cleanliness and discipline. The atmosphere supports both academic focus and personal growth, making it a convenient option for outstation students.</p>
                        <div className="readBtn h-[40px] w-[180px] rotate-90 bg-black hover:bg-white hover:text-black text-white absolute right-0 bottom-[40px] rounded-[18px_0_0_0] transition-transform duration-300"><a href="#" className="text-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Read More</a></div>
                    </div>
                    <h1 className="text-white text-2xl font-bold position absolute top-0 left-0 bg-black p-2 rounded-[0_0_18px_0]">Hostel</h1>
                </div>

                <div onMouseOver={(e) => infoOpen(e)} onMouseOut={(e) => infoClose(e)} className="h-[300px] w-[80%] sticky top-[144px] rounded-2xl overflow-hidden shadow-[0_0_1px_1px_black]">
                    <img src="/facility/fac6.jpg" className="h-full w-full object-cover" />
                    <div className="info -translate-x-[100%] transition-transform duration-300 text-white bg-black h-full w-[70%] absolute top-0 left-0"><p className="mt-12 mx-2 text-[13px] md:text-xl">LNCT Bhopal&#39;s canteen facilities are well&#45;regarded and student&#45;friendly. The campus features two hygienic canteens offering a varied menu—from fast foods, snacks, and full meals to chai, wafers, samosas, chocolates, and soft drinks—all at affordable, subsidized prices.</p>
                        <div className="readBtn h-[40px] w-[180px] rotate-90 bg-black hover:bg-white hover:text-black text-white absolute right-0 bottom-[40px] rounded-[18px_0_0_0] transition-transform duration-300"><a href="#" className="text-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Read More</a></div>
                    </div>
                    <h1 className="text-white text-2xl font-bold position absolute top-0 left-0 bg-black p-2 rounded-[0_0_18px_0]">Canteen</h1>
                </div>

            </section>


        </div>
    )
}