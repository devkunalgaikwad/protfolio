import {motion} from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { styles } from '../../styles'
import { fadeIn, textVariant } from '../../utils/motion'
import Gallery from './Gallery'

const PhotoGallary = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubText}>Actual Images of Actual Project</h2>
        <p className={styles.sectionHeadText}>Photo Gallery</p>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-[#555555] text-[17px] max-w-3xl leading-[30px]'>
        <p >Images can be differ in actual</p>
      </motion.p>
      <Gallery/>
    </>
  )
}

export default SectionWrapper(PhotoGallary)