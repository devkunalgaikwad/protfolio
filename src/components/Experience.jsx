import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {color, motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { experiences } from '../constants'
import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({experience})=>{
  return(
    <VerticalTimelineElement contentStyle={{background:'#e9967a',color:'#fff'}} contentArrowStyle={{borderRight :'7px solid #e9967a'}}  date={experience.date} icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }>
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-[#efdbd4] text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
        <ul className='mt-5 ml-5 list-disc space-y-2'>
          {experience.points.map((point,index)=>(
            <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What have done so far</p>
        <h2 className={styles.sectionHeadText}>Project Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')