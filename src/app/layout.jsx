import { Header } from "@/components/Header/Header";
import "./globals.css";
import { ContextProvider } from "@/Context/useContext";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <div className="container mx-auto px-5 lg:px-20 relative">
            <Header />
            <main className="w-full">{children}</main>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
};
export default RootLayout;
