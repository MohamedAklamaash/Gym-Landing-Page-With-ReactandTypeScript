import { SelectedPage } from "@/constants/Types"
import HomePageText from "@/assets/HomePageText.png";
import SponserRedbull from "@/assets/SponsorRedBull.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { heroSectionData } from "@/constants/texts";
import Button from "@/components/Button";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
}

const HeroSection = ({setSelectedPage}: Props) => {
  return (
    <div className="">
        <section id="home" className="gap-16 max-md:mt-[16%] mt-[6%] bg-gray-20 md:h-full py-10 md:pb-0">
            <motion.div 
            className="md:flex items-center justify-center basis-3/5"
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
            >
                <motion.div 
                className=" flex flex-col items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.8}}
                transition={{duration:1,delay:0.2}}
                variants={{
                    hidden:{
                        opacity:0,
                        x:-50
                    },
                    visible:{
                        opacity:1,
                        x:0
                    }
                }}
                >
                    <img src={HomePageText}  alt="text" className="md:opacity-10 z-10 w-[70%] "/>
                    <div className="max-lg:hidden absolute w-[30%] h-[27%]"> 
                       <h1 className="text-[100px] text-[#5D0101] font-montserrat font-extrabold  ">
                            EvoGym 
                        </h1>
                        <p className="text-lg text-[#5D0101] font-semibold font-montserrat ">Evolutionary Fitness</p>
                    </div>
                    <div className="md:mt-[100px] text-center hover:text-primary-300 ">
                        <p className="p-3  font-montserrat text-lg">
                            {heroSectionData.data}
                        </p>
                    </div>
                    <motion.div 
                    className="flex gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2,duration:0.8}}
                    variants={{
                        hidden:{
                            opacity:0,
                            x:-50
                        },
                        visible:{
                            opacity:1,
                            x:0
                        }
                    }}
                    >
                        <Button setSelectedPage={setSelectedPage}>
                            Join Now
                        </Button>
                        <a className="hover:text-primary-500 cursor-pointer" href={SelectedPage.ContactUs} onClick={()=>setSelectedPage(SelectedPage.ContactUs)}>
                        Learn More
                        </a>
                    </motion.div>
                </motion.div>
                <div className="">
                    <img src={HomePageGraphic} alt="HomePageGraphic"/>
                </div>
            </motion.div>
        </section>
        <div className=" bg-primary-100 mt-[2%] flex items-center justify-evenly h-20">
            <img src={SponserRedbull} alt="Sponser Redbull" />
            <img src={SponserForbes} alt="Sponser Forber"/>
            <img src={SponserFortune} alt="Sponser Fortune"/>
        </div>
    </div>
  )
}

export default HeroSection