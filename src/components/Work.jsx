import React from "react";

const ProjectIframe = ({ src }) => (
    <div
        style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio for responsive iframe
            height: 0,
            overflow: "hidden",
            borderRadius: "6px",
        }}
    >
        <iframe
            src={src}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: "0",
            }}
            title="project-iframe"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    </div>
);

const projectDescriptions = [
    "Netflix Homepage with HTML and CSS",
    "Homepage Project",
    "Quote Generator with React",
];

const Work = () => {
    const projects = [
        "https://codesandbox.io/embed/black-dawn-22942t?fontsize=14&hidenavigation=1&theme=dark",
        "https://codesandbox.io/embed/green-meadow-h9khry?fontsize=14&hidenavigation=1&theme=dark",
        "https://codesandbox.io/embed/recursing-davinci-9xmg45?fontsize=14&hidenavigation=1&theme=dark",
    ];

    return (
        <div name="Work" className="w-full md:h-screen text-gray-300 p-8 ">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6">Check Out</p>
                </div>
                <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden hover:shadow-lg hover:bg-black hover:bg-opacity-60 transition-shadow duration-300"
                        >
                            <ProjectIframe src={project} />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 group-hover:flex flex-col justify-center items-center">
                                <p className="text-white text-lg font-bold">
                                    Project {index + 1}
                                </p>
                                <p className="text-white text-sm">
                                    {projectDescriptions[index]}
                                </p>
                                <p className="text-white text-sm">
                                    Click to view
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
