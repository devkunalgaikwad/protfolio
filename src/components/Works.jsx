import {motion} from 'framer-motion'
import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import {fadeIn} from '../utils/motion'
import { Tilt } from 'react-tilt'
import {FiMoreVertical, FiExternalLink} from 'react-icons/fi'
import {Link} from '@chakra-ui/react'

const ProjectCard =({index, name, description, tags, image, source_code_link, url ,id})=>{
  return(
    <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <Tilt options={{max:45,scale:1,speed:450}} className={`${styles.heroSection} p-5 rounded-2xl sm:w-[360px] w-full`} >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-x-2'>
            <div onClick={()=>window.open(source_code_link,'_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' > 
              <img src={github} alt="GitHub" className='w-1/2 h-1/2 object-contain'/>
            </div>
              <div onClick={()=>window.open(url,'_blank')} className='black-gradient w-10 h-10 rounded-full text-white flex justify-center items-center cursor-pointer'>
                <FiExternalLink/>
              </div>
              <Link href={`/${id}`} className='black-gradient w-10 h-10 rounded-full text-white flex justify-center items-center cursor-pointer'>
                <FiMoreVertical color='white'/>
              </Link>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p className='mt-3 text-[rgb(85 85 85 / var(--tw-text-opacity))] text-[17px] max-w-3xl leading-[30px]' variants={fadeIn('','',0.1,1)}>
        In my portfolio, I@apos ve curated a collection of diverse projects that showcase my skills and expertise in web development and design. These projects reflect my ability to conceptualize, design, and develop interactive and user-centric web applications. Each project emphasizes a different set of skills and technologies, contributing to a well-rounded representation of my capabilities.
        </motion.p>
      </div>
      <div className='mt-20 h-auto flex flex-wrap justify-center gap-7'>
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work")