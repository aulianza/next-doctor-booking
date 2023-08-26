"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { BsCalendar3 as CalendarIcon } from "react-icons/bs";
import { HiOutlineUsers as DoctorIcon } from "react-icons/hi";

interface MenuProps {
  name: string;
  icon: ReactNode;
  path: string;
}

const iconSize: number = 18;

const MENU: MenuProps[] = [
  {
    name: "Doctor List",
    icon: <DoctorIcon size={iconSize} />,
    path: "/",
  },
  {
    name: "Appointment",
    icon: <CalendarIcon size={iconSize} />,
    path: "/appointment",
  },
];

const AppBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] mx-auto">
      <div className="flex gap-1 justify-center border-t border-t-purple-100 rounded-t-3xl py-3 px-0 bg-white shadow-lg text-neutral-600 bg-white">
        {MENU.map((menu) => (
          <Link href={menu?.path} key={menu?.name}>
            <button
              className={clsx(
                "py-3 px-5 flex items-center cursor-pointer gap-2 rounded-full ",
                "hover:text-neutral-700",
                {
                  "bg-neutral-100 text-neutral-800 ": pathname === menu?.path,
                },
              )}
            >
              <div>{menu?.icon}</div>
              <div className="text-sm font-medium">{menu?.name}</div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
