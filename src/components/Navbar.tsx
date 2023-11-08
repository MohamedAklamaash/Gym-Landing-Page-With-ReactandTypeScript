import { useState } from "react";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Links from "./Links";
import { SelectedPage } from "@/constants/Types";
import Button from "./Button";
type Props = {
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage)=>void,
  isTopOfPage:boolean
}

const Navbar = ({selectedPage,setSelectedPage,isTopOfPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setisMenuToggled] = useState<boolean>(false);
  const navBg = isTopOfPage?"":"bg-primary-500 drop-shadow"
  return (
    <div>
      <div className={`${navBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={` ${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-16 gap-16`}>
            <img src={Logo} alt="logo"/>
          </div>
          <div className={` max-lg:hidden ${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Links page="Benifits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Links page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p className="cursor-pointer">
                Sign In
              </p>
              <Button setSelectedPage={setSelectedPage}>
                  Become a Member
              </Button>
            </div>
          </div>
          <div className="lg:hidden">
              <Bars3Icon 
              className="w-8 h-8 p-1 text-4xl text-white bg-secondary-500 rounded-full" 
              onClick={()=>{
                setisMenuToggled(!isMenuToggled)
              }} />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-primary-100">
              <div className="flex justify-end p-12">
                <XMarkIcon
                onClick={()=>setisMenuToggled(!isMenuToggled)} 
                className="w-6 h-6 text-gray-400 cursor-pointer"
                />
              </div>
              <div className="flex flex-col ml-[20%] gap-10 text-2xl">
                <Links page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Links page="Benifits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Links page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Links page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>                
              </div>
            </div>    
        )}
      </div>
    </div>
  )
}

export default Navbar