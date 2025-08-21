"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from 'next/image';
import logo from "../../public/logo.svg";
import hamburgerTwo from "../../public/hamburger-two.svg";
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

function DashNav() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false)

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setActiveItemId(id);
  };

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <nav className="hidden xl:px-6 xl:py-[18px] xl:flex xl:items-center xl:justify-between xl:w-[75vw]">
        <div className="w-2/3">
          <form>
            <div className="relative max-w-80">
              <input
                type="search"
                name="Search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="placeholder:text-[#969696] border border-[#EAEAEA] w-full pl-12 pr-4 py-3 rounded-[12px]"
              />
              <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 size-5 text-[#969696]" />
            </div>
          </form>
        </div>

        <div className="flex items-center w-1/3 gap-x-5">
          <div className="size-10 rounded-full bg-[#EAEAEA] flex items-center justify-center">
            <CiBellOn className="size-5 text-[#323232]" />
          </div>
          <div className="flex justify-between items-center gap-x-5">
            <div className="w-[2px] h-6 rounded-[11px] bg-[#EAEAEA]"></div>
            <small className="text-[#323232] text-sm">Today</small>
            <FiChevronDown className="size-5 text-[#323232]" />
          </div>
          <button className="*:text-white text-white rounded-[12px] bg-[#417BEB] p-2.5 flex gap-x-2 items-center *:size-5">
            <MdOutlineFileDownload />
            Export
            <FiChevronDown />
          </button>
        </div>
      </nav>
      {/* Mobile nav */}
      <nav className="xl:hidden w-screen p-4 flex flex-col relative">
        <div className="w-full flex justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Image src={hamburgerTwo} alt="menu" onClick={() => handleMenu()} />
        </div>
        <form className="xl:hidden mt-3">
          <div className="relative max-w-80">
            <input
              type="search"
              name="Search"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="placeholder:text-[#969696] border border-[#EAEAEA] w-full pl-12 pr-4 py-3 rounded-[12px]"
            />
            <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 size-5 text-[#969696]" />
          </div>
        </form>
        {menu && (
          <>
            <div className="xl:hidden mt-[30px] p-[10px] text-base flex flex-col gap-y-6 absolute -top-5 right-0 bg-white w-full h-screen">
              <IoMdCloseCircleOutline
                className="size-6 text-[#969696] mx-auto"
                onClick={() => handleMenu()}
              />
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
                                  const isActiveSub =
                                    subItem.id === activeItemId;
                                  return (
                                    <div
                                      key={subItem.id}
                                      onClick={() => handleClick(subItem.id)}
                                      className="flex gap-x-3 items-center cursor-pointer mb-2 group py-3 px-5"
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
                                        className={`px-5 py-3 rounded text-sm ${
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
              <div className="flex flex-col justify-center w-full items-center gap-y-10">
                <div className="size-10 rounded-full bg-[#EAEAEA] flex items-center justify-center">
                  <CiBellOn className="size-5 text-[#323232]" />
                </div>
                <div className="flex justify-between items-center gap-x-5">
                  <div className="hidden w-[2px] h-6 rounded-[11px] bg-[#EAEAEA]"></div>
                  <small className="text-[#323232] text-sm">Today</small>
                  <FiChevronDown className="size-5 text-[#323232]" />
                </div>
                <button className="*:text-white text-white rounded-[12px] bg-[#417BEB] p-2.5 flex gap-x-2 items-center *:size-5">
                  <MdOutlineFileDownload />
                  Export
                  <FiChevronDown />
                </button>
              </div>
              <div className="bg-white px-5 py-4 mt-10 flex items-center justify-between">
                <div className="size-12 rounded-[50%] bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="text-[#323232]">Ade John</div>
                  <div className="text-[#969696]">adejohn@gmail.com</div>
                </div>
                <div>
                  <FiChevronDown className="text-[#323232]" />
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default DashNav;
