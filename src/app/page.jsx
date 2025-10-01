"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const feedbacks = [
  {
    name: "Moaz",
    role: "CEO THINKTURKEY",
    image: "/images/moaz.jpg",  // replace with your image paths or remote URLs
    text: "Working with Faza and his team was an incredibly professional experience. Their dedication to excellence and customer service is at another level. They do endless revisions, and follow through on their promises. In addition their design sense, and quality of production is very high. Highly recommend working with them!"
  },
  {
    name: "James",
    role: "Founder LIVEMORE",
    image: "/images/james.jpg",
    text: "Faza & Hatypo Studio team is responsive and welcomes feedback to implement. They can improve interpretation of design briefs and attention to detail to avoid lengthy feedback loops. The team here can do a good job."
  },
  {
    name: "Mohannad",
    role: "CEO CACTIX",
    image: "/images/mohannad.jpg",
    text: "Faza is the best web designer I have ever cooperated with. His revise is very quick, and allows limitless revise if you are not satisfied. Highly recommend!"
  },
  {
    name: "Obi Michael",
    role: "Founder LUCIDBLACK.IO",
    image: "/images/obi.jpg",
    text: "Hatypo Studio revamped our website, making it beautiful and easy to use. Their attention to detail and collaboration made all the difference. We've seen great results since the launch!"
  },
  {
    name: "Antonio",
    role: "CEO SOLVENTLIFE",
    image: "/images/antonio.jpg",
    text: "Hatypo Studio truly captured our vision and turned it into a stunning brand. Their team was creative, responsive, and a pleasure to work with. We’re thrilled with the results!"
  },
];


