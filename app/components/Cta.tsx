"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Cta() {

    const stats = [
        { data: "35K", title: "Customers" },
        { data: "10K+", title: "Downloads" },
        { data: "40+", title: "Countries" },
        { data: "30M+", title: "Total revenue" },
    ]

    return (
        <section className="py-14 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-400 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
                            We Do Our Best To Make Our Customers Happy
                        </h3>
                        <p className="mt-3 max-w-xl">
                            We pride ourselves on our customer service and our ability to provide the best products at the best prices. Our customers are our top priority, and we will do everything we can to make sure they are happy. The numbers represent our success in achieving this goal.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex-none mt-6 md:mt-0 lg:mt-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {stats.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-4xl text-slate-200 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium text-red-400">{item.title}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    className="sm:hidden lg:block lg:max-w-xl"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image src="/water3.png" className="rounded-lg pt-4" alt="" width={350} height={350}/>
                </motion.div>
            </div>
        </section>
    )
}