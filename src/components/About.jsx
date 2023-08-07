const About = () => {
    return (
        <div name="About" className="w-full h-screen text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>I'm Pratham, and I'm excited to connect with you.</p>
                    </div>
                    <div>
                        <p>
                            I am a dedicated and self-taught student of computer
                            science, with a strong focus on web development,
                            database management, and data science. My true
                            passion lies in crafting user-friendly web
                            applications that cater to the unique needs of both
                            clients and users. Additionally, my keen interest in
                            data science drives me to explore and harness the
                            power of data to create meaningful insights and
                            drive informed decision-making. I am driven by a
                            relentless desire to learn and improve, and I thrive
                            on the challenges that come with creating seamless,
                            data-driven, and engaging online experiences.
                        </p>
                        <p>
                            In addition to my academic pursuits, I have a solid
                            foundation in programming languages such as HTML,
                            CSS, JavaScript, and Python. This allows me to
                            design and develop innovative and responsive web
                            applications that not only meet the technical
                            requirements but also deliver exceptional user
                            experiences. I am constantly seeking new
                            opportunities to expand my skillset and collaborate
                            on exciting projects that push the boundaries of
                            modern web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
