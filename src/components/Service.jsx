"use client";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    useGSAP(() => {
        const panels = gsap.utils.toArray(".uiux-panel");
        const images = gsap.utils.toArray(".uiux-sticky-img");
        gsap.set(images.slice(1), { yPercent: 100 });

        panels.forEach((panel, i) => {
            let img = images[i];
            ScrollTrigger.create({
                trigger: panel,
                start: "top center",
                end: "bottom center",
                scrub: true,
                onEnter: () => {
                    gsap.to(img, { yPercent: 0, duration: 0.5 });
                },
                onLeaveBack: () => {
                    if (i !== 0) {
                        gsap.to(img, { yPercent: 100, duration: 0.5 });
                    }
                },
            });
        });
    })
    return (
        <>
            <section className="services hidden lg:block">
                <div className="container-fluid">
                    <div className="uiux-section relative grid grid-cols-2 justify-between">

                        {/* LEFT SIDE TEXT PANELS */}
                        <div className="section-padding">

                            {/* Slide 1 */}
                            <div className="uiux-panel h-[90vh] flex flex-col justify-center xl:pr-16 pr-5">
                                <h2>UI/UX Research & Design</h2>
                                <p className="font-weight-300">
                                    Creating human-centered designs that combine functionality with aesthetics.
                                    Through detailed user research, wireframes, and prototypes, delivering
                                    smooth navigation, modern interfaces, and engaging digital experiences
                                    aligned with business objectives and user needs.
                                </p>
                                <ul>
                                    <li>
                                        <span className="font-weight-500">User Research :</span> Discover target audience behavior and expectations.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Wireframing & Prototyping :</span> Visualize flows and test usability early.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Interface Design :</span> Craft consistent, appealing, and functional UI elements.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">UX Strategy :</span> Connect design solutions with business growth and goals.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Usability Testing :</span> Validate ideas with real feedback for better results.
                                    </li>
                                </ul>
                            </div>

                            {/* Slide 2 */}
                            <div className="uiux-panel h-[90vh] flex flex-col justify-center xl:pr-16 pr-5">
                                <h2>Frontend Development</h2>
                                <p className="font-weight-300">
                                    Developing modern, responsive, and performance-driven web interfaces that
                                    engage users across all devices. Using React, Next.js, and Tailwind CSS,
                                    ensuring clean code, fast load times, and interactive designs that
                                    perfectly complement UI/UX strategies.
                                </p>
                                <ul>
                                    <li>
                                        <span className="font-weight-500">Responsive Layouts :</span> Build pixel-perfect designs for mobile, tablet, and desktop.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Modern Frameworks :</span> Expertise in React, Next.js, and Tailwind CSS.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Performance Optimization :</span> Deliver high-speed, SEO-friendly websites.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Cross-Browser Compatibility :</span> Ensure flawless performance on all browsers.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Interactive UI :</span> Add animations, transitions, and micro-interactions for engagement.
                                    </li>
                                </ul>
                            </div>

                            {/* Slide 3 */}
                            <div className="uiux-panel h-[100vh] flex flex-col justify-center xl:pr-16 pr-5">
                                <h2>Backend Development</h2>
                                <p className="font-weight-300">
                                    Building powerful, secure, and scalable backends that form the foundation
                                    of modern applications. Specialized in API development, databases, and
                                    eCommerce solutions using MySQL and MongoDB, ensuring smooth integration
                                    with frontends and reliable business operations.
                                </p>
                                <ul>
                                    <li>
                                        <span className="font-weight-500">API Development :</span> Create APIs for frontend integration.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Database Management :</span> Expertise in MySQL and MongoDB for scalable storage.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">eCommerce Solutions :</span> Develop custom online stores and payment integrations.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Authentication & Security :</span> Implement secure login, roles, and data protection.
                                    </li>
                                    <li>
                                        <span className="font-weight-500">Server-Side Logic :</span> Handle business rules, transactions, and workflows.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT SIDE STICKY IMAGES */}
                        <div className="sticky top-0 h-screen flex items-center justify-end overflow-hidden rounded-xl">
                            <div className="relative w-[650px] h-[650px] img-container rounded-xl overflow-hidden xl:shadow-xl">
                                <Image
                                    src="/service/ser-1.jpg"
                                    alt="UI/UX"
                                    fill
                                    className="uiux-sticky-img absolute object-cover rounded-xl"
                                />
                                <Image
                                    src="/portfolio/por-2.jpg"
                                    alt="Frontend Development"
                                    fill
                                    className="uiux-sticky-img absolute object-cover rounded-xl"
                                />
                                <Image
                                    src="/portfolio/por-3.jpg"
                                    alt="Backend Development"
                                    fill
                                    className="uiux-sticky-img absolute object-cover rounded-xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="mob-ser section-padding">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                        <div className="inner-contain p-7 border border-gray-200 rounded-xl shadow-lg">
                            <h2 className="cont-title">UI/UX Research & Design</h2>
                            <p className="font-weight-300 text-gray-900">
                                Crafting user-centered interfaces with clear structure, smooth navigation, and visually appealing design
                                to enhance overall digital experience.
                            </p>
                        </div>

                        <div className="inner-contain p-7 border border-gray-200 rounded-xl shadow-lg">
                            <h2 className="cont-title">Frontend Development</h2>
                            <p className="font-weight-300 text-gray-900">
                                Building responsive and high-performance web interfaces using modern frameworks to ensure fast,
                                consistent, and seamless user interaction across devices.
                            </p>
                        </div>

                        <div className="inner-contain p-7 border border-gray-200 rounded-xl shadow-lg">
                            <h2 className="cont-title">Manual Testing</h2>
                            <p className="font-weight-300 text-gray-900">
                                Conducting detailed functional and usability testing to detect issues early,
                                ensuring stability, reliability, and a smooth user experience before release.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service