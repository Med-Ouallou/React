import React from "react";
import assets from "../assets/assets";

const Footer = (props) => {
    const { theme } = props;
    return (
        <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
            {/* top of footer */}
            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10 py-10">
                <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img
                        src={theme === "dark" ? assets.logo_dark : assets.logo}
                        alt=""
                        className="w-33 sm:w-44"
                    />
                    <p className="max-w-md">
                        From strategy to execution, we craft digital solutions
                        that move your business forward.
                    </p>

                    <ul className="flex gap-10">
                        <li>
                            <a className="hover:text-primary" href="#hero">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#our-work">
                                Oue Work
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-primary" href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary"
                                href="#contact-us">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">
                        Subscribe to our newsletter
                    </h3>
                    <p className="text-sm mt-2 mb-6">
                        The latest news, articles, and resources, sent to your
                        inbox weekly.
                    </p>
                    <div className="flex gap-2 text-sm">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
                        />
                        <button className='bg-purple-600 text-white rounded px-6'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
