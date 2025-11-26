

const Header = () => {
    return (
        <div className="inter flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                            <p className="text-3xl">
                                <i className="fa-solid fa-bars"></i>
                            </p>

                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Home </a></li>
                            <li><a href="">Recipes </a></li>
                            <li><a href="">About </a></li>
                            <li><a href="">Search </a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-l md:text-3xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a href="">Home </a></li>
                        <li><a href="">Recipes </a></li>
                        <li><a href="">About </a></li>
                        <li><a href="">Search </a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div>
                        <label className="input rounded-3xl w- ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                        
                    </label>
                    </div>
                  <div className="bg-green-400 flex items-center justify-center h-8 w-8 md:h-12 md:w-12 rounded-full">
                    <i class="fa-regular fa-circle-user fa-2xl "></i>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Header;