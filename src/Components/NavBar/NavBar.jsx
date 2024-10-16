import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Listed Books", path: "/listedbooks" },
    { id: 3, name: "Page to Read", path: "/pagetoread" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white shadow-xl py-3">
      <div className="container mx-auto px-3 lg:px-0">
        <nav className="flex justify-between items-center ">
          <Link to="/">
            <h2 className="text-2xl md:text-3xl font-bold btn btn-ghost">
              Book Vibe
            </h2>
          </Link>

          <ul className="hidden md:flex duration-700 gap-x-3">
            {navItems.map((item) => (
              <NavLink to={item.path} key={item.id} className='flex gap-x-5'>
                <li className="btn btn-ghost nav text-base">{item.name}</li>
              </NavLink>
            ))}
          </ul>

          <div className="hidden md:flex gap-x-2">
            <button className="btn bg-[#22BE0A] text-white text-base">
              Sign In
            </button>
            <button className="btn bg-[#58C6D2] text-white text-base">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={handleNav}>
              {open ? (
                <IoMdClose className="text-3xl" />
              ) : (
                <IoMdMenu className="text-3xl" />
              )}
            </button>

            <ul
              className={`block absolute bg-[#fff] px-5 shadow-xl py-5 rounded-md duration-700 ${
                open ? "top-[4.6rem] right-1" : "-top-96 right-3"
              }`}
            >
              {navItems.map((item) => (
                <NavLink to={item.path} key={item.id} className="flex ">
                  <li className="btn btn-sm btn-ghost nav text-base my-1">
                    {item.name}
                  </li>
                </NavLink>
              ))}
              <div className=" mt-2 space-x-2">
                <button className="btn bg-[#22BE0A] text-white text-base">
                  Sign In
                </button>
                <button className="btn bg-[#58C6D2] text-white text-base">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
