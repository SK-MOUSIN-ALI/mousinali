// components/Navbar.jsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white hidden lg:block">
            <div className="container-fluid">
                <div className="w-full flex justify-between items-center bg-white">
                    <div className="logo">
                        <Link href="/"><span className="font-weight-500">MA.</span></Link>
                    </div>
                    <ul className="flex items-center justify-center">
                        <li>
                            <Link href="/" className="my-nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="my-nav-link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="my-nav-link">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="my-nav-link">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="my-nav-link">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="my-nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="/contact" className="btn1">Let&apos;s Talk
                            <div className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
