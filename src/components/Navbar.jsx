import { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets"
import { NavLink, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from "axios";
const Navbar = () => {

    const Navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const { token, setToken, userData, backendUrl } = useContext(AppContext);

    const logout = () => {
        setToken(false);
        localStorage.removeItem("token");
    }

    return (
        <div className="flex items-center justify-between text-sm  mb-5 border-b borer-b-gray-400">
            <img onClick={() => { Navigate("/"); scrollTo(0, 0); }} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            <ul className="hidden md:flex  items-start gap-5 font-medium ">
                <NavLink to="/">
                    <li className="py-1">HOME</li>
                    <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-1">ALL DOCTORS</li>
                    <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/about">
                    <li className="py-1">ABOUT</li>
                    <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-1">CONTACT</li>
                    <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="https://cureconnectadmin01.netlify.app/">
                    <li className="py-1 px-4 border border-stone-400">ADMIN LOGIN</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-9 rounded-full" src={userData.image} alt="Profile Picture" />
                        <img className="w-3" src={assets.dropdown_icon} alt="Dropdown icon" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => Navigate("/my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={() => Navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>
                        :
                        <button className="bg-[#5f6fff] text-white px-8 py-3 rounded-full font-light hidden md:block" onClick={() => Navigate("/login")}>Create Account</button>
                }
                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="menu icon" className="w-6 md:hidden" />

                {/* mobile menu */}
                <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"}  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className="flex items-center justify-between px-5 py-6">
                        <img className="w-36" src={assets.logo} alt="Logo" />
                        <img className="w-7" src={assets.cross_icon} alt="Cross icon" onClick={() => setShowMenu(false)} />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <NavLink onClick={() => setShowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
