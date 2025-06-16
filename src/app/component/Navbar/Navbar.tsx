"use client";


import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [headerBg, setHeaderBg] = useState(false);

    // SET HEADER BACKGROUND COLOR
    useEffect(() => {
        setHeaderBg(true);
        const header = document.getElementById("header");
        header!.classList.add("bg-linear-to-b", "from-black", "to-black/[0]");
    }, [])

    // HEADER BACKGROUND COLOR TRANSITION ON HOME PAGE
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const header = document.getElementById("header");

            if ((window.scrollY === 0) && headerBg) {
                header!.classList.remove("bg-black");
                header!.classList.add("bg-linear-to-b", "from-black", "to-black/[0]");
            }

            if (window.scrollY > 0) {
                header!.classList.remove("bg-linear-to-b", "from-black", "to-black/[0]");
                header!.classList.add("bg-black");
            }
        })
    })

    // DISPLAY SUBMENU ON HOVER
    function onMouseOver(e: React.MouseEvent<HTMLDivElement>) {
        const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
        uLine!.classList.remove("w-0");
        uLine!.classList.add("w-full");
        if (window.innerWidth >= 1024) {
            // eventTarget to HTMLElement
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            subMenu?.classList.remove("lg:hidden");
            subMenu?.classList.add("lg:flex");
        }
    }

    function onMouseOut(e: React.MouseEvent<HTMLDivElement>) {
        const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
        uLine!.classList.remove("w-full");
        uLine!.classList.add("w-0");
        if (window.innerWidth >= 1024) {
            const uLine = (e.currentTarget as HTMLElement)!.querySelector(".uLine");
            uLine!.classList.remove("w-full");
            uLine!.classList.add("w-0");
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            subMenu?.classList.remove("lg:flex");
            subMenu?.classList.add("lg:hidden");
        }
    }

    // OPEN MENU IN MOBILE

    function openMobileMenu() {
        console.log("Menu opn");
        const menuBar = document.querySelector(".menuBar");
        menuBar!.classList.remove("-translate-x-[100%]");
        menuBar!.classList.add("translate-x-0");
    }

    function closeMobileMenu() {
        console.log("Menu close");
        const menuBar = document.querySelector(".menuBar");
        menuBar!.classList.remove("translate-x-0");
        menuBar!.classList.add("-translate-x-[100%]");
    }

    // MOBILE SUBMENU ANIMATION

    function mobileNavClick(e: React.MouseEvent<HTMLDivElement>) {
        if (window.innerWidth < 1024) {
            console.log("Open")
            const nav = document.querySelector(".navBar");
            const subMenu = (e.currentTarget as HTMLElement)!.querySelector(".subMenu");
            if (subMenu) {
                nav!.classList.remove("left-0");
                nav!.classList.add("-left-[100%]");
                subMenu!.classList.remove("left-[100%]");
                subMenu!.classList.add("left-0");
            }
        }
    }

    function mobileNavClose(e: React.MouseEvent<HTMLDivElement>) {
        console.log("Close")
        e.stopPropagation();
        const nav = document.querySelector(".navBar");
        const subMenu = (e.currentTarget as HTMLElement)!.closest(".subMenu");
        if (subMenu && nav) {
            subMenu!.classList.remove("left-0");
            subMenu!.classList.add("left-[100%]");
            nav!.classList.remove("-left-[100%]");
            nav!.classList.add("left-0");
        }
    }

    // SISTER CONCERN HOVER

    function concernHover(e: React.MouseEvent<HTMLAnchorElement>) {
        console.log("CONCERN HOVER");
        const target = e.currentTarget;
        console.log(target.id);
        const bg = document.querySelector(`.concern.${target.id}`);
        target.classList.add("underline");
        document.querySelectorAll(".concern").forEach(a => {
            (a as HTMLElement).style.display = "none";
        })
        if (bg) {
            (bg as HTMLElement).style.display = "block";
        }
    }

    function concernUnhover(e: React.MouseEvent<HTMLAnchorElement>) {
        console.log("CONCERN UNHOVER");
        const target = e.currentTarget;
        target.classList.remove("underline");
    }

    // SISTER CONCERN HOVER

    function campusHover(e: React.MouseEvent<HTMLAnchorElement>) {
        console.log("CONCERN HOVER");
        const target = e.currentTarget;
        console.log(target.id);
        const bg = document.querySelector(`.campus.${target.id}`);
        target.classList.add("underline");
        document.querySelectorAll(".campus").forEach(a => {
            (a as HTMLElement).style.display = "none";
        })
        if (bg) {
            (bg as HTMLElement).style.display = "block";
        }
    }

    function campusUnhover(e: React.MouseEvent<HTMLAnchorElement>) {
        console.log("CONCERN UNHOVER");
        const target = e.currentTarget;
        target.classList.remove("underline");
    }


    return (
        <header id="header" className="upperBar fixed top-0 h-[140px] w-[100%] font-body transition-colors duration-500 ease-in-out">
            <nav className="fixed w-full">
                <div id="upperBar" className="flex justify-between items-center mt-6 mx-6">
                    <div className="ml-4"><img src="/media/logo3.png" className="h-[50px]" /></div>
                    <div className="mr-4">
                        <ul className="hidden lg:flex lg:gap-2 lg:text-white">
                            <li className="bg-orange-400 px-4 py-2"><Link className="cursor-pointer" href="/#contact">Admission</Link></li>
                            <li className="bg-orange-400 px-4 py-2 cursor-pointer">Login</li>
                        </ul>
                    </div>
                    <div onClick={() => openMobileMenu()} className="opnMenuBtn lg:hidden flex flex-col justify-center items-center gap-3 h-[60px] w-[60px] bg-orange-400 z-[1]">
                        <hr className="border-2 border-solid border-white w-[80%]" />
                        <hr className="border-2 border-solid border-white w-[80%]" />
                        <hr className="border-2 border-solid border-white w-[80%]" />
                    </div>
                </div>
                {/* Menu */}
                <div className="menuBar overflow-hidden h-full w-[100%] fixed top-0 -left-0 text-white bg-black -translate-x-[100%] lg:bg-black/[0] lg:static lg:bloc lg:mt-6 lg:h-auto lg:w-auto lg:translate-x-0 transition-transform duration-400 lg:overflow-visible z-[999]">
                    <div className="h-[80px] w-[100%] flex justify-end items-center lg:hidden">
                        <div className="relative bg-white h-[60px] w-[60px] mr-3 lg:hidden" onClick={() => closeMobileMenu()}>
                            <hr className="border-2 border-solid border-black w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                            <hr className="border-2 border-solid border-black w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                        </div>
                    </div>
                    <div className="navBar absolute top-[80px] left-0 text-2xl flex flex-col h-[calc(100vh-80px)] w-[100%] font-bold lg:text-[16px] lg:flex-row lg:justify-end lg:gap-10 lg:mx-10 lg:static lg:ml-0 lg:h-auto lg:w-auto lg:font-normal transition-all duration-300 ease-linear">
                        {/* HOME */}
                        <div className="m-4 lg:m-0 cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}><Link href="/" scroll={true}>Home</Link>
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* ABOUT */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} onClick={(e) => mobileNavClick(e)}>About
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:left-0 lg:top-full lg:translate-x-0 lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:bg-white lg:h-[390px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onClick={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/overview" scroll={true}>Overview</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/leadership" scroll={true}>Leadership</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/eminent-faculty" scroll={true}>Eminent Faculty</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/infrastructure" scroll={true}>Infrastructure</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/trust" scroll={true}>Trust</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/credo" scroll={true}>Credo</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/committee" scroll={true}>Committee</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/Innovation" scroll={true}>Innovation and Startups</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/IJNCT" scroll={true}>International Joural</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/about/Grievance" scroll={true}>Greievance Redressal</Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* PROGRAMS */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} onClick={(e) => mobileNavClick(e)}>Programs
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:left-0 lg:top-full lg:translate-x-0 lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:bg-white lg:grid lg:grid-cols-3 lg:h-[500px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal lg:w-[160px]">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onClick={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <h1 className="font-extrabold text-2xl lg:font-bold lg:text-[16px]">Undergraduate</h1>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.Tech</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.Sc</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>BBA</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>BCA</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.Com</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.Pharm</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>BPT</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>BA LLB</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.Sc</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>MBBS</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>B.H.M</Link>
                                    </div>

                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal lg:w-[160px]">
                                        <h1 className="font-extrabold text-2xl lg:font-bold lg:text-[16px]">Postgraduate</h1>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>MBA</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>M.Tech</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>MPT</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>M.Pharm</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>M.Sc</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>M.Com</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>MD/MS</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>MMLT</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>LLM</Link>
                                    </div>

                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal lg:w-[160px]">
                                        <h1 className="font-extrabold text-2xl lg:font-bold lg:text-[16px]">Diploma</h1>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>D.Pharm</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Diploma in Agriculture</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>DMLT</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Diploma in Radiology</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Diploma in Dialysis Technology</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Diploma in Optometry</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Certificate in OT Technician</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="#" scroll={true}>Diploma in Yoga & Naturopathy</Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* PLACEMENT */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}><Link href="/pages/training-and-placement">Training & Placements</Link>
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* RANKING */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}><Link href="/pages/ranking">Ranking</Link>
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                        {/* Campuses */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} onClick={(e) => mobileNavClick(e)}>Campuses
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:right-0 lg:top-full lg:-translate-x-[100%] lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:grid lg:grid-cols-2 lg:bg-white lg:h-[390px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onMouseOver={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <a className="cursor-pointer" id="campus6" href="https://lncpbhopal.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCT BHOPAL</a>
                                        <a className="cursor-pointer" id="campus1" href="https://lncts.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCTS BHOPAL</a>
                                        <a className="cursor-pointer" id="campus2" href="https://lncte.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCTE BHOPAL</a>
                                        <a className="cursor-pointer" id="campus3" href="https://lnctvu.ac.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCT Vidhyapeeth University Indore</a>
                                        <a className="cursor-pointer" id="campus4" href="https://www.jnctpu.edu.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>JNCT Professional University Bhopal</a>
                                        <a className="cursor-pointer" id="campus5" href="https://lncpbhopal.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCP BHOPAL</a>
                                        <a className="cursor-pointer" id="campus7" href="https://lnctmca.in/" onMouseOver={e => campusHover(e)} onMouseOut={e => campusUnhover(e)}>LNCT MCA BHOPAL</a>
                                    </div>

                                    <div className="hidden lg:block h-full w-[300px] relative">
                                        <div className="campus campus7 h-full w-full absolute top-0 left-0"><img src="/concern/camp7.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus5 h-full w-full absolute top-0 left-0"><img src="/concern/camp5.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus4 h-full w-full absolute top-0 left-0"><img src="/concern/camp4.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus3 h-full w-full absolute top-0 left-0"><img src="/concern/camp3.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus2 h-full w-full absolute top-0 left-0"><img src="/concern/camp2.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus1 h-full w-full absolute top-0 left-0"><img src="/concern/camp1.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="campus campus6 h-full w-full absolute top-0 left-0"><img src="/concern/camp6.jpg" className="h-full w-full object-cover" /></div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* Sister Concerns */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)} onClick={(e) => mobileNavClick(e)}>Sister Concerns
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[600px] lg:h-[300px] lg:absolute lg:right-0 lg:top-full lg:-translate-x-[100%] lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:grid lg:grid-cols-2 lg:bg-white lg:h-[500px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onMouseOver={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <a className="cursor-pointer" id="concern1" href="https://www.lnctworldschools.com/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>LNCT World School</a>
                                        <a className="cursor-pointer" id="concern2" href="https://www.ananjay.co.in/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Ananjay Softek Solutions</a>
                                        <a className="cursor-pointer" id="concern5" href="https://ananjaypharma.co.in/#" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Ananjay Pharmaceuticals Pvt. Lmt.</a>
                                        <a className="cursor-pointer" id="concern3" href="https://www.ananjay.co.in/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Kalruchi Contractors</a>
                                        <a className="cursor-pointer" id="concern4" href="https://parvatisweetners.co.in/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Parvati Sweetners</a>
                                        <a className="cursor-pointer" id="concern6" href="https://vitamax.co.in/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Vitamax Healthcare Pvt. Lmt.</a>
                                        <a className="cursor-pointer" id="concern7" href="https://dabraalcobrew.com/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Dabra Alcobrew Pvt. Lmt.</a>
                                        <a className="cursor-pointer" id="concern8" href="https://lnctguru.com/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>LNCT Guru</a>
                                        <a className="cursor-pointer" id="concern9" href="https://indorelnmc.com/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>LNCT Medical College & Sewakunj Hospital Indore</a>
                                        <a className="cursor-pointer" id="concern10" href="https://cecbilaspur.ac.in/" onMouseOver={e => concernHover(e)} onMouseOut={e => concernUnhover(e)}>Chouksey Group of Colleges</a>
                                    </div>

                                    <div className="hidden lg:block h-full w-[300px] relative">

                                        <div className="concern concern10 h-full w-full absolute top-0 left-0 bg-white"><img src="/concern/concern10.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern9 h-full w-full absolute top-0 left-0 bg-white"><img src="/concern/concern9.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern8 h-full w-full absolute top-0 left-0 bg-white"><img src="/concern/concern8.png" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern7 h-full w-full absolute top-0 left-0"><img src="/concern/concern7.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern6 h-full w-full absolute top-0 left-0"><img src="/concern/concern6.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern5 h-full w-full absolute top-0 left-0"><img src="/concern/concern5.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern2 h-full w-full bg-white absolute top-0 left-0" style={{ display: 'hidden' }}><img src="/concern/concern2.jpg" className="w-full absolute top-[50%] -translate-y-[50%]" /></div>
                                        <div className="concern concern3 h-full w-full absolute top-0 left-0" style={{ display: 'hidden' }}><img src="/concern/concern3.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern4 h-full w-full absolute top-0 left-0" style={{ display: 'hidden' }}><img src="/concern/concern4.jpg" className="h-full w-full object-cover" /></div>
                                        <div className="concern concern1 h-full w-full absolute top-0 left-0"><img src="/concern/concern1.jpg" className="h-full w-full object-cover" /></div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* MORE SECRTION */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 relative cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}>Explore More
                            <hr className="uLine w-0 transition-all duration-400" />

                            <div className="subMenu z-50 overflow-y-scroll h-[calc(100vh-80px)] w-[100%] fixed top-[80px] left-[100%] text-white lg:hidden lg:text-black lg:w-[100px] lg:h-[80px] lg:absolute lg:right-0 lg:top-full lg:-translate-x-[100%] lg:overflow-visible transition-all duration-300 ease-linear">
                                <div className="h-[100%] lg:bg-white lg:h-[120px] lg:mt-2 lg:w-auto lg:translate-x-0">
                                    <div className="bg-black lg:bg-white flex flex-col justify-around text-[20px] gap-1 h-[calc(100vh-80px)] mx-4 font-bold lg:my-4 lg:h-auto lg:gap-0 lg:font-normal">
                                        <div className="m-4 ml-8 lg:ml-4 text-[16px] lg:hidden" onMouseOver={(e) => mobileNavClose(e)}>&#60; BACK</div>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/pages/alumni" scroll={true}>Alumni</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/pages/hostels" scroll={true}>Hostels</Link>
                                        <Link className="hover:bg-black hover:text-white cursor-pointer" href="/pages/ranking" scroll={true}>Ranking</Link>
                                    </div>


                                </div>
                            </div>

                        </div>
                        {/* CONTACT */}
                        <div className="mx-4 mb-4 lg:mx-0 lg:mb-0 cursor-pointer" onMouseOver={(e) => onMouseOver(e)} onMouseOut={(e) => onMouseOut(e)}><Link href="/#contact">Contact Us</Link>
                            <hr className="uLine w-0 transition-all duration-400" />
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}