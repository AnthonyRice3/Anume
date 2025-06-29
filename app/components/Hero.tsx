'use client'

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <div className="bg-white">
                <section className="relative">
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                        <div className="space-y-5 max-w-4xl mx-auto text-center">
                            <motion.h2
                                className="text-4xl text-slate-950 font-extrabold mx-auto md:text-5xl"
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                &quot;..but whoever drinks of the water I give them will never thirst.&quot;
                            </motion.h2>
                            <motion.h1
                                className="max-w-2xl mx-auto text-black text-2xl font-bold"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                A<span className="text-slate-800 pb-4">NUME</span> Natural <span className="text-red-500">Favored</span> Water
                            </motion.h1>
                            <motion.form
                                onSubmit={(e) => e.preventDefault()}
                                className="justify-center items-center gap-x-3 sm:flex"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2.5 text-slate-900 bg-slate-200 focus:bg-slate-400 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                                />
                                <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-slate-950 hover:bg-slate-400 active:bg-slate-600 duration-150 cursor-pointer rounded-lg sm:mt-0 sm:w-auto">
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </motion.form>
                            <motion.div
                                className="flex justify-center items-center gap-x-4 text-slate-400 text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            className="w-5 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                                        >
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                        </motion.svg>
                                    ))}
                                </div>
                                <p><span className="text-slate-100">5.0</span> by over 200 users</p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg gradient-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>
                </section>
            </div>
        </>
    )
}