"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import hamburgerTwo from "../../public/hamburger-two.svg";
import { FiChevronDown } from "react-icons/fi";
import DashboardIcon from "./icons/DashboardIcon";
import AppointmentsIcon from "./icons/AppointmentsIcon";
import ConsultationsIcon from "./icons/ConsultationsIcon";
import HealthRecordsIcon from "./icons/HealthRecordsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import ProfileIcon from "./icons/ProfileIcon";
import BillingsAndPaymentsIcon from "./icons/BillingsAndPaymentsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import HelpAndSupportIcon from "./icons/HelpAndSupportIcon";
import SelectDashBoardItemIcon from "./icons/SelectDashBoardItemIcon";
import Link from 'next/link';
const data = [
  {
    id: 1,
    title: "Main Menu",
    subOne: [
      {
        id: 101,
        text: "Dashboard",
        icon: DashboardIcon,
        subTwo: [
          { id: 10101, text: "Patient Dashboard" },
          { id: 10102, text: "Doctor Dashboard" },
          { id: 10103, text: "Admin Dashboard" },
        ],
      },
      { id: 102, text: "Appointments", icon: AppointmentsIcon },
      { id: 103, text: "Consultations", icon: ConsultationsIcon },
      { id: 104, text: "Health Records", icon: HealthRecordsIcon },
      { id: 105, text: "Messages", icon: MessagesIcon },
    ],
  },
  {
    id: 2,
    title: "Other Menu",
    subOne: [
      { id: 201, text: "Profile", icon: ProfileIcon },
      { id: 202, text: "Billings & Payments", icon: BillingsAndPaymentsIcon },
    ],
  },
  {
    id: 3,
    title: "Help & Settings",
    subOne: [
      { id: 301, text: "Settings", icon: SettingsIcon },
      { id: 302, text: "Help & Support", icon: HelpAndSupportIcon },
    ],
  },
];

function DashSideNav() {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <aside className="hidden xl:block xl:pt-[18px] xl:px-[14px] xl:w-[300px] xl:border-3 xl:border-[#0000000D]">
      <div className="rounded-[24px] bg-[#F8F8F8] col-span-2 row-span-10 pt-[9px] px-[10px] pb-100">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Image src={hamburgerTwo} alt="menu" />
        </div>

        <div className="mt-[30px] p-[10px] text-base flex flex-col gap-y-6">
          {data.map((section) => (
            <div key={section.id}>
              <small className="text-[#969696] block mb-2">
                {section.title}
              </small>
              <div className="flex flex-col gap-y-[16px]">
                {section.subOne.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === activeItemId;

                  if (item.id === 101) {
                    return (
                      <div key={item.id}>
                        <div
                          onClick={() => {
                            setIsDashboardOpen(!isDashboardOpen);
                            handleClick(item.id);
                          }}
                          className={`flex items-center justify-between px-5 py-3 rounded-[8px] cursor-pointer transition-colors duration-100 group
                            ${
                              isActive
                                ? "bg-[#417BEB] text-white font-semibold"
                                : "text-[#323232] hover:bg-blue-400 hover:text-white hover:font-semibold"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 stroke-current group-hover:stroke-white" />
                            <p>{item.text}</p>
                          </div>
                          <FiChevronDown
                            className={`transition-transform duration-200 ${
                              isDashboardOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {isDashboardOpen && (
                          <div className="mt-2 ml-6">
                            {item.subTwo?.map((subItem) => {
                              const isActiveSub = subItem.id === activeItemId;
                              return (
                                <div
                                  key={subItem.id}
                                  onClick={() => handleClick(subItem.id)}
                                  className="flex gap-x-3 items-center cursor-pointer mb-2 group py-3 px-5 w-full"
                                >
                                  <div className="relative">
                                    <SelectDashBoardItemIcon
                                      className={`${
                                        isActiveSub
                                          ? "fill-[#417BEB]"
                                          : "fill-gray-400"
                                      }`}
                                    />
                                    <div
                                      className={`${
                                        isActiveSub
                                          ? "inline w-2 h-2 bg-[#417BEB] rounded-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                          : "hidden"
                                      }`}
                                    ></div>
                                  </div>
                                  <span
                                    className={`px-5 py-3 rounded text-sm w-[200px] ${
                                      isActiveSub
                                        ? "bg-[#E3F2FD] text-[#417BEB]"
                                        : "text-[#323232] hover:bg-gray-200"
                                    }`}
                                  >
                                    {subItem.text}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={`flex items-center gap-3 px-5 py-3 rounded-[8px] transition-colors duration-100 group cursor-pointer
                        ${
                          isActive
                            ? "bg-[#417BEB] text-white font-semibold"
                            : "text-[#323232] hover:bg-blue-400 hover:text-white hover:font-semibold"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 stroke-current group-hover:stroke-white" />
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2 row-span-2 bg-white px-5 py-4 mt-10 flex items-center justify-between">
        <div className="size-12 rounded-[50%] bg-gray-300"></div>
        <div className="flex flex-col">
          <div className="text-[#323232]">Ade John</div>
          <div className="text-[#969696]">adejohn@gmail.com</div>
        </div>
        <div>
          <FiChevronDown className="text-[#323232]" />
        </div>
      </div>
    </aside>
  );
}

export default DashSideNav;
