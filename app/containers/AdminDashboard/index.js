import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { postReq, removeAuthCookie } from '@/utils/apiHandlers';
import toast from 'react-hot-toast';
import { MenuDropdown } from '@/components';
import { reactIcons } from '@/utils/icons';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  const navLinks = [
    {
      to: '/',
      icon: '/images/icons/users.png',
      text: 'Users',
    },
  ];

  const handleLogout = async () => {
    try {
      const res = await postReq('/auth/logout');
      const { status } = res;
      if (status) {
        removeAuthCookie();
        navigate('/login');
        toast.success('Log out successfully');
      } else if (!status) {
        removeAuthCookie();
        navigate('/login');
        toast.success('Log out successfully');
      }
    } catch (error) {
      toast.error(error);
      console.log(error, 'error in handle logout');
    }
  };

  return (
    <>
      <main className="flex ">
        <button
          onClick={toggleSidebar}
          className="  text-2xl cursor-pointer z-10 absolute top-3 left-3 bg-gray-800 text-white rounded-full p-2 "
        >
          {reactIcons.menu}
        </button>

        {openSidebar && (
          <div className=" w-[250px]  py-5  box-shadow px-4 relative">
            {/* <button
              onClick={() => setOpenSidebar(false)}
              className=" rotate-90 text-2xl absolute top-5 right-2 bg-gray-800 text-white rounded-full p-2 "
            >
              {reactIcons.shortdown}
            </button> */}
            <div className="flex items-center justify-center border-b border-[#CFCFCF] pb-10 pt-5">
              <img
                src="/images/logoVista.png"
                className="w-[110px] mx-auto"
                alt=""
              />
            </div>

            <div className="flex flex-col h-[calc(100dvh-250px)] overflow-auto mt-5 pr-1">
              <MenuDropdown title="Menu" items={navLinks} />
              <div
                className="flex items-center gap-3 2xl:p-4 p-3 px-[14px] mt-5 cursor-pointer border-t border-[#CFCFCF]"
                onClick={handleLogout}
              >
                <img
                  className="size-6 object-contain"
                  src="/images/icons/logout.png"
                  alt=""
                />
                <span className="2xl:text-16 text-14">Logout</span>{' '}
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 overflow-auto">
          <div className="flex-1 px-5 overflow-y-auto bg-white">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
