import React from "react";
import assets from "../assets/assets";
import { easeOut, motion } from "motion/react";

const Hero = () => {
    return (
        <>
            <div
                id="hero"
                className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    class="flex -space-x-2 w-fit p-2 border items-center border-black rounded-full dark:border-amber-50">
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Avatar"></img>
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Avatar"></img>
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                        alt="Avatar"></img>
                    <p className="pl-4">Tusted by 10k+ peaple</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium max-w-5xl">
                    Turning imaganation into{" "}
                    <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
                        digital
                    </span>{" "}
                    impact.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-1g pb-3">
                    Creating meaningful connections and turning big ideas into
                    interactive digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}

                    className="relative">
                    <img
                        src={assets.hero_img}
                        alt=""
                        className="w-full max-w-6xl"
                    />
                    <img
                        src={assets.bgImage1}
                        alt=""
                        className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Hero;
