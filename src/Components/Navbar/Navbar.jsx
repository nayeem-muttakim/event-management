import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "/user.png"
const Navbar = () => {
   


  const {user,logOut} =useContext(AuthContext);
  console.log(user)
  const HandleLogOut = ()=>{
           logOut()
           .then()
           .catch()
  }

  const pages = (
    < >
      <li>
        <NavLink  to="/"   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-teal-400 text-white text-base" : ""
  }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs"   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-teal-400 text-white text-base" : ""
  }>Blog</NavLink>
      </li>
  
      <li>
        <NavLink to="/contact"   className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-teal-400 text-white text-base" : ""
  }>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-5 bg-teal-100  py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages}
          </ul>
        </div>
        <a className=" text-4xl font-medium "> <span className="text-teal-500">G</span> TECH</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>
      <div className="navbar-end space-x-20">
      
        {
          user?
          <div className="w-10 flex gap-3  items-center ">
           <img className="rounded-full" src={user.photoURL ? user.photoURL: logo} alt="" />
           <h1 className="text-lg font-semibold">{user.displayName ? user.displayName : "User"}</h1>
        </div>

          :
            
            <div className="w-10">
        
            </div>
        }
        
        {
          user ?
          <button onClick={HandleLogOut} className="px-4 py-3 rounded-lg text-xl font-normal bg-slate-600 text-teal-400">Logout</button>
          :
          <Link to="/login">
          <button className="px-4 py-3 rounded-lg text-xl font-normal bg-slate-600 text-teal-400">Login</button>
        </Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
