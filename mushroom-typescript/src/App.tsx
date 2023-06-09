import Navbar from "./scenes/navbar/Index";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import OurBoxes from "./scenes/ourBoxes";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <OurBoxes setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
      
    </div>
    
  );
}



export default App;
