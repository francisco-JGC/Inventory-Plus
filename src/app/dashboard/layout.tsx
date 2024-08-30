import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Sidebar } from "@/components/sidebar";
import { MENU_ITEMS } from "@/constant/MENU_ITEMS";
import { SidebarItem } from "@/components/sidebar/item";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar>
            {
              MENU_ITEMS.map((item, index) => (
                <SidebarItem
                  key={index}
                  icon={<item.icon size={20} />}
                  text={item.label}
                />
              ))
            }
          </Sidebar>
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
