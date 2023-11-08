import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/constants/Types";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-primary-100 mx-auto min-h-full w-5/6 py-16">
      <motion.div 
      className="justify-content mx-auto w-5/6 gap-16 md:flex"
        initial="hidden"
        whileInView="visible"
        transition={{duration:1,delay:0.7}}
        variants={{
        hidden:{
            opacity:0,
            y:-100
        },
        visible:{
            opacity:10,
            x:0,
            y:0
        }
        }}  
      >
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Elevate your fitness journey with EvoGym, where innovation meets exercise. Our purpose is to provide a nurturing environment that empowers individuals to achieve their fitness goals. Our state-of-the-art equipment and expert guidance ensure a holistic and fulfilling workout experience.
          </p>
          <p>© EvoGym. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col scroll-smooth">
          <h4 className="font-bold mb-4" >Links</h4>
          <a className="cursor-pointer" href={`#${SelectedPage.Home}`}>About Us</a>
          <a className="cursor-pointer my-5" href={`#${SelectedPage.OurClasses}`} >Services</a>
          <a className="cursor-pointer " href={`#${SelectedPage.ContactUs}`}>Contact</a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Get in touch for a personalized fitness plan.</p>
          <p>(+91) 6369202355</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
