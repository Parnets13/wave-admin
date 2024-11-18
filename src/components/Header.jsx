import React, { useState } from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Bell, Mail } from 'lucide-react';
import avatar from './../assets/avatar-16.jpg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Separator } from './ui/separator';



const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div className='flex items-center py-2 border-b border-gray-200 w-full justify-between  z-50 my-3 shadow-md px-3 sticky top-1 bg-white'>
      <div className='flex gap-1 items-center '>
        <SidebarTrigger />
      </div>
      <div className='flex items-center gap-2'>
        {/* {
          darkMode ? <SunMoon onClick={handleDarkMode} /> : <Moon onClick={handleDarkMode} />
        } */}
        {/* <Bell className='w-12' /> */}

         <Popover>
          <PopoverTrigger>
            <Bell />
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-4">
              <p className="flex gap-2 justify-start cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-light">
                A new booking for Home cleaning & maintenance on 15th Nov 2024
                has been successfully confirmed by provider John Doe. Booking ID: 276398
                </span>
              </p>
              <Separator />
              <p className="flex gap-2 justify-start cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-light">
                  A new booking for Home cleaning & maintenance on 15th Nov 2024
                  has been successfully confirmed by provider John Doe. Booking ID: 276398
                </span>
              </p>
              <Separator />
              <p className="flex gap-2 cursor-pointer hover:bg-gray-50 p-1">
                <Mail className="size-12" />
                <span className="text-[12px] font-normal ">
                  Booking ID: 276398 - provider John Doe has successfully completed the service.
                </span>
              </p>
              <Separator />
              <Link
                to="/notification"
                className="flex justify-center items-center"
              >
                {" "}
                <span className="text-center text-gray-500 text-sm hover:font-bold hover:text-black">
                  View All
                </span>
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={avatar} alt="" className="size-12 rounded-full" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Notification</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Header