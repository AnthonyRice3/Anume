"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "",
        role: "",
        text: "This is the best water I’ve ever tasted. I feel healthier and more energized every day!",
        avatar: "/logo1.png",
    },
    {
        name: "",
        role: "",
        text: "Hydration is key for my training. This water keeps me at my best.",
        avatar: "/logo1.png",
    },
    {
        name: "",
        role: "",
        text: "I recommend this water to all my clients for its purity and taste.",
        avatar: "/logo1.png",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-14 bg-white">
            <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
                <motion.div
                    className="max-w-xl mx-auto text-center space-y-3"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    
                </motion.div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="z-50 bg-white rounded-xl p-6 shadow flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-slate-200"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, type: "spring", stiffness: 200 }}
                                viewport={{ once: true }}
                            >
                                <Image src={t.avatar} alt={t.name} width={64} height={64} />
                            </motion.div>
                            <p className="text-gray-700 mb-4">&quot;{t.text}&quot;</p>
                            <div>
                                <span className="font-semibold text-slate-900">{t.name}</span>
                                <span className="block text-sm text-slate-500">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="z-10 absolute top-0 w-full h-[350px] testimonial-gradient-bg"></div>
        </section>
    );
}

