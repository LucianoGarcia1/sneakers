import { Header } from "@/components/Header/Header";
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-5 lg:px-20 relative">
          <Header />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
