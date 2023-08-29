import React from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import {styles} from '../styles'
import {fadeIn,textVariant} from '../utils/motion'
import {testimonials} from '../constants'

const FeedbackCard=({index,testimonial, name, designation, company, image})=>{
  return(
    <motion.div variants={fadeIn('','spring', index*0.5,0.75)} className='bg-[#d6876a] p-10 rounded-3xl xs:w-[320px] w-full '>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company} 
            </p>
          </div>
          <img src={image} alt={`feedback by ${name}`} className='w-10 h-10 rounded-full object-cover'/>
        </div>
      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-[#ca6f4f] rounded-[20px]'>
      <div className={`${styles.padding} bg-[#e5967a] rounded-2xl min-h-[30px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Want other say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testismonial</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-12 pd-14 flex flex-wrap gap-7 py-5`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'')