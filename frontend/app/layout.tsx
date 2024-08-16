import type { Metadata } from "next";
import "./globals.css";
import CustomLayout from "./CustomLayout";
import { Provider } from "@/redux";

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
      <Provider>
        <CustomLayout>
          {children}
        </CustomLayout>
      </Provider>
    </html>
  );
}
