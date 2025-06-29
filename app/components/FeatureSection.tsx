"use client"

import { motion } from "framer-motion";

export default function FeatureSection() {

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l7.5-13L18 20H3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l3-5 3 5" />
                </svg>
            ),
            title: "Naturally Sourced",
            desc: "Our water is drawn from pristine natural springs, ensuring purity from the very start.",
            href: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C12 3 6 10.5 6 15a6 6 0 0012 0c0-4.5-6-12-6-12z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h.01M15 17h.01" />
                </svg>
            ),
            title: "Mineral Rich",
            desc: "Packed with essential minerals, our water supports your health and hydration.",
            href: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 17.25l-1.5-2.598 1.5-2.598M19.5 17.25l1.5-2.598-1.5-2.598M12 21v-3M12 3v3M7.5 6.75l-1.5 2.598 1.5 2.598M16.5 6.75l1.5 2.598-1.5 2.598" />
                </svg>
            ),
            title: "Eco-Friendly Bottles",
            desc: "Our bottles are made from 100% recyclable materials, reducing environmental impact.",
            href: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M4 8h16M6 12h12M8 16h8M10 20h4" />
                </svg>
            ),
            title: "Advanced Filtration",
            desc: "State-of-the-art filtration removes impurities while preserving natural goodness.",
            href: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-6 0v4M5 15h14a2 2 0 002-2v-2a2 2 0 00-2-2H7.5a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
            ),
            title: "Great Taste",
            desc: "Enjoy a crisp, refreshing flavor that makes hydration a pleasure every time.",
            href: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v6c0 5.25-7.5 9-7.5 9s-7.5-3.75-7.5-9v-6L12 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
            ),
            title: "Rigorous Testing",
            desc: "Every batch is tested for quality and safety, guaranteeing you the best water possible.",
            href: "#"
        },
    ];

    return (
        <section className="py-14 bg-linear-to-bl from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-screen-xl mx-auto px-4 text-slate-400 md:px-8">
                <div className="max-w-xl space-y-3">
                    <motion.h3
                        className="text-slate-200 text-3xl font-semibold sm:text-4xl text-left"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Pure Quality, Pure Benefits
                    </motion.h3>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="flex gap-x-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex-none w-12 h-12 bg-slate-600 text-red-400 rounded-lg flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                >
                                    {item.icon}
                                </motion.div>
                                <div className="space-y-3">
                                    <h4 className="text-lg text-slate-400 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-white">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}