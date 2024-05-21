"use client"
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const Navbar = () => {
  const menuList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    {
      id: 3,
      name: "Departments",
    },
    { id: 4, name: "Contact Us", path: "/contact" },
    { id: 5, name: "Branches", path: "/branches" },
    { id: 6, name: "Login", path: "/login" },
    { id: 7, name: "Signup", path: "/signup" },
    { id: 8, name: "Students", path: "/students" },
  ];

  return (
    <NavigationMenu className="fixed w-full mt-0">
      <div className="flex items-center justify-end mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="logo" style={{ width: "40px", height: "40px" }} />
            <div className="ml-2">
              <h2 className="hidden xl:block text-black text-lg font-bold">Shri Vishnu Engineering College For Women</h2>
              <h3 className="hidden xl:block text-black text-md">Bhimavaram, Andhra Pradesh</h3>
            </div>
          </div>
          <div >
            <div className="ml-4 lg:ml-48 flex space-x-4">
              <NavigationMenuList>
                {menuList.map((menuItem) => (
                  <NavigationMenuItem key={menuItem.id}>
                    {menuItem.name === "Departments" ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger>{menuItem.name}</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Computer Science</DropdownMenuItem>
                          <DropdownMenuItem>Electrical Engineering</DropdownMenuItem>
                          <DropdownMenuItem>Mechanical Engineering</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <NavigationMenuLink href={menuItem.path}>{menuItem.name}</NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
          </div>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navbar;