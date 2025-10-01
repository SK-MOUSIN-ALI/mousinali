import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import "./globals.css";
import LenisProvider from "./providers/LenisProvider";

export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <LenisProvider>
          <Cursor />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
