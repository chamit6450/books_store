import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//react-icons
import { FaBlog } from 'react-icons/fa';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const {user}=useContext(AuthContext);
    // console.log(user);

    //toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[]);

    //nav items
    const navItems = [
        {link: "Home", path:"/"},
        {link: "Find Books", path:"/shop"},
        {link: "Inventory", path:"/admin/dashboard/upload"},
        {link: "About", path:"/about"},
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/*logo*/ }
                <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                    <FaBlog className='inline-block'/>
                    BookHaven
                </Link>
            {/* navitems for large devices */}
            <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({link,path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                }
            </ul>

            {/* btn for lg devices  */}
            <div className='space-x-12 hidden lg:flex items-center'>
                <button><RiMenu3Line className="w-5 hover-text-blue-700"/></button>
                {
                    user? user.email:""
                }
            </div>

            {/* menu btn for the mobile devices  */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen ? <RxCross2 className="h-5 w-5 text-black"/> : <RiMenu3Line/>
                    }
                </button>
            </div>
            </div>

            {/* nav items for sm devices  */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 t ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link,path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
  );
};

export default Navbar;