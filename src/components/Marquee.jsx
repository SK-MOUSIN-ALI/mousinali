"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const el = marqueeRef.current;
        const totalWidth = el.scrollWidth / 2;
        const marqueeAnim = gsap.to(el, {
            x: -totalWidth,
            ease: "none",
            duration: 20,
            repeat: -1,
            modifiers: {
                x: (x) => `${parseFloat(x) % -totalWidth}px`,
            },
        });

        ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                if (self.direction === 1) {
                    marqueeAnim.timeScale(1);
                } else {
                    marqueeAnim.timeScale(-1);
                }
            },
        });
    }, []);

    return (
        <>
            <section className="relative w-full overflow-hidden bg-[#222222] text-gray-300 lg:py-8 py-4 xl:py-12">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-weight-500"
                >
                    <div className="flex items-center">
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                        <Link href="/contact" className="mx-8 hover:text-white transition-all  duration-200">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
