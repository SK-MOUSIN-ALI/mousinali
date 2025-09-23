import Image from "next/image";
import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";


export default function Home() {
  return (
    <>
      <section className="hero bg-[#F8F8F8] content-center">
        <div className="container-fluid">
          <div className="flex justify-center gap-4">
            <div className="w-1/2 text-center">
              <h5 className="italic text-[#2B2B2B] font-weight-300">Hi It’s Mousin</h5>
              <h1 className="font-weight-400 capitalize">UX Designer crafting
                intuitive digital experiences</h1>
              <p className="text-[#242424] font-weight-300">Focused on clean design, user psychology, and impactful interactions for meaningful human connections that elevate everyday experiences.</p>
              <div className="flex items-center justify-center gap-[1.25rem]">
                <Link href="/portfolio" className="btn1">See My Works
                  <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"></path>
                    </svg>
                  </div></Link>
                <span className="avail font-weight-300">Available For Work</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-center mt-[4rem]">
            <div className="w-1/3">
              <Image
                src="/hero/hero-1.jpg"
                alt="Profile picture"
                width={490}
                height={350}
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/hero/hero-2.jpg"
                alt="Profile picture"
                width={490}
                height={350}
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/hero/hero-3.jpg"
                alt="Profile picture"
                width={490}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding about">
        <div className="container-fluid">
          <div className="flex items-center">
            <div className="w-1/2">
              <h2 className="font-weight-400">Discover my story. I’m passionate about creating cool designs to inspire, engage and connect people.</h2>
              <p className="font-weight-300">As a UX designer, I specialize in designing purposeful digital experiences that balance creativity with usability. My approach combines research-driven insights and clean design principles to deliver solutions that not only engage users but also support business goals effectively, while ensuring accessibility, scalability, and long-term user satisfaction.</p>
              <a
                href="/about/sk-mousin-ali-resume.pdf"
                download
                className="btn1"
              >
                My Resume
                <div className="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="w-1/2 flex items-center gap-5 justify-end">
              <div>
                <Image
                  src="/about/about-1.jpg"
                  alt="Profile picture 1"
                  width={337}
                  height={476}
                />
              </div>
              <div>
                <Image
                  src="/about/about-2.jpg"
                  alt="Profile picture 2"
                  width={337}
                  height={476}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio bg-[#f8f8f8] relative fade-title-padd">
        <div className="container-fluid">
          <h1 className="fade-title font-weight-500 text-transparent bg-clip-text bg-gradient-to-b from-black/10 to-transparent">
            Portfolio
          </h1>
          <div className="grid grid-cols-2 gap-8 gap-y-15 relative z-10">
            <div className="inner-contain bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
              <div>
                <Image
                  src="/portfolio/por-1.jpg"
                  alt="Project-1"
                  width={749}
                  height={485}
                />
              </div>
              <div className="pro-content">
                <h3 className="font-normal">Debcare Marketing</h3>
                <p className="font-light">
                  A modern, user-focused landing page created for Debcare’s wellness product DEPURGO. The design highlights product benefits, ingredients, and value through a clean layout, engaging visuals, and clear call-to-actions for better conversions.
                </p>
                <div className="flex gap-3">
                  <span className="my-badge">B2B Sales</span>
                  <span className="my-badge">Healthcare</span>
                  <span className="my-badge">Ayurvedic</span>
                </div>
              </div>
            </div>
            <div className="inner-contain bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
              <div>
                <Image
                  src="/portfolio/por-2.jpg"
                  alt="Project-2"
                  width={749}
                  height={485}
                />
              </div>
              <div className="pro-content">
                <h3 className="font-normal">Debcare Marketing</h3>
                <p className="font-light">
                  A modern, user-focused landing page created for Debcare’s wellness product DEPURGO. The design highlights product benefits, ingredients, and value through a clean layout, engaging visuals, and clear call-to-actions for better conversions.
                </p>
                <div className="flex gap-3">
                  <span className="my-badge">B2B Sales</span>
                  <span className="my-badge">Healthcare</span>
                  <span className="my-badge">Ayurvedic</span>
                </div>
              </div>
            </div>
            <div className="inner-contain bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
              <div>
                <Image
                  src="/portfolio/por-3.jpg"
                  alt="Project-3"
                  width={749}
                  height={485}
                />
              </div>
              <div className="pro-content">
                <h3 className="font-normal">Debcare Marketing</h3>
                <p className="font-light">
                  A modern, user-focused landing page created for Debcare’s wellness product DEPURGO. The design highlights product benefits, ingredients, and value through a clean layout, engaging visuals, and clear call-to-actions for better conversions.
                </p>
                <div className="flex gap-3">
                  <span className="my-badge">B2B Sales</span>
                  <span className="my-badge">Healthcare</span>
                  <span className="my-badge">Ayurvedic</span>
                </div>
              </div>
            </div>
            <div className="inner-contain bg-white rounded-[1.25rem] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]">
              <div>
                <Image
                  src="/portfolio/por-4.jpg"
                  alt="Project-4"
                  width={749}
                  height={485}
                />
              </div>
              <div className="pro-content">
                <h3 className="font-normal">Debcare Marketing</h3>
                <p className="font-light">
                  A modern, user-focused landing page created for Debcare’s wellness product DEPURGO. The design highlights product benefits, ingredients, and value through a clean layout, engaging visuals, and clear call-to-actions for better conversions.
                </p>
                <div className="flex gap-3">
                  <span className="my-badge">B2B Sales</span>
                  <span className="my-badge">Healthcare</span>
                  <span className="my-badge">Ayurvedic</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
