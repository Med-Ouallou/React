import React from "react";
import assets from "../assets/assets";
import Title from "../components/Title";
import ServiseCard from "./ServiseCard";
import { motion } from "motion/react";

const Servises = () => {
    const servicesData = [
        {
            title: "Advertising",
            description:
                "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.ads_icon,
        },
        {
            title: "Content marketing",
            description: "We help you execute your plan and deliver results.",
            icon: assets.marketing_icon,
        },
        {
            title: "Content writing",
            description:
                "We help you create a marketing strategy that drives results.",
            icon: assets.content_icon,
        },
        {
            title: "Social media",
            description:
                "We help you build a strong social media presence and engage with your audience.",
            icon: assets.social_icon,
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="services"
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <img
                variants={item}
                src={assets.bgImage2}
                alt=""
                className="absolute -top-110 -left-70 -z-1 dark:hidden"
            />

            <motion.Title
                variants={item}
                title="how can we help ?"
                desc="fom strategy to execution, we craft digital solutions that move your business forward."
            />

            <motion.div
                variants={item}
                className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service, index) => (
                    <ServiseCard key={index} service={service} index={index} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Servises;
