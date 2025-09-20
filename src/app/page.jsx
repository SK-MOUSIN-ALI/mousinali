import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="hero bg-[#F8F8F8] content-center">
        <div className="container-fluid">
          <div className="flex justify-center gap-4">
            <div className="w-1/2 text-center">
              <h5 className="italic text-[#2B2B2B] font-weight-300">Hi It’s Mousin</h5>
              <h1 className="font-weight-400 capitalize">UX Designer crafting
                intuitive digital experiences</h1>
              <p className="text-[#242424] font-weight-300">Focused on clean design, user psychology, and impactful interactions for meaningful human connections that elevate everyday experiences.</p>
              <div className="flex items-center justify-center gap-[1.25rem]">
                <Link href="/portfolio" className="btn1">See My Works</Link>
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
      </div>
    </>
  );
}
