import { SelectedPage } from "@/constants/Types"
import {motion} from "framer-motion";
import contactUsPagePic from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const ContactUsPage = ({setSelectedPage}: Props) => {
    
  return (
    <section id={SelectedPage.ContactUs} className="mt-10">
        <motion.div 
        onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
        className="p-4"
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.8,delay:0.3}}
        variants={{
          hidden:{
            opacity:0,
            x:50,
            y:100
          },
          visible:{
            opacity:10,
            x:0,
            y:0
          }
        }}
        >
            <h1 className="text-center font-bold font-montserrat text-4xl">
                Join Now to Get in <span className="text-primary-500">Shape</span>
            </h1>
            <p className="mt-[4%] text-lg font-montserrat">
                Welcome to EvoGym, where fitness transcends the ordinary and becomes an extraordinary journey. At EvoGym, we redefine the boundaries of wellness by offering more than just a space to work out – it's a sanctuary for body, mind, and soul. Our state-of-the-art facilities, curated programs, and a community pulsating with motivation and support are designed to transform the way you perceive fitness. We invite you to join us on this exhilarating path to self-discovery and empowerment. Contact us today to be a part of a fitness revolution where every step leads not just to a healthier body, but to a life energized with vitality and positivity
            </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{duration:1,delay:0.7}}
            variants={{
            hidden:{
                opacity:0,
                x:-100,
            },
            visible:{
                opacity:10,
                x:0,
                y:0
            }
            }}        
        >
            <div className="flex flex-col items-center justify-center gap-10  text-white p-6">
                <input type="text" placeholder="Name"  className="bg-primary-300 p-4 w-5/6 rounded-full"/>
                <input type="email" placeholder="Email" className="bg-primary-300 p-4 w-5/6 rounded-full"/>
                <textarea className="w-[60%] h-[300px] bg-primary-300 p-4 " placeholder="Message" />
            </div>
            <div className="flex md:justify-end max-md:justify-start ml-10 items-center mr-10 mb-10">
                <button 
                className="bg-secondary-500 hover:bg-primary-500 hover:text-white  py-2 rounded-md px-10 cursor-pointer"
                onClick={()=>{
                    alert("This is a UI focused project.Show this button is dummy here")
                }}
                >
                    Join Now
                </button>
            </div>
            <div className="md:hidden flex justify-center ">
                <img src={contactUsPagePic} alt="Pic"/>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUsPage