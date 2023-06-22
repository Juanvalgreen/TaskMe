//import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function SideBar(){
    const navigate = useNavigate();






    return (
        <>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-1/4 overflow-y-auto text-center bg-gray-900">
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-lime-600"></i>
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">TaskMe</h1>
                <i
                    className="bi bi-x cursor-pointer ml-28 lg:hidden"
                ></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <i className="bi bi-search text-sm"></i>
                <input
                type="text"
                placeholder="Search"
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white" onClick={() => navigate('/')}>
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Pending</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white" onClick={() => navigate('/completed')}>
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Completed</span>
            </div>

            <div className="my-4 bg-gray-600 h-[1px]"></div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </div>

        
        </>
    );
}

export default SideBar;