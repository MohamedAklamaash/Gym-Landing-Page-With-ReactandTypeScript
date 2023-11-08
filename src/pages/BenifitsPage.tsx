import BenifitsCard from "@/components/BenifitsCard";
import { BenifitsData, SelectedPage } from "@/constants/Types"
import { benifitsPageData } from "@/constants/texts";
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import { useState,useEffect } from "react";
import BenifitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Button from "@/components/Button";
type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
}

const BenifitsPage = ({setSelectedPage}: Props) => {

  const data:BenifitsData[] = [
    {
        description:"This premier gym showcases the pinnacle of fitness technology and design. With a comprehensive range of high-performance equipment, smart training systems, and dedicated areas for various exercise regimens, it offers a luxurious, invigorating space for all fitness enthusiasts to pursue their goals with ease and innovation.",
        icon:<HomeModernIcon className="w-6 h-6 " />,
        title:"State of the Art Facilities",
    },
    {
        description:"Our facility offers an array of diverse classes, catering to various fitness levels and preferences. With over a hundred specialized sessions, from high-intensity interval training to yoga, dance, and martial arts, members can explore and excel in their fitness journey through an extensive and inclusive class schedule.",
        icon:<UserGroupIcon className="w-6 h-6"/>,
        title:"100's of Diverse Classes"
    },
    {
        description:"Our gym is home to a team of expert trainers, each specialized in diverse fitness disciplines. From seasoned professionals to elite athletes, our trainers offer personalized guidance, tailored programs, and invaluable expertise to help members achieve their fitness ambitions at the highest level.",
        icon:<AcademicCapIcon className="w-6 h-6"/>,
        title:"Expert and Pro Trainers"
    }
]
  const [enteredViewPort, setenteredViewPort] = useState<boolean>(false);

  const handleEnteringComponenent = ()=>{
    setSelectedPage(SelectedPage.Benifits);
  }

  useEffect(()=>{
    setenteredViewPort(true)
  },[setSelectedPage]);

  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                    onViewportEnter={handleEnteringComponenent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.8}}
                    transition={{duration:0.8,delay:0.2}}
                    variants={{
                        hidden:{
                            opacity:0,
                            x:-100,
                        },
                        visible:{
                            opacity:1,
                            x:0
                        }
                    }}
                    onViewportLeave={()=>setenteredViewPort(false)}
                    >
                        <h1 className="basis-3/5 font-montserrat text-[#5D0101] text-3xl font-extrabold ">More Than Just A GYM</h1>
                        <p className="mt-6 my-6">{benifitsPageData.p1}</p>
                    </motion.div>
                    <motion.div 
                    className="md:flex items-center justify-evenly gap-10 shadow-md "
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay:1,duration:0.5}}
                    variants={{
                        hidden:{
                            opacity:0,
                            x:-50,
                        },
                        visible:{
                            opacity:1,
                            x:0
                        }
                    }}
                    >
                        {
                            data.map((d)=>{
                                return(
                                    <BenifitsCard title={d.title} description={d.description} icon={d.icon}/>
                                )
                            })
                        }
            </motion.div>
            <div className="md:flex items-center justify-center mt-[3%]">
                <div>
                    <img className="w-60/7 h-1/2" src={BenifitsPageGraphic} width={3000}/>
                </div>
                <div className="flex flex-col">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{delay:0.4,duration:0.8}}
                        variants={{
                            hidden:{
                                opacity:0.2,
                                y:-80
                            },
                            visible:{
                                opacity:1,
                                y:0
                            }
                        }}                    
                    >
                        <h1 className=" font-montserrat text-xl"> MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500 text-center">FIT</span> </h1>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay:0.4,duration:0.8}}
                    variants={{
                        hidden:{
                            opacity:0.2,
                            x:-40
                        },
                        visible:{
                            opacity:1,
                            x:0
                        }
                    }}
                    >
                        <p className="max-md:hidden my-5">
                            Are you ready to transform your life through fitness? Welcome to the world of endless possibilities where dedication meets strength and determination fuels success. At our gym, we believe in sculpting not only bodies but also lifestyles. With state-of-the-art equipment and expert trainers, we're here to guide you on your fitness journey.
                            Whether you're aiming to build muscles, shed extra pounds, or simply improve your overall well-being, we've got the tools and support you need to make it happen. From high-intensity interval training to calming yoga sessions, our diverse range of classes caters to every fitness goal and preference.
                            Join a community where sweat becomes the ink that writes stories of resilience and endurance. Challenge yourself, break boundaries, and celebrate victories—big and small. Your commitment to health starts here.
                        </p>
                        <p className="mb-5">
                            Embrace the power of regular exercise – it's not just about physical strength, it's a mental and emotional journey. Exercise isn't merely a task; it's a gift you give to yourself, allowing you to push limits, defy odds, and discover your inner champion. It's where stress gets left on the mat, confidence gets built with every repetition, and determination becomes the heartbeat of your routine.
                            Our gym isn't just a place; it's a sanctuary where excuses fade, and goals are achieved. It's not about perfection; it's about progress. So, lace up those shoes, grab that towel, and let's sweat for the stronger, better you!
                        </p>
                        <Button setSelectedPage={setSelectedPage}>
                            Join Now
                        </Button>
                    </motion.div>
                </div>
            </div>
    </section >
  )
}

export default BenifitsPage