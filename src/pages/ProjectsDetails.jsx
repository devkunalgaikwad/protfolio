import HeroSection from './components/HeroSection'
import AboutProject from './components/AboutProject'
import { styles } from '../styles'
import PhotoGallary from './components/PhotoGallary'

const ProjectsDetails = () => {
  return (
    <div className={`${styles.bg}`}>
      <div className='top-10'>
        <HeroSection />
      </div>
      <AboutProject/>
      <PhotoGallary/>
    </div>
  )
}

export default ProjectsDetails