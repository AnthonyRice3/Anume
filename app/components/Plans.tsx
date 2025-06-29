"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Plans() {

    const plan = {
        name: "Basic plan",
        desc: "",
        price: 45,
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
    }

    return (
        <section className='relative py-14 bg-white'>
            <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
                <div className='relative max-w-xl space-y-3 px-4 md:px-0'>
                    <motion.p
                        className='text-gray-800 text-3xl font-semibold sm:text-4xl'
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Pay as you grow
                    </motion.p>
                    <motion.div
                        className='max-w-xl'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            We offer options for B2B. Our Platinum package is for those who want to get the most out of our service. Our plans are designed to be affordable and scalable, so you can choose the one that best fits your needs.
                        </p>
                    </motion.div>
                </div>
                <div className='mt-16 justify-between gap-8 md:flex'>
                    <motion.div
                        className="flex-1 sm:hidden lg:block p-4"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/water2.png" className="md:max-w-lg sm:rounded-lg" alt="" width={350} height={120} />
                    </motion.div>
                    <motion.div
                        className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-4 py-8 border-b md:p-8">
                            <div className="justify-between flex">
                                <div className="max-w-xs">
                                    <span className='text-2xl text-gray-800 font-semibold sm:text-3xl'>
                                        {plan.name}
                                    </span>
                                    <p className="mt-3 sm:text-sm">
                                        {plan.desc}
                                    </p>
                                </div>
                                <div className='flex-none mb-4 text-gray-800 text-2xl font-semibold sm:text-3xl'>
                                    ${plan.price} <span className="text-xl text-gray-600 font-normal">.00</span>
                                </div>
                            </div>
                            <Link href="/Purchase" className='cursor-pointer mt-8 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-slate-950 hover:bg-slate-500 active:bg-slate-700'>
                                Get Started
                            </Link>
                        </div>
                        <ul className='p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid'>
                            <div className="pb-2 col-span-2 text-gray-800 font-medium">
                                <p>Features</p>
                            </div>
                            {plan.features.map((featureItem, idx) => (
                                <motion.li
                                    key={idx}
                                    className='flex items-center gap-5'
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
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
                </div>
            </div>
        </section>
    );
}