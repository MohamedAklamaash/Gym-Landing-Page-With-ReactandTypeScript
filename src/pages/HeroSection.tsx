import { SelectedPage } from "@/constants/Types"
import HomePageText from "@/assets/HomePageText.png";
import SponserRedbull from "@/assets/SponsorRedBull.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { heroSectionData } from "@/constants/texts";
import Button from "@/components/Button";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
}

const HeroSection = ({setSelectedPage}: Props) => {
  return (
    <div>
        <section id="home" className="gap-16 mt-[6%] bg-gray-20 md:h-full py-10 md:pb-0">
            <div className="md:flex items-center justify-center">
                <div className=" flex flex-col items-center justify-center ">
                    <img src={HomePageText}  alt="text" className="md:opacity-10 z-10 "/>
                    <div className="max-lg:hidden absolute w-[30%] h-[27%]"> 
                       <h1 className="text-[100px] text-[#5D0101] font-montserrat font-extrabold  ">
                            EvoGym 
                        </h1>
                        <p className="text-lg text-[#5D0101] font-semibold font-montserrat ">Evolutionary Fitness</p>
                    </div>
                    <div className="md:mt-[100px]">
                        <p className="p-3  font-montserrat text-sm">
                            {heroSectionData.data}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button setSelectedPage={setSelectedPage}>
                            Join Now
                        </Button>
                        <a className="hover:text-primary-500 cursor-pointer" href={SelectedPage.ContactUs} onClick={()=>setSelectedPage(SelectedPage.ContactUs)}>
                        Learn More
                        </a>
                    </div>
                </div>
                <div className="">
                    <img src={HomePageGraphic} alt="HomePageGraphic"/>
                </div>
                <div className=" max-lg:hidden bg-primary-100">

                </div>
            </div>
        </section>
        <div className=" bg-primary-100 flex items-center justify-evenly h-20">
            <img src={SponserRedbull} alt="Sponser Redbull" />
            <img src={SponserForbes} alt="Sponser Forber"/>
            <img src={SponserFortune} alt="Sponser Fortune"/>
        </div>
    </div>
  )
}

export default HeroSection