import {About,Contact,Experience,Feedbacks,Hero,Tech,Works,StarsCanvas} from './components'
import {styles} from './styles'
const App=()=> {
  return (
      <div className={`${styles.bg} relative z-0 `}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero/>
        </div>
        <About />
        <Experience/>
        <Works/>
        <Tech/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
  )
}

export default App;

