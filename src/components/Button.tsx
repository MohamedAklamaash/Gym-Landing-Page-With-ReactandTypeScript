import { SelectedPage } from "@/constants/Types"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
    children:React.ReactNode,
}

const Button = ({setSelectedPage,children}: Props) => {
  return (
    <div>
        <AnchorLink 
        className="bg-secondary-500 hover:bg-primary-500 hover:text-white rounded-md px-4 py-2 cursor-pointer"
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    </div>
  )
}

export default Button