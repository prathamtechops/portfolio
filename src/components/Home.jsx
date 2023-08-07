import { HiArrowNarrowRight } from "react-icons/hi";
import Me from "../assets/me2.png";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="Home"
            className=" Home w-full h-screen flex justify-between "
        >
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-300">
                    Pratham
                </h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-gray-400">
                    Poddar
                </h2>
                <p className="text-gray-500 py-4 max-w-[700px]">
                    Passionate Full Stack Developer | Eager Learner | Tech
                    Enthusiast
                </p>

                <div>
                    <button className="px-6 py-3 flex items-center text-gray-300 border-2 hover:bg-pink-600 transition-all duration-300 ease-in-out">
                        <Link to="Work" smooth={true} duration={500}>
                            View work
                        </Link>
                        <HiArrowNarrowRight className="ml-2" />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-1/2">
                <img src={Me} alt="me" className="rounded-full max-w-[300px]" />
            </div>
        </div>
    );
};

export default Home;
