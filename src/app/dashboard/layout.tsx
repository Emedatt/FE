import { Geist } from "next/font/google";
import DashNav from "@/_components/DashNav";
import DashSideNav from "@/_components/DashSideNav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${geistSans.variable} antialiased flex max-w-[1440px] mx-auto`}
    >
      <DashSideNav />
      <div>
        <DashNav />
        <div className="row-span-10 col-span-9">{children}</div>
      </div>
    </div>
  );}
