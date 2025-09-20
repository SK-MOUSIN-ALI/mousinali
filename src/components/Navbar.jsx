// components/Navbar.jsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white">
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
                        <Link href="/contact" className="btn1">Let&apos;s Talk</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
