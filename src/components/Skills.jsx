import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import Python from "../assets/python.png";
import C from "../assets/c.png";

const Skills = () => {
    return (
        <div name="Skills" className="skills w-full h-screen  text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <div>
                        <p className="text-4xl font-bold border-b-4 inline border-pink-600  ">
                            Skills
                        </p>
                        <p className="py-4">Languages/Tools I know</p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                        <Skill Title="React" Img={ReactImg} />
                        <Skill Title="Node" Img={Node} />
                        <Skill Title="FireBase" Img={FireBase} />
                        <Skill Title="GitHub" Img={GitHub} />
                        <Skill Title="Tailwind" Img={Tailwind} />

                        <Skill Title="Java" Img={Java} />
                        <Skill Title="Python" Img={Python} />
                        <Skill Title="C++" Img={C} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

function Skill({ Title, Img }) {
    return (
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Img} className="w-20 mx-auto" alt="" />
            <p>{Title}</p>
        </div>
    );
}
