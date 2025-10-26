"use client";

import { useState } from "react";

export default function Enquiry() {
    const [sent, setSent] = useState(false);
    const [currency, setCurrency] = useState("INR");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    const budgetOptions =
        currency === "INR"
            ? [
                "₹10,000 — ₹25,000",
                "₹25,000 — ₹50,000",
                "₹50,000 — ₹1,00,000",
                "₹1 Lakh+",
            ]
            : [
                "$200 — $500",
                "$500 — $1200",
                "$1200 — $2500",
                "$2500+",
            ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
            <div className="max-w-5xl w-full">

                {/* Heading */}
                <div className="text-left mb-14">
                    <h1 className="text-[44px] leading-[1.05] tracking-tight font-light text-black">
                        Let's work together
                    </h1>
                    <p className="mt-3 text-sm text-neutral-600 max-w-sm">
                        Tell me a bit about your project. I usually reply within 24 hours.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Name */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Name</label>
                            <input
                                required
                                type="text"
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Email</label>
                            <input
                                required
                                type="email"
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Phone</label>
                            <input
                                required
                                type="tel"
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            />
                        </div>

                        {/* Service */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Service</label>
                            <select
                                required
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            >
                                <option value="">Select service</option>
                                <option value="uiux">UI/UX Design</option>
                                <option value="web">Website Design & Development</option>
                                <option value="brand">Brand Identity</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        {/* Currency */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Currency</label>
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            >
                                <option value="INR">INR ₹</option>
                                <option value="USD">USD $</option>
                            </select>
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Budget</label>
                            <select
                                required
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            >
                                <option value="">Select budget</option>
                                {budgetOptions.map((b, i) => (
                                    <option key={i} value={b}>{b}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {/* Project Details (full width) */}
                    <div>
                        <label className="text-xs uppercase tracking-wider text-neutral-700">Project Details</label>
                        <textarea
                            required
                            rows={5}
                            className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            placeholder="What are you building? Timeline? Anything important?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full border border-black py-3 text-sm tracking-wide hover:bg-gray-700  text-white transition-all bg-black"
                    >
                        {sent ? "Sent ✓" : "Send Request"}
                    </button>


                    <p className="text-[11px] text-neutral-500 text-center mt-4">No spam. No newsletter. Just a real reply.</p>
                </form>
            </div>
        </section>
    );
}
