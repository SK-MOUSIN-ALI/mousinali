"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Save final positions
      const finalPositions = imagesRef.current.map((el) => {
        const style = window.getComputedStyle(el);
        return {
          top: style.top,
          left: style.left,
          right: style.right,
          bottom: style.bottom,
        };
      });

      // Reset: put all images in center
      gsap.set(imagesRef.current, {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        opacity: 0
      });
      gsap.set(textRef.current, { opacity: 0, y: 50 });

      // Timeline animation
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // 1. Logos to their final absolute positions
      tl.to(
        imagesRef.current,
        {
          top: (i) => finalPositions[i].top,
          left: (i) => finalPositions[i].left !== "auto" ? finalPositions[i].left : "auto",
          right: (i) => finalPositions[i].right !== "auto" ? finalPositions[i].right : "auto",
          bottom: (i) => finalPositions[i].bottom !== "auto" ? finalPositions[i].bottom : "auto",
          xPercent: 0,
          yPercent: 0,
          delay: 0.25,
          opacity: 1,
          duration: 0.9,
          ease: "power3.inOut",
          stagger: 0.125,
        },
        "-=0.5"
      )
        // 2. Text reveal



        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        })



        // 43. Floating infinite effect
        .to(
          imagesRef.current,
          {
            y: "+=20",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.2,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center section-padding bg-white overflow-hidden lg:h-[70vh] h-[auto]"
    >

      {/* Floating Logos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full all-icon hidden lg:block">
          {/* Left side logos */}
          <Image
            ref={(el) => (imagesRef.current[0] = el)}
            src="/tech/nextjs.svg"
            alt="Next.js"
            width={60}
            height={60}
            className="absolute top-[15%] left-[18%] tech-next"
          />
          <Image
            ref={(el) => (imagesRef.current[1] = el)}
            src="/tech/bootstrap.svg"
            alt="Bootstrap"
            width={75}
            height={60}
            className="absolute top-[28%] left-[25%] tech-bootstrap"
          />
          <Image
            ref={(el) => (imagesRef.current[2] = el)}
            src="/tech/figma.svg"
            alt="Figma"
            width={40}
            height={60}
            className="absolute bottom-[25%] left-[22%] tech-figma"
          />
          <Image
            ref={(el) => (imagesRef.current[3] = el)}
            src="/tech/tailwind.png"
            alt="Tailwind"
            width={98}
            height={60}
            className="absolute bottom-[12%] left-[30%] tech-tailwind"
          />

          {/* Right side logos */}
          <Image
            ref={(el) => (imagesRef.current[4] = el)}
            src="/tech/react.png"
            alt="React"
            width={67}
            height={60}
            className="absolute top-[18%] right-[20%] tech-react"
          />
          <Image
            ref={(el) => (imagesRef.current[5] = el)}
            src="/tech/node.png"
            alt="Node.js"
            width={65}
            height={65}
            className="absolute top-[32%] right-[27%] tech-node"
          />
          <Image
            ref={(el) => (imagesRef.current[6] = el)}
            src="/tech/photoshop.svg"
            alt="Photoshop"
            width={62}
            height={60}
            className="absolute bottom-[25%] right-[24%] tech-photoshop"
          />
          <Image
            ref={(el) => (imagesRef.current[7] = el)}
            src="/tech/html.svg"
            alt="HTML"
            width={53}
            height={60}
            className="absolute bottom-[12%] right-[30%] tech-html"
          />

        </div>


      </div>

      {/* Content */}
      <div ref={textRef} className="relative text-center max-w-2xl mx-auto z-10 lg:px-0 px-4">
        <span className="avail font-light hero-cta mb-4 block text-gray-500">
          Available For Work
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-weight-500 capitalize text-gray-900 leading-tight">
          Have an idea for a project? <br /> Let's discuss about it.
        </h2>

        <p className="my-5 text-gray-600 text-lg">
          Let's turn your idea into a real project, efficiently and creatively.
        </p>


        {/* Buttons */}
        <Link href="/contact" className="btn1 hero-cta mt-3">
          Discuss Project
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
      </div>
    </section>
  )
}

export default Cta