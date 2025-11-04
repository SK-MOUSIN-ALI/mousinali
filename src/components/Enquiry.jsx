"use client";

import { useState } from "react";

export default function Enquiry() {
    const [sent, setSent] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "0b66b375-3146-46b8-ae2b-7a909b319d4f"); // replace with your key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            setSent(true);
            e.target.reset();
            setTimeout(() => setSent(false), 3000);
        } else {
            alert("Something went wrong. Please try again!");
        }

        setLoading(false);
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Name</label>
                            <input name="name" required type="text" className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm" />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Email</label>
                            <input name="email" required type="email" className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm" />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Phone</label>
                            <input name="phone" required type="tel" className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm" />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Service</label>
                            <select name="service" required className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm">
                                <option value="">Select service</option>
                                <option value="uiux">UI/UX Design</option>
                                <option value="web">Website Design & Development</option>
                                <option value="testing">Manual Testing</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Currency</label>
                            <select
                                name="currency"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            >
                                <option value="INR">INR ₹</option>
                                <option value="USD">USD $</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-wider text-neutral-700">Budget</label>
                            <select name="budget" required className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm">
                                <option value="">Select budget</option>
                                {budgetOptions.map((b, i) => (
                                    <option key={i} value={b}>{b}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs uppercase tracking-wider text-neutral-700">Project Details</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="mt-1 w-full border-b border-neutral-300 bg-transparent py-2 focus:border-black focus:outline-none text-sm"
                            placeholder="What are you building? Timeline? Anything important?"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full border border-black py-3 text-sm tracking-wide transition-all 
                            ${loading ? "bg-gray-400" : "bg-black hover:bg-gray-700 text-white"}`}
                    >
                        {loading ? "Sending..." : sent ? "Sent ✓" : "Send Request"}
                    </button>

                    <p className="text-[11px] text-neutral-500 text-center mt-4">No spam. No newsletter. Just a real reply.</p>
                </form>
            </div>
        </section>
    );
}
