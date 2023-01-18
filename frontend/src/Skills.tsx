import { Link } from "react-router-dom";
function Skills() {
    return (
        <>
            <header className="text-gray-700 border-b border-gray-200">
                {/* md ... md以上の時にcssを適用 */}
                <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
                    <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Skills</span>
                    </a>
                    <nav className="flex items-center justify-center md:ml-auto text-base">
                        <Link to={`/home/`} className="mr-5 hover:text-blue-400 duration-300">
                            Home
                        </Link>
                        <Link to={`/skills/`} className="mr-5 hover:text-blue-400 duration-300">
                            Skills
                        </Link>
                        <Link to={`/blog/`} className="mr-5 hover:text-blue-400 duration-300">
                            Blog
                        </Link>
                        <Link to={`/`} className="mr-5 hover:text-blue-400 duration-300">
                            Log out
                        </Link>
                    </nav>
                </div>
            </header>

            <section id="skill" className="text-gray-700 border-t border-gray-200">
                <div className="flex container px-5 py-24 mx-auto flex-wrap">
                    <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
                        <img
                            src="https://i.ibb.co/ZHGrn4B/work4.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
                            My Skills
                        </h1>
                        <div className="">
                            <div className="w-full">
                                <h2>HTML</h2>
                                <div className="shadow w-full bg-green-100 mt-2">
                                    <div
                                        className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                                        style={{ width: "85%" }}
                                    >
                                        85%
                                    </div>
                                </div>
                                <h2 className="pt-5">CSS</h2>
                                <div className="shadow w-full bg-green-100 mt-2">
                                    <div
                                        className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                                        style={{ width: "80%" }}
                                    >
                                        80%
                                    </div>
                                </div>
                                <h2 className="pt-5">Javascript</h2>
                                <div className="shadow w-full bg-green-100 mt-2">
                                    <div
                                        className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                                        style={{ width: "65%" }}
                                    >
                                        65%
                                    </div>
                                </div>
                                <h2 className="pt-5">Tailwindcss</h2>
                                <div className="shadow w-full bg-green-100 mt-2">
                                    <div
                                        className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                                        style={{ width: "75%" }}
                                    >
                                        75%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills