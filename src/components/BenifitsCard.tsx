
import { BenifitsData } from "@/constants/Types"
import { motion } from "framer-motion"
const BenifitsCard = ({description,icon,title}: BenifitsData) => {
  return (
    <motion.div
    whileTap={{scale:0.8}}
    whileHover={{scale:1.2}}

    >
        <div className="border-[0.3px] py-6 px-10 rounded-xl flex flex-col items-center justify-center  ">
            <div className="mb-3 rounded-full p-4 bg-primary-300 text-white">
                {icon}
            </div>
            <h1 className="font-montserrat font-bold text-primary-500 ">{title}</h1>
            <div className="mt-3 font-montserrat ">
                {description}
            </div>
        </div>
    </motion.div>
  )
}

export default BenifitsCard