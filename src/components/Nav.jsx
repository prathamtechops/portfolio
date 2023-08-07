/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className=" bg-black fixed w-full h-[80px] flex flex-1 justify-between items-center px-4 text-gray-300  ">
            <div>
                <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
            </div>

            <NavLink />
            <div onClick={handleShow} className="md:hidden z-10">
                {!show ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile */}

            <MobileLinks show={show} handleShow={handleShow} />
            {/* social */}

            <Social />
        </div>
    );
};

export default Nav;

function NavLink({}) {
    return (
        <ul className="hidden flex gap-4 md:flex">
            <li className="hover:border-b hover:border-b-2 hover:border-green-300 ">
                <Link to="Home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className="hover:border-b hover:border-b-2 hover:border-green-300">
                <Link to="About" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className="hover:border-b hover:border-b-2 hover:border-green-300">
                <Link to="Skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className="hover:border-b hover:border-b-2 hover:border-green-300">
                <Link to="Work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className="hover:border-b hover:border-b-2 hover:border-green-300">
                <Link to="Contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

function MobileLinks({ show, handleShow }) {
    return (
        <ul
            className={
                !show
                    ? "hidden"
                    : "absolute top-0 left-0 w-full h-screen bg-[#081938] flex flex-col justify-center items-center "
            }
        >
            <li className="py-6 text-4xl  ">
                <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    onClick={handleShow}
                >
                    Home
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link
                    to="About"
                    smooth={true}
                    duration={500}
                    onClick={handleShow}
                >
                    About
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link
                    to="Skills"
                    smooth={true}
                    duration={500}
                    onClick={handleShow}
                >
                    Skills
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link
                    to="Work"
                    smooth={true}
                    duration={500}
                    onClick={handleShow}
                >
                    Work
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link
                    to="Contact"
                    smooth={true}
                    duration={500}
                    onClick={handleShow}
                >
                    Contact
                </Link>
            </li>

            <ul className="p-3 mt-5 flex gap-4">
                <a
                    href="https://www.linkedin.com/in/prathampoddar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-300"
                >
                    <FaLinkedin size={30} />
                </a>

                <li>
                    <a
                        href="ttps://github.com/prathamtechops"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-300"
                    >
                        <FaGithub size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:poddarpratham@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-300"
                    >
                        <HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>
        </ul>
    );
}

function Social({}) {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul className="p-3">
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 transition-all ease-in-out">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/prathampoddar/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] transition-all ease-in-out">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="ttps://github.com/prathamtechops"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] transition-all ease-in-out">
                    <a
                        className="flex justify-between items-center w-full text-gray-300"
                        href="mailto:poddarpratham@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
