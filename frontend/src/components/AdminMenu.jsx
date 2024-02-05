import React from 'react'
import { FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/auth';

import { MdSpaceDashboard, MdProductionQuantityLimits, MdOutlineReviews } from "react-icons/md";
import { BiSolidCategoryAlt, BiSolidCoupon } from "react-icons/bi";
import { TiThList } from "react-icons/ti";


const AdminMenu = () => {


      const AdminLinks = [
            { name: "Dashboard", icon: <MdSpaceDashboard size={25} />, link: "/dashboard/admin" },
            { name: "Products", icon: <MdProductionQuantityLimits size={25} />, link: "/dashboard/admin/products" },
            { name: "Categories", icon: <BiSolidCategoryAlt size={25} />, link: "/dashboard/admin/categories" },
            { name: "Orders", icon: <TiThList size={25} />, link: "/dashboard/admin/orders" },
            { name: "Users", icon: <FaUsers size={25} />, link: "/dashboard/admin/users" },
            { name: "Reviews", icon: <MdOutlineReviews size={25} />, link: "/dashboard/admin/reviews" },
            { name: "Coupons", icon: <BiSolidCoupon size={25} />, link: "/dashboard/admin/coupons" },

      ]


      return (
            <>

                  <div className=" w-[80%] h-[65vh] mx-2 md:mx-6 lg:mx-8 z-50 bg-gray-200 shadow-xl pt-10 rounded-xl border-r border-white dark:bg-gray-800 dark:border-gray-700">

                        <div className="w-full h-full  px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
                              <ul className="space-y-2 font-medium">
                                    {
                                          AdminLinks.map((link, i) => (
                                                <li>
                                                      <NavLink to={link.link} className="flex flex-col md:flex-col lg:flex-row items-center p-2 text-gray-600 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                            {link.icon}
                                                            <span className="hidden md:inline ms-0 lg:ms-3 text-sm  ">{link.name}</span>

                                                      </NavLink>
                                                </li>
                                          ))
                                    }

                              </ul>
                        </div>
                  </div>


            </>


      )
}

export default AdminMenu