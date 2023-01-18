import { Link } from "react-router-dom";
import うさぎ from "../src/images/うさぎ.png";

const Home = () => {
    return (
        <>
            <header className="text-gray-700 border-b border-gray-200">
                {/* md ... md以上の時にcssを適用 */}
                <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
                    <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Home</span>
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

            <section id="home" className="text-gray-700">
                <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-20">
                    <div className="md:w-1/2 flex-grow lg:pr-24 md:pr-16 text-center mb-16 md:text-left">
                        <h1 className="sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                            Toshiki Ura
                            
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
                            dignissimos atque voluptate blanditiis necessitatibus reiciendis
                            tenetur amet? Repudiandae, cupiditate illum.
                        </p>
                        <div>
                            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Contact
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded m-auto"
                            alt=""
                            src={うさぎ}
                        />
                    </div>
                </div>
            </section>

            <section id="about" className="text-gray-700 border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">
                            About Me
                        </h1>
                        <p className="pb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis, velit?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                            ad debitis praesentium quis dolore adipisci deleniti. Fugit non
                            magni dolorem! Facere debitis rerum qui ut fuga, ullam, ad vitae
                            explicabo et ipsa amet consequatur ipsum iure quibusdam numquam
                            illo ipsam reiciendis rem sapiente architecto exercitationem,
                            labore quaerat. Dolore numquam quam repellendus saepe culpa
                            distinctio maiores soluta, pariatur quae alias velit nisi
                            corrupti, quod magnam eius. Necessitatibus architecto nobis ipsa,
                            excepturi voluptatibus eum velit cum sequi possimus harum sunt
                            commodi cumque sint. Enim tempora minima sapiente omnis, qui
                            facilis! Sequi, ab ut facere excepturi molestias ipsa, reiciendis
                            quisquam, sed eos magni aliquid explicabo. Est vel sequi cum ipsa
                        </p>
                    </div>
                    <div className="flex -m-4 flex-wrap">
                        <div className="md:w-1/3 p-4">
                            <div className="bg-gray-100 h-full p-8 rounded-lg ">
                                <div className="flex items-center mb-3">
                                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg font-medium">
                                        Web Developer
                                    </h2>
                                </div>
                                <div className="#">
                                    <p className="leading-relaxed text-base">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae, laudantium?.
                                    </p>
                                    <a href="#" className="mt-3 text-green-500 flex items-center">
                                        もっと見る
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <div className="bg-gray-100 h-full p-8 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg font-medium">
                                        Web Developer
                                    </h2>
                                </div>
                                <div className="#">
                                    <p className="leading-relaxed text-base">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae, laudantium?.
                                    </p>
                                    <a href="#" className="mt-3 text-green-500 flex items-center">
                                        もっと見る
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 p-4">
                            <div className="bg-gray-100 h-full p-8 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg font-medium">
                                        Web Developer
                                    </h2>
                                </div>
                                <div className="#">
                                    <p className="leading-relaxed text-base">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae, laudantium?.
                                    </p>
                                    <a href="#" className="mt-3 text-green-500 flex items-center">
                                        もっと見る
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;