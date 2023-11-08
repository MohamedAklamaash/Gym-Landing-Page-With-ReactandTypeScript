import { OurClassesType, SelectedPage } from "@/constants/Types"
import { motion } from "framer-motion"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import ClassesCard from "@/components/ClassesCard";

type Props = {
  setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
const classes:Array<OurClassesType> = [
  {
    name: "Weight Training Classes",
    description: "Build strength and endurance with our Weight Training Classes. Perfect for muscle development and overall health improvement.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Find inner peace and flexibility with our Yoga Classes. Enhance your mental and physical well-being in a calming atmosphere.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Tone your core and sculpt your abs in our Ab Core Classes. Strengthen your midsection and improve posture.",
    image:image3,
  },
  {
    name: "Adventure Classes",
    description: "Embark on thrilling adventures in our Adventure Classes. Experience adrenaline-packed activities and build teamwork skills.",
    image:image4,
  },
  {
    name: "Fitness Classes",
    description: "Boost your overall fitness in our diverse Fitness Classes. Work on cardio, strength, and flexibility for a well-rounded routine.",
    image:image5,
  },
  {
    name: "Training Classes",
    description: "Refine your techniques and skills in our Training Classes. Tailored sessions to improve performance and achieve personal goals.",
    image:image6,
  },
];


  return (
    <section id={SelectedPage.OurClasses} className=" p-5 bg-primary-100 mx-auto min-h-full basis-3/5 w-5/6">
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}

        >
        <motion.div
        className=" font-montserrat"
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.8,delay:0.3}}
        variants={{
          hidden:{
            opacity:0,
            x:-50,
            y:-100
          },
          visible:{
            opacity:10,
            x:0,
            y:0
          }
        }}
        >
          <h1 className="text-3xl text-center font-bold text-[#5D0101]">
            Our Classes
          </h1>
          <p className="p-3">
              At EvoGym, we believe in creating an immersive fitness experience that goes beyond conventional exercise routines. Our brand is synonymous with innovation and personalized training, catering to every individual's unique fitness journey. We prioritize not just physical transformation but overall well-being, offering a comprehensive range of state-of-the-art equipment, expert trainers, and a vibrant community. Our approach is to inspire a lifestyle where fitness is empowering and enjoyable, ensuring that every step taken within EvoGym is a step toward a healthier, happier you
          </p>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-nowrap">
            {classes.map((item: OurClassesType) => (
              <ClassesCard
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
        </motion.div>
    </section>
  )
}

export default OurClasses