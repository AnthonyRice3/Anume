"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PriceCard() {

    const plans = [
        {
            name: "(24)pk - 16.9oz Water Bottles",
            desc: "",
            price: 18,
            buy: "https://buy.stripe.com/aFa3cu4d186Jfts3Wh3Je00",
            isMostPop: false,
            features: [
                "Ultra-Purified Filtration",
                "Naturally Alkaline (pH 8+)",
                "Crisp, Clean Taste",
                "Eco-Friendly Packaging",
                "UV-Sterilized for Safety",
                "Sourced from Pristine Natural Springs",
                "Premium Value Pack",
            ],
        },
        {
            name: "3 x (24)pk - 16.9oz Water Bottles",
            desc: "",
            price: 44,
            buy: "https://buy.stripe.com/dRm8wOcJx2Mp2GGakF3Je01",
            isMostPop: true,
            features: [
                "Ultra-Purified Filtration",
                "Naturally Alkaline (pH 8+)",
                "Crisp, Clean Taste",
                "Eco-Friendly Packaging",
                "UV-Sterilized for Safety",
                "Sourced from Pristine Natural Springs",
                "Premium Value Pack",
            ],
        },
        {
            name: "10 x (24)pk - 16.9oz Water Bottles",
            desc: "",
            price: 149,
            buy: "https://buy.stripe.com/fZu28qeRF0Eh6WW0K53Je02",
            isMostPop: false,
            features: [
                "Ultra-Purified Filtration",
                "Naturally Alkaline (pH 8+)",
                "Crisp, Clean Taste",
                "Eco-Friendly Packaging",
                "UV-Sterilized for Safety",
                "Sourced from Pristine Natural Springs",
                "Premium Value Pack",
            ],
        },
    ];

    return (
        <section className='py-14 bg-transparent rounded-2xl'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <motion.div
                    className='relative max-w-xl mx-auto sm:text-center'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Please reach out if you have any questions about our pricing or if you need a custom order. We are here to help you find the perfect solution for your hydration needs.
                        </p>
                    </div>
                </motion.div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {plans.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`bg-white relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {item.isMostPop ? (
                                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span>
                            ) : ""}
                            <div className="p-8 space-y-4 border-b">
                                <span className='text-slate-600 font-medium'>
                                    {item.name}
                                </span>
                                <div className='text-gray-800 text-3xl font-semibold'>
                                    ${item.price} <span className="text-xl text-gray-600 font-normal">.99</span>
                                </div>
                                <p>
                                    {item.desc}
                                </p>
                                <Link href={item.buy} className='cursor-pointer px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-slate-950 hover:bg-slate-500 active:bg-slate-700'>
                                    Buy Now
                                </Link>
                            </div>
                            <ul className='p-8 space-y-3'>
                                <li className="pb-2 text-gray-800 font-medium">
                                    <p>Features</p>
                                </li>
                                {item.features.map((featureItem, fidx) => (
                                    <motion.li
                                        key={fidx}
                                        className='flex items-center gap-5'
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + fidx * 0.07 }}
                                        viewport={{ once: true }}
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-5 w-5 text-slate-600'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fillRule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clipRule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};