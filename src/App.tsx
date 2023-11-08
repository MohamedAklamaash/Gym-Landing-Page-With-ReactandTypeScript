import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { SelectedPage } from "./constants/Types";
import Footer from "./components/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
        setIsTopOfPage(true); // Corrected the state setter function
      } else {
        setIsTopOfPage(false); // Ensure setIsTopOfPage sets the boolean value
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Change 'addEventListener' to 'removeEventListener'
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <div>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <Home setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  );
};

export default App;
