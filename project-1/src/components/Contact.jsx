import React, { useState } from "react";
import Title from "./Title";
import toast from "react-hot-toast";

const Contact = () => {
    //! we used React-hot-toast 
    // const [result, setResult] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");
        const formData = new FormData(e.target);

        formData.append("access_key", "4477e97b-4f1d-4283-a9eb-b353d03a11b3");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                // setResult("Form Submitted Successfully");
                //! using React-hot-toast
                toast.success("Form Submitted Successfully");
                e.target.reset();
            } else {
                console.log("Error", data);
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div
            id="contact-us"
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title
                title="Reach out to us"
                desc="From strategy to execution, we craft digital solutions that move your business forward."
            />

            {/* Contact Us */}
            <div className="w-300">
                <div className="mt-12 max-w-lg mx-auto">
                    {/* Card */}
                    <div className="flex flex-col bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-4 sm:p-6 lg:p-8">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Fill in the form
                        </h2>

                        <form onSubmit={onSubmit}>
                            <div className="grid gap-4 lg:gap-6">
                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                    <div>
                                        <label
                                            htmlFor="hs-lastname-contacts-1"
                                            className="block mb-2 text-sm text-gray-800 dark:text-neutral-200 font-medium">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            id="hs-lastname-contacts-1"
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-600 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 rounded-lg sm:text-sm text-gray-800 dark:text-neutral-200 placeholder:text-gray-500 dark:placeholder:text-neutral-400 focus:border-blue-700 dark:focus:border-blue-600 focus:ring-blue-700 dark:focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}

                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                    <div>
                                        <label
                                            htmlFor="hs-email-contacts-1"
                                            className="block mb-2 text-sm text-gray-800 dark:text-neutral-200 font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            id="hs-email-contacts-1"
                                            autocomplete="email"
                                            className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-600 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 rounded-lg sm:text-sm text-gray-800 dark:text-neutral-200 placeholder:text-gray-500 dark:placeholder:text-neutral-400 focus:border-blue-700 dark:focus:border-blue-600 focus:ring-blue-700 dark:focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div>
                                    <label
                                        htmlFor="hs-about-contacts-1"
                                        className="block mb-2 text-sm text-gray-800 dark:text-neutral-200 font-medium">
                                        Details
                                    </label>
                                    <textarea
                                        id="hs-about-contacts-1"
                                        name="message"
                                        required
                                        rows="4"
                                        className="py-2.5 sm:py-3 px-4 block w-full bg-white border border-gray-600 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 rounded-lg sm:text-sm text-gray-800 dark:text-neutral-200 placeholder:text-gray-500 dark:placeholder:text-neutral-400 focus:border-blue-700 dark:focus:border-blue-600 focus:ring-blue-700 dark:focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                                </div>
                            </div>
                            {/* End Grid */}

                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-purple-600 dark:bg-purple-600 border border-transparent text-white hover:bg-purple-800 dark:hover:bg-blue-600 focus:outline-hidden focus:bg-blue-700 dark:focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                                    Send inquiry
                                </button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500 dark:text-neutral-400">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* End Card */}
                </div>
            </div>
            {/* End Contact Us */}
        </div>
    );
};

export default Contact;
