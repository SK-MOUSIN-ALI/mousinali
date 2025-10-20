"use client";
import { useState } from "react";

export default function Enquiry() {
    const [currency, setCurrency] = useState("INR");
    const [priceOptions, setPriceOptions] = useState([
        "₹8,000 - ₹14,000",
        "₹14,000 - ₹20,000",
        "₹20,000 - ₹25,000",
        "₹30,000+"
    ]);
    const [price, setPrice] = useState("₹8,000 - ₹14,000");


    const handleCurrencyChange = (e) => {
        const value = e.target.value;
        setCurrency(value);

        if (value === "INR") {
            const inrPrices = [
                "₹8,000 - ₹14,000",
                "₹14,000 - ₹20,000",
                "₹20,000 - ₹25,000",
                "₹30,000+"
            ];
            setPriceOptions(inrPrices);
            setPrice(inrPrices[0]); // default first option
        } else {
            const usdPrices = [
                "$150 - $500",
                "$500 - $1000",
                "$1000 - $1500",
                "$1500+"
            ];
            setPriceOptions(usdPrices);
            setPrice(usdPrices[0]);
        }
    };



    return (
        <section className=" enquiry section-padding">
            <div className="container-fluid">
                <div className=" grid md:grid-cols-2 xl:gap-12 gap-5">
                    {/* Left Column - Form */}
                    <div className="rounded-2xl p-8 border border-gray-300  shadow-md">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-5">
                            {/* Your Name */}
                            <div>
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="firmName"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-400 focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    required
                                    placeholder="+91 9876543210"
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-400 focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-400 focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition"
                                />
                            </div>

                            {/* Choose Service */}
                            <div className="relative">
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Choose Service
                                </label>
                                <select
                                    name="service"
                                    required
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 
        focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition appearance-none pr-8"
                                >
                                    <option value="">Select Service</option>
                                    <option value="Frontend Development">Frontend Development</option>
                                    <option value="Backend Development">Backend Development</option>
                                    <option value="UI/UX">UI/UX</option>
                                </select>

                                {/* Custom dropdown arrow */}
                                <span className="pointer-events-none absolute right-4 top-10 w-2.5 h-2.5 border-r-2 border-b-2 border-gray-500 rotate-45"></span>
                            </div>

                            {/* Currency */}
                            <div className="relative">
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Currency
                                </label>
                                <select
                                    name="currency"
                                    value={currency}
                                    onChange={handleCurrencyChange}
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 
        focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition appearance-none pr-8"
                                >
                                    <option value="INR">INR</option>
                                    <option value="Dollar">Dollar</option>
                                </select>

                                <span className="pointer-events-none absolute right-4 top-10 w-2.5 h-2.5 border-r-2 border-b-2 border-gray-500 rotate-45"></span>
                            </div>

                            {/* Price Range */}
                            <div className="relative">
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Price Range
                                </label>
                                <select
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 
        focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition appearance-none pr-8"
                                >
                                    {priceOptions.map((option, i) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                <span className="pointer-events-none absolute right-4 top-10 w-2.5 h-2.5 border-r-2 border-b-2 border-gray-500 rotate-45"></span>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <label className="block mb-2 text-sm font-weight-400 text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Write your message here..."
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-400 focus:border-black focus:ring-0.5 focus:ring-black/50 focus:outline-none transition"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white text-sm font-medium py-3 rounded-lg shadow-sm 
        hover:bg-gray-700 focus:ring-0.5 focus:ring-black focus:ring-offset-2 transition-all duration-200 ease-in-out"
                                >
                                    Submit Enquiry
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Right Column - Info */}
                    <div className="p-8 border-gray-300 border-1 rounded-xl bg-[#f6f6f696] shadow-md">
                        <h2 className="text-3xl font-weight-500 mb-3">Get in Touch</h2>
                        <p className="mb-4 text-gray-600">
                            Feel free to reach out through phone, email, or social media.
                        </p>

                        <ul className="mb-6 space-y-2">
                            <li><span className="font-weight-500">Call :</span> <a href="tel:+91 62903 97299">+91 62903 97299</a></li>
                            <li><span className="font-weight-500">Email :</span> <a href="mailto:work.mousin@gmail.com">work.mousin@gmail.com</a></li>
                            <li><span className="font-weight-500">Address :</span> 9F Kustia Road Kolkata, West Bengal, India</li>
                        </ul>

                        <div className="flex gap-3">
                            <span className="font-weight-500">Connect With Me :</span>
                            <div className="flex gap-3 text-md items-center">
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-6 h-6 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                                        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.66c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.06 22 12.07z" />
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                                        <path d="M12 .5C5.73.5.27 5.96.27 12.24c0 5.11 3.29 9.44 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.74.12 3.03.75.81 1.2 1.84 1.2 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.2.67.8.56 4.57-1.52 7.86-5.85 7.86-10.96C23.73 5.96 18.27.5 12 .5z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                                        <path d="M4.98 3.5C4.98 5 3.8 6.17 2.3 6.17S-.38 5 .38 3.5 1.56.83 2.96.83 4.98 2 4.98 3.5zM.5 8.5h4.5V24H.5zM8.5 8.5h4.31v2.07h.06c.6-1.13 2.06-2.32 4.24-2.32 4.36 0 5.72 2.78 5.72 6.99V24h-4.5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8.5z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="w-5 h-5 inline-block transition-transform transform hover:scale-110"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-full h-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-hidden="true"
                                    >
                                        <path d="M18.244 2H21.5l-7.41 8.455L22 22h-5.818l-4.546-5.91L6.09 22H2.833l7.897-8.995L2 2h5.909l4.09 5.318L18.244 2Zm-1.07 18h1.52L7.91 4h-1.52l10.785 16Z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1953707874795!2d88.37775307587118!3d22.534353034370053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276c0d2bb9435%3A0xe0de32520cd797ea!2s9f%2C%20Kustia%20Rd%2C%20Tiljala%2C%20Kolkata%2C%20West%20Bengal%20700039!5e0!3m2!1sen!2sin!4v1759690527979!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full rounded-lg shadow-md"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
