import { SelectedPage } from "@/constants/Types"
import HeroSection from "./HeroSection"
import BenifitsPage from "./BenifitsPage"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <div className="">
      <HeroSection setSelectedPage={setSelectedPage}/>
      <BenifitsPage setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default Home