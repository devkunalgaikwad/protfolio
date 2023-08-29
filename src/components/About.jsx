import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {textVariant,fadeIn} from '../utils/motion'
import { Tilt } from 'react-tilt'
import { SectionWrapper} from '../hoc'

const ServiceCard=({title,index,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max: 45,scale: 1,speed: 450,}} className='bg-[#F1916D] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-[#555555] text-[17px] max-w-3xl leading-[30px]'>
      Driven by an innate curiosity and an eye for aesthetics, I find immense joy in transforming complex ideas into intuitive and visually captivating web applications. My approach to design is deeply rooted in user-centered principles, ensuring that every project I undertake resonates with the intended audience.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")