export default function Home() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /** ----------------
       * HERO ANIMATION
       * ---------------- */
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      heroTl
        .from(".hero-text h5", { y: 40, opacity: 0 })
        .from(".hero-text h1", { y: 40, opacity: 0 }, "-=0.6")
        .from(".hero-text p", { y: 40, opacity: 0 }, "-=0.6")
        .from(".hero-cta", { scale: 0.8, opacity: 0, stagger: 0.2 }, "-=0.4");

      gsap.from(".hero-img", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 1.9,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero",
          start: "top 70%",
        },
      });

      /** ----------------
       * ABOUT ANIMATION
       * ---------------- */
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      aboutTl
        .from(".about-text h2", { y: 40, opacity: 0 })
        .from(".about-text p", { y: 40, opacity: 0 }, "-=0.6")
        .from(".about-cta", { scale: 0.8, opacity: 0 }, "-=0.4");

      gsap.from(".about-img", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top 70%",
        },
      });

      /** ----------------
       * PORTFOLIO ANIMATION
       * ---------------- */
      gsap.from(".portfolio .inner-contain", {
        opacity: 0,
        rotateY: -70,
        rotateX: 15,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top 40%",
          end: "bottom 80%",
        },
      });

      /** ----------------
       * Sticky image + text scroll
       * ---------------- */


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




      ScrollTrigger.create({
        trigger: ".client-rev",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      // Heading animation
      gsap.from(".client-rev h2", {
        xPercent: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".client-rev h2",
          start: "top center",
          end: "bottom center",
          scrub: 2,
        },
      });


      // Cards animation (after heading)
      gsap.from(".client-rev .inner-contain", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        delay: 2,
        scrollTrigger: {
          trigger: ".client-rev .container-fluid",
          start: "90% center+=100",
          end: "+=100%",
          scrub: true,
        },
      });


    },
    { scope: pageRef }
  );

  return (
    <>
      <main ref={pageRef}>
        {/* ---------------- HERO ---------------- */}
        <section className="hero bg-[#F8F8F8] content-center">
          <div className="container-fluid">
            <div className="flex justify-center gap-4">
              <div className="w-1/2 text-center hero-text">
                <h5 className="italic text-[#2B2B2B] font-weight-300">Hi It’s Mousin</h5>
                <h1 className="font-weight-400 capitalize">
                  UX Designer crafting intuitive digital experiences
                </h1>
                <p className="text-[#242424] font-weight-300">
                  Focused on clean design, user psychology, and impactful interactions for
                  meaningful human connections that elevate everyday experiences.
                </p>
                <div className="flex items-center justify-center gap-[1.25rem]">
                  <Link href="/portfolio" className="btn1 hero-cta">
                    See My Works
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                  <span className="avail font-weight-300 hero-cta">Available For Work</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center mt-[4rem]">
              <div className="w-1/3 hero-img">
                <Image src="/hero/hero-1.jpg" alt="Profile picture" width={490} height={350} />
              </div>
              <div className="w-1/3 hero-img">
                <Image src="/hero/hero-2.jpg" alt="Profile picture" width={490} height={350} />
              </div>
              <div className="w-1/3 hero-img">
                <Image src="/hero/hero-3.jpg" alt="Profile picture" width={490} height={350} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section className="section-padding about">
          <div className="container-fluid">
            <div className="flex items-center">
              <div className="w-1/2 about-text">
                <h2 className="font-weight-400">
                  Discover my story. I’m passionate about creating cool designs to inspire,
                  engage and connect people.
                </h2>
                <p className="font-weight-300">
                  As a UX designer, I specialize in designing purposeful digital experiences
                  that balance creativity with usability. My approach combines research-driven
                  insights and clean design principles to deliver solutions that not only
                  engage users but also support business goals effectively, while ensuring
                  accessibility, scalability, and long-term user satisfaction.
                </p>
                <a
                  href="/about/sk-mousin-ali-resume.pdf"
                  download
                  className="btn1 about-cta"
                >
                  My Resume
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="w-1/2 flex items-center gap-5 justify-end">
                <div className="about-img">
                  <Image
                    src="/about/about-1.jpg"
                    alt="Profile picture 1"
                    width={337}
                    height={476}
                  />
                </div>
                <div className="about-img">
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
        {/* ---------------- PORTFOLIO ---------------- */}
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

        {/* ---------------- SERVICES ---------------- */}
        <section className="services">
          <div className="container-fluid">
            <div className="uiux-section relative grid grid-cols-2 justify-between">

              {/* LEFT SIDE TEXT PANELS */}
              <div className="section-padding">

                {/* Slide 1 */}
                <div className="uiux-panel h-[90vh] flex flex-col justify-center pr-16">
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
                <div className="uiux-panel h-[90vh] flex flex-col justify-center pr-16">
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
                <div className="uiux-panel h-[100vh] flex flex-col justify-center pr-16">
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
                <div className="relative w-[650px] h-[650px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/portfolio/por-1.jpg"
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

        <section className="relative client-rev bg-[#F6F6F6] min-h-screen overflow-hidden">
          <h2 className="fade-title font-weight-500 text-[#DFDFDF] whitespace-nowrap">
            Testimonials
          </h2>
          <div className="container-fluid relative z-10">
            <div className="grid grid-cols-4 gap-5 gap-y-10">
              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>John Doe</h5>
                    <small>UI/UX Designer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Jane Smith</h5>
                    <small>Product Manager</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Mike Ross</h5>
                    <small>Developer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Anna Lee</h5>
                    <small>Designer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>
              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>John Doe</h5>
                    <small>UI/UX Designer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Jane Smith</h5>
                    <small>Product Manager</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Mike Ross</h5>
                    <small>Developer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>

              <div className="inner-contain bg-white p-7 rounded-md shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h5>Anna Lee</h5>
                    <small>Designer</small>
                  </div>
                  <div>
                    <Image src="/testi/quote.svg" alt="Quote" width={54} height={50} />
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quis nesciunt sed facere possimus et velit debitis? Ratione ipsa eaque vel nobis ullam expedita nostrum vitae dolor, nam provident architecto.</p>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
