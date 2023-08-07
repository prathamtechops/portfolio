import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
    return (
        <div name="Contact" className="w-full md:h-screen text-gray-300 p-8 ">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Contact Me
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <FaMapMarkerAlt className="text-2xl text-pink-600" />
                            <div className="ml-4 text-md tracking-wide font-semibold">
                                India, New Delhi
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <FaPhoneAlt className="text-2xl text-pink-600" />
                            <div className="ml-4 text-md tracking-wide font-semibold">
                                +91 99531 46330
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <FaEnvelope className="text-2xl text-pink-600" />
                            <div className="ml-4 text-md tracking-wide font-semibold">
                                poddarpratham@gmail.com
                            </div>
                        </div>
                    </div>

                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;

function Form() {
    return (
        <form
            action="https://getform.io/f/75203d5d-fde9-44f9-bdb6-f4d441756d55"
            method="POST"
            className="p-6 flex flex-col justify-center  "
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                    Full Name
                </label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none dark:text-white"
                />
            </div>

            <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none dark:text-white"
                />
            </div>

            <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                    Number
                </label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none dark:text-white"
                />
            </div>

            <button
                type="submit"
                className="w-full md:w-32 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-dark transition ease-in-out duration-300"
            >
                Submit
            </button>
        </form>
    );
}
