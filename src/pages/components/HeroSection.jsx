import {useParams} from 'react-router-dom'
import { projects } from '../../constants'
import {styles} from '../../styles'
import {Button} from '@chakra-ui/react'

const HeroSection = () => {
    const { id } = useParams()
    const project = projects.find((project) => project.id === id);
  return (
    <div className={`flex w-[100vw] pt-12 md:pt-0 h-auto md:h-[100vh] items-center mt-10 justify-center overflow-hidden ${styles.bg}`}>
        <div className='flex flex-row gap-3'>
          <div className='flex md:px-16 px-auto flex-col w-[60vw] justify-center items-start'>
                <p className='md:text-xl text-sm'>{project.subtitle}<span className='text-[#cf6e4d] font-bold capitalize'>{project.highsubtitle}</span></p>
                <h1 className='flex md:text-7xl text-4xl flex-col '><span className='text-[#cf6e4d] font-bold capitalize'>{project.hightitle}</span>{project.title}</h1>
                <Button onClick={()=>window.open(project.url,'_blank')} color={'white'} bg={'orange'} className='my-5 '>
                    To {project.name}
                </Button>
                    <div className='flex flex-row gap-3'>
                    {
                        project.metrics.map(({ name, data }, index) => (
                            <div key={index} className='flex flex-col'>
                                <h3 className='text-[#cf6e4d] font-semibold md:text-xl text-sm'>{name}</h3>
                                <p className='text-neutral-900 md:text-sm text-xs'>{data}</p>
                            </div>
                        ))
                    }
                    </div>
            </div>
            <div className='relative hidden max-w-2xl md:flex'>
                <img src={project.bgimg} alt={project.id} width={1060} className='min-w-[170%]' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection