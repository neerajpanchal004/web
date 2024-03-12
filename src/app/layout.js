import { Inter } from "next/font/google";
import "./globals.css";
import Contextapi from "./context/Contextapi";
// import { Chakraprovider } from "./components/ChakkraProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Chakraprovider> */}
          <Contextapi>
            <Header/>
            {children}
            <Footer/>
          </Contextapi>
        {/* </Chakraprovider> */}
      </body>
    </html>
  );
}
