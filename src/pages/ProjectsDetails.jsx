import HeroSection from './components/HeroSection'
import AboutProject from './components/AboutProject'
import { styles } from '../styles'
import PhotoGallary from './components/PhotoGallary'

const ProjectsDetails = () => {
  return (
    <div className={`${styles.bg}`}>
      <HeroSection />
      <AboutProject/>
      <PhotoGallary/>
    </div>
  )
}

export default ProjectsDetails