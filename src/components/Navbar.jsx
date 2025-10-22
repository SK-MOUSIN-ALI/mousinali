"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef(null);
    const bgCirclesRef = useRef(null);
    const tl = useRef(null);

    useGSAP(() => {
        if (overlayRef.current) {
            const links = overlayRef.current.querySelectorAll("li");

            tl.current = gsap.timeline({
                paused: true,
                defaults: { ease: "power3.out" },
            });

            // Step 1: Overlay reveal (soft slide + fade)
            tl.current
                .set(overlayRef.current, { display: "flex" })
                .fromTo(
                    overlayRef.current,
                    {
                        xPercent: 100,
                        opacity: 0,
                        filter: "blur(12px)",
                    },
                    {
                        xPercent: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.75,
                        ease: "cubic-bezier(0.83, 0, 0.17, 1)",
                    }
                )

                // Step 2: Background circles fade & scale
                .fromTo(
                    bgCirclesRef.current.children,
                    { scale: 0.6, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 0.25,
                        stagger: 0.15,
                        duration: 1,
                        ease: "power2.out",
                    },
                    "-=0.5"
                )

                // Step 3: Menu links stagger in (fade + lift)
                .fromTo(
                    links,
                    { y: 50, opacity: 0, rotateX: 20 },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 0.75,
                        stagger: 0.12,
                        ease: "power2.out",
                    },
                    "-=0.25"
                );
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isOpen]);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="bg-white hidden lg:block">
                <div className="container-fluid">
                    <div className="w-full flex justify-between items-center bg-white">
                        <div className="logo">
                            <Link href="/">
                                <span className="font-weight-500">MA.</span>
                            </Link>
                        </div>
                        <ul className="flex items-center justify-center">
                            <li><Link href="/" className="my-nav-link">Home</Link></li>
                            <li><Link href="/about" className="my-nav-link">About</Link></li>
                            <li><Link href="/services" className="my-nav-link">Services</Link></li>
                            <li><Link href="/portfolio" className="my-nav-link">Portfolio</Link></li>
                            <li><Link href="/pricing" className="my-nav-link">Pricing</Link></li>
                            <li><Link href="/contact" className="my-nav-link">Contact</Link></li>
                        </ul>
                        <div>
                            <Link href="/contact" className="btn1">
                                Let&apos;s Talk
                                <div className="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="bg-white  py-4 lg:hidden shadow-sm">
                <div className="container-fluid flex justify-between items-center">
                    <Link href="/" className="text-3xl font-semibold">MA.</Link>

                    {/* Hamburger Icon */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Menu"
                        className="p-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Fullscreen Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black text-white flex-col items-center justify-center z-50 hidden overflow-hidden"
            >
                {/* Soft Glow Background */}
                <div ref={bgCirclesRef} className="absolute inset-0 -z-10">
                    <div className="absolute w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl top-16 left-16"></div>
                    <div className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl bottom-20 right-24"></div>
                    <div className="absolute w-96 h-96 rounded-full bg-pink-500/15 blur-3xl top-1/3 left-1/2"></div>
                </div>

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 hover:scale-110 transition-transform"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Menu Links */}
                <ul className="space-y-8 text-3xl text-center font-light tracking-wide">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                    <li><Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}
