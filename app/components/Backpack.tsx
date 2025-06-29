"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Backpack () {
    return (
        <section className="py-14">
            <div className="bg-slate-500 p-6 rounded-lg shadow-lg max-w-screen-xl mx-auto px-4 text-slate-800 font-bold gap-16 justify-between md:px-8 lg:flex">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-xl space-y-3">
                        <motion.p
                            className="text-slate-950 text-3xl font-semibold sm:text-4xl"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Classic Logo Snapback Hat
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Soft, breathable, and built to last — this everyday essential features our signature logo on a modern, tailored fit. Perfect for workouts, weekends, or repping your style wherever you go.
                        </motion.p>
                    </div>
                    <div className="flex items-center mt-6">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-blue-700'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'></path>
                        </svg>
                        <motion.p
                            className="ml-8 text-lg text-slate-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            
                            Spacious main compartment fits laptops, books, or gear.
                        </motion.p>
                    </div><div className="flex items-center mt-6">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-blue-700'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'></path>
                        </svg>
                        <motion.p
                            className="ml-8 text-lg text-slate-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            
                            Water-resistant exterior with reinforced stitching.
                        </motion.p>
                    </div>
                    <div className="flex items-center mt-6">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-blue-700'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'></path>
                        </svg>
                        <motion.p
                            className="ml-8 text-lg text-slate-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            
                            Padded straps and back panel for comfort on long hauls.
                        </motion.p>
                    </div>
                    <div className="flex items-center mt-6">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-blue-700'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'></path>
                        </svg>
                        <motion.p
                            className="ml-8 text-lg text-slate-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            
                            Front zip pocket for easy-access storage and essentials

.
                        </motion.p>
                    </div>
                    <motion.div
                        className="mt-12 max-w-lg lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link href="https://buy.stripe.com/dRmaEW10Pdr34OOfEZ3Je05" className="mt-8 inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-950 hover:bg-slate-500 active:bg-slate-700 transition duration-150">
                            Buy Now!
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="mt-12 lg:mt-0"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image width={350} height={150} src="/bpchair.png" className="w-full shadow-lg rounded-lg border" alt="tshirt" />
                </motion.div>
            </div>
        </section>
    )
}