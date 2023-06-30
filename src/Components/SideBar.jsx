import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { userContext } from '../context/userContext';

import { signOut } from 'firebase/auth';
import { auth } from '../base';

import {ClipboardDocumentListIcon,ArrowLeftOnRectangleIcon,ClipboardDocumentCheckIcon,UserPlusIcon,ArrowRightOnRectangleIcon} from '@heroicons/react/24/solid';



function SideBar() {
  const navigate = useNavigate();

  const { loggedUser, logOutUser } = useContext(userContext);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        logOutUser();
        console.log('Logged out');
      })
      .catch((error) => {
        // Handle logout error
        console.log('Logout error:', error);
      });
  };

  return (
    <>
      <div className="sidebar fixed min-[570px]:top-0 bottom-0 left-0 p-2 w-1/4 overflow-y-auto text-center bg-gray-900 max-[570px]:w-full  max-[570px]:h-14  max-[570px]:bottom-0 max-[570px]:flex max-[570px]:justify-between ">
        <div className="text-gray-100 text-xl">
          <div className="min-[570px]:p-2.5  min-[570px]:mt-1 flex items-center">
            {/*<img className='h-14 w-14 max-[570px]:h-10 max-[570px]:w-10' src='../../public/TaskMeLogo.png'/>*/}
            <h1 className="font-bold text-gray-200 text-[15px] ml-3 max-[570px]:hidden">TaskMe</h1>

          </div>
          <div className="my-2 bg-gray-600 h-[1px] max-[570px]:hidden"></div>
        </div>
        {loggedUser != null && (
          <div className='max-[570px]:flex'>
            <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white max-[570px]:hidden">
              <i className="bi bi-search text-sm"></i>
              <input
                type="text"
                placeholder="Search"
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
              />
            </div>
            <div
              className="p-2.5 min-[570px]:mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white"
              onClick={() => navigate('/Pending')}
            >
              <ClipboardDocumentListIcon className='h-8 w-8 text-white  '/>
              <span className="text-[15px] ml-4 text-gray-200 font-bold max-[570px]:hidden">Pending</span>
            </div>
            <div
              className="p-2.5 min-[570px]:mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white"
              onClick={() => navigate('/Completed')}
            >
              <ClipboardDocumentCheckIcon className='h-8 w-8 text-white  '/>
              <span className="text-[15px] ml-4 text-center text-gray-200 font-bold max-[570px]:hidden">Completed</span>
            </div>

            <div className="my-4 bg-gray-600 h-[1px]"></div>
          </div>
        )}
        {loggedUser === null ? (
          <div className='max-[570px]:flex max-[570px]:items-center'>
            <div
              className="p-2.5 min-[570px]:mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white"
              onClick={() => navigate('/')}
            >
              <ArrowRightOnRectangleIcon className='h-8 w-8 text-white  '/>
              <span className="text-[15px] min-[570px]:ml-4 text-gray-200 font-bold max-[570px]:hidden">Log In</span>
            </div>
            <div
              className="p-2.5 min-[570px]:mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white"
              onClick={() => navigate('/Register')}
            >
              <UserPlusIcon className='h-8 w-8 text-white  '/>
              <span className="text-[15px] ml-4 text-gray-200 font-bold max-[570px]:hidden">Register</span>
            </div>
          </div>
        ) : (
          <div
            className="p-2.5 min-[570px]:mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-lime-600 text-white"
            onClick={logOut}
          >
            <ArrowLeftOnRectangleIcon className='h-8 w-8 text-white  '/>
            <span className="text-[15px] ml-4 text-gray-200 font-bold max-[570px]:hidden">Log Out {loggedUser.displayName}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default SideBar;
