import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <>

            <header className="text-gray-700 border-b border-gray-200">
                {/* md ... md以上の時にcssを適用 */}
                <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
                    <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Blog</span>
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
        </>
    );
};

export default Blog