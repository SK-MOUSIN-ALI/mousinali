import Navbar from "../components/Navbar";
import "./globals.css";


export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
