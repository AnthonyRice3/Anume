"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Product() {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-5xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <motion.div
                        className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-slate-600 font-semibold">
                            Detroit&apos;s Wettest Water
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl ">
                            Why Our Water is the Best.
                        </p>
                        <p className="mt-3 text-gray-600 max-w-md text-2xl pb-4">
                            Our water is sourced from the purest springs in Michigan, ensuring every bottle is packed with natural minerals and a crisp, refreshing taste. Unlike ordinary bottled water, our advanced filtration process preserves essential nutrients while removing impurities, giving you a healthier and more satisfying hydration experience. Choose us for water that truly quenches your thirst and supports your well-being.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex-1 sm:hidden lg:block pl-8"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/water1.png" className="p-2 md:max-w-lg sm:rounded-lg" alt="" width={350} height={120} />
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg gradient-bg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            ></motion.div>
        </section>
    )
}