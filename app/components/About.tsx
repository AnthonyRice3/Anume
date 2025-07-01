"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="About" className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <motion.div
                        className="flex-1 sm:hidden lg:block"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/destr.png" className="md:max-w-lg rounded-3xl p-4" alt="" width={450} height={200} />
                    </motion.div>
                    <motion.div
                        className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="mt-3 text-gray-600 text-2xl">
                            We believe that quality matters, which is why our water undergoes rigorous testing to guarantee safety and consistency in every sip. Our commitment to sustainability means each bottle is eco-friendly, helping you make a positive impact on the environment.
                        </p>
                        <p className="mt-3 text-gray-600 text-2xl">
                            When you choose our water, you&apos;re not just hydrating—you&apos;re investing in your health and the planet. Experience the difference today! Don&apos;t believe us? Ask The Destroyer!
                        </p>
                        <a href="/Purchase" className="bg-slate-700 hover:bg-slate-900 p-2 text-white rounded-xl inline-flex gap-x-1 items-center hover:text-slate-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}