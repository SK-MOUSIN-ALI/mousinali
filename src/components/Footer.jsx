"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Footer() {
    const footerRef = useRef(null);
    const pathname = usePathname(); // Detect route changes

    useEffect(() => {
        if (!footerRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                footerRef.current.querySelectorAll("h2, p"),
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
            );

            tl.fromTo(
                footerRef.current.querySelectorAll("a svg"),
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
                "-=0.4"
            );

            tl.fromTo(
                footerRef.current.querySelectorAll("span"),
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
            );

            tl.fromTo(
                footerRef.current.querySelectorAll(".menu-item"),
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                "-=0.4"
            );
        }, footerRef);

        // Refresh ScrollTrigger whenever pathname changes
        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, [pathname]);

    return (
        <footer ref={footerRef} className="md:pt-8 pt-4 pb-0 bg-[#F7F7F2]">
            <div className="container-fluid">
                <div className="text-black flex flex-col justify-between">
                    <div className="grid md:grid-cols-2 gap-10 md:py-16 py-10">
                        {/* Left Section */}
                        <div>
                            <h2 className="md:text-5xl text-3xl font-medium md:mb-6 mb-4">Mousin Ali</h2>

                            <div className="mb-10">
                                <h2 className="text-lg font-medium mb-2">LET’S CONNECT.</h2>
                                <p className="text-md max-w-lg text-gray-600 mb-4">
                                    Have an idea or project in mind? Let’s bring it to life together. I’m always open to new collaborations and creative challenges that make an impact.
                                </p>
                            </div>


                            {/* Social Icons */}
                            <div className="flex gap-3 text-md items-center">
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-6 h-6 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-full h-full"
                                    >
                                        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.66c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.06 22 12.07z" />
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M12 .5C5.73.5.27 5.96.27 12.24c0 5.11 3.29 9.44 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.74.12 3.03.75.81 1.2 1.84 1.2 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.2.67.8.56 4.57-1.52 7.86-5.85 7.86-10.96C23.73 5.96 18.27.5 12 .5z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M4.98 3.5C4.98 5 3.8 6.17 2.3 6.17S-.38 5 .38 3.5 1.56.83 2.96.83 4.98 2 4.98 3.5zM.5 8.5h4.5V24H.5zM8.5 8.5h4.31v2.07h.06c.6-1.13 2.06-2.32 4.24-2.32 4.36 0 5.72 2.78 5.72 6.99V24h-4.5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8.5z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                        <path d="M18.244 2H21.5l-7.41 8.455L22 22h-5.818l-4.546-5.91L6.09 22H2.833l7.897-8.995L2 2h5.909l4.09 5.318L18.244 2Zm-1.07 18h1.52L7.91 4h-1.52l10.785 16Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Contact Link */}
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-black flex items-center gap-1 hover:underline mt-6"
                            >
                                <span>Contact Me <span>↗</span></span>
                            </Link>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col justify-center text-right pl-2">
                            <div className="menu-item flex justify-between items-center border-b border-gray-200 md:py-6 py-3">
                                <span className="text-2xl md:text-4xl font-weight-300 text-gray-500">01</span>
                                <Link href="/about" className="text-2xl md:text-4xl font-weight-400 hover:opacity-70 transition">
                                    ABOUT ME
                                </Link>
                            </div>
                            <div className="menu-item flex justify-between items-center border-b border-gray-200 py-6">
                                <span className="text-2xl md:text-4xl font-weight-300 text-gray-500">02</span>
                                <Link href="/services" className="text-2xl md:text-4xl font-weight-400 hover:opacity-70 transition">
                                    SERVICES
                                </Link>
                            </div>
                            <div className="menu-item flex justify-between items-center border-b border-gray-200 py-6">
                                <span className="text-2xl md:text-4xl font-weight-300 text-gray-500">03</span>
                                <Link href="/portfolio" className="text-2xl md:text-4xl font-weight-400 hover:opacity-70 transition">
                                    PORTFOLIO
                                </Link>
                            </div>
                            <div className="menu-item flex justify-between items-center py-6">
                                <span className="text-2xl md:text-4xl font-weight-300 text-gray-500">04</span>
                                <Link href="/pricing" className="text-2xl md:text-4xl font-weight-400 hover:opacity-70 transition">
                                    PRICING
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="text-center text-xs text-gray-500 border-t border-gray-200 py-5">
                        <p>© 2025 Mousin Ali, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
