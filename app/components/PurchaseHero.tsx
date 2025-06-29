"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PurchaseHero () {
    return (
        <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <motion.h1
                    className="text-slate-400 font-bold text-4xl xl:text-5xl"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Hydration &amp; 
                    <span className="text-white"> Gear for Everyday</span>
                </motion.h1>
                <motion.p
                    className="text-white max-w-xl leading-relaxed sm:mx-auto lg:ml-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Explore our curated selection of hydration essentials and branded gear. From premium water packs that keep you refreshed, to stylish hats, comfortable shirts, durable backpacks, and sleek coffee mugs — everything is crafted with quality and purpose. Whether you&apos;re on the move, at the gym, or relaxing at home, our products are made to elevate your everyday lifestyle.
                </motion.p>
                <motion.div
                    className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {/* Add CTA buttons or content here */}
                </motion.div>
            </div>
            <motion.div
                className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Image
                    height={450}
                    width={550}
                    alt='water bottle'
                    src="/water4.png"
                    className="w-full mx-auto sm:w-10/12  lg:w-full rounded-3xl"
                />
            </motion.div>
        </section>
    )
}