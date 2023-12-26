import { SectionWrapper } from '../../hoc'
import { styles } from '../../styles'
import {textVariant,fadeIn} from '../../utils/motion'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {useParams} from 'react-router-dom'
import { projects } from '../../constants'


const ServiceCard=({name,index,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max: 45,scale: 1,speed: 450,}} className='bg-[#F1916D] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const AboutProject = () => {
  const { id } = useParams()
  const project = projects.find((project) => project.id === id);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-[#555555] text-[17px] max-w-3xl leading-[30px]'>
        {project.description}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {project.tags.map((tag, index) => (
          <ServiceCard key={tag.name} icon={tag.icon} index={index} name={tag.name} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(AboutProject, 'about')