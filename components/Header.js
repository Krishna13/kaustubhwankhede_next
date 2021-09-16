import {useState} from 'react'
import Link from 'next/link'
function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 text-gray-600 mb-3 sticky top-0 bg-white z-40">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="flex items-center justify-center">

                            {/* <img src="../kwlogo.png" width="40"/> */}
                            <Link 
                                className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase"
                                href="/"
                            >
                                Kaustubh Wankhede
                            </Link>
                        </div>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col justify-center lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link 
                                    className="py-3 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500"
                                    href="#home"
                                ><span className="mr-4">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="py-3 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500"
                                    href="#about"
                                ><span className="mr-4">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="py-3 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500"
                                    href="#services"
                                ><span className="mr-4">Services</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="py-3 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500"
                                    href="#pricing"
                                ><span className="mr-4">Pricing</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header
