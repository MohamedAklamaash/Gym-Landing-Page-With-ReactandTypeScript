import { SelectedPage } from "@/constants/Types"
import HeroSection from "./HeroSection"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <div className="">
      <HeroSection setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default Home