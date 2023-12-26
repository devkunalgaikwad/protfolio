import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import {useParams} from 'react-router-dom'
import { projects } from '../../constants';

const Gallery = () => {
    const { id } = useParams()
  const project = projects.find((project) => project.id === id);
  const shuffledImages = [...project.photoGallary].sort(() => Math.random() - 0.5);
  return (
    <div className='p-2'>
        <ResponsiveMasonry columnsCountBreakPoints={{350:2,750:3,900:4}}>
            <Masonry gutter='20px'>
                {
                    shuffledImages.map((img,index)=>(
                        <img src={img} key={index} style={{display : 'block', width : '100%', borderRadius : '10px'}} alt='unable to load image'/>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Gallery