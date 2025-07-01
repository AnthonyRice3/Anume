"use client"

import Image from "next/image"
import Link from "next/link"

export default function Glasses () {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            img: "/org-glasses.jpg",
            title: "Orange & White",
            desc: "Make a vibrant impression with our Orange & White glasses. Featuring a fresh, energetic colorway, these frames are perfect for those who love to stand out and express their individuality. Lightweight and comfortable for all-day wear.",
            link: "https://buy.stripe.com/28E4gydNB0Ehgxw2Sd3Je07"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            img: "/blk-glasses.jpg",    
            title: "Black",
            desc: "Embrace timeless elegance with our Black glasses. These versatile frames offer a sleek, minimalist look that pairs effortlessly with any outfit, making them a must-have staple for everyday sophistication.",
            link: "https://buy.stripe.com/8x2fZg24T5YBa98dwR3Je08"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            img: "/lprd-glasses.jpg",    
            title: "Cheetah Print",
            desc: "Unleash your wild side with our Cheetah Print glasses. The bold animal print design adds a playful edge to your style, while the sturdy construction ensures you stay comfortable and confident wherever you go.",
            link: "https://buy.stripe.com/4gMaEW7pd4Ux6WW3Wh3Je09"
        },
    ]

    return (
        <section id="glasses" className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
                        Discover Your Style with Savontá Glasses 
                    </h3>
                    <p className="mt-3">
                        Elevate your look and protect your eyes with Anume’s exclusive eyewear collection. Whether you’re seeking bold color, classic sophistication, or a wild statement, our glasses are designed for comfort, durability, and standout style. Find the perfect pair to match your personality and lifestyle.
                    </p>
                </div>
                <div className="mt-12 pb-24 z-50">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3 py-32 md:py-8">
                                    <div className="w-full h-full mx-auto bg-white text-indigo-600 rounded-full flex items-center justify-center">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={240}
                                            height={240}
                                            className="w-2/3 h-2/3"
                                        />
                                    </div>
                                    <h4 className="text-lg text-white font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-950 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                        Buy Now
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}