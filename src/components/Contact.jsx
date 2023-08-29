import {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn} from '../utils/motion'

// IZLEqtmG-_fRdxvhe
// template_n3yffl8
// service_efhjnsx

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({name:'', email:'', message:'',})
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_efhjnsx',
        'template_fp7rd1w',
        {
          from_name: form.name,
          to_name: "Kunal Gaikwad",
          from_email: form.email,
          to_email: "Portfolio",
          message: form.message,
        },
        'IZLEqtmG-_fRdxvhe'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'between' ,'0.2',1)} className='flex-[0.75] bg-[#e5967a] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >
        <label className="flex flex-col">
          <span className='text-[#fae6e0] font-medium mb-4'>Your name</span>
          <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's is your name?" className='bg-[#ca6f4f] py-4 px-4 placeholder:text-[#d6876a] text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className="flex flex-col">
          <span className='text-[#fae6e0] font-medium mb-4'>Your email</span>
          <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's is your email?" className='bg-[#ca6f4f] py-4 px-4 placeholder:text-[#d6876a] text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className="flex flex-col">
          <span className='text-[#fae6e0] font-medium mb-4'>Your message</span>
          <textarea rows={'7'}  name='message' value={form.message} onChange={handleChange} placeholder="What's is your message?" className='bg-[#ca6f4f] py-4 px-4 placeholder:text-[#d6876a] text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <button type='submit' className='bg-[#ca6f4f] outline-none py-3 px-8 w-fit text-white font-bold shadow-sm shadow-primary rounded-xl'>
          {loading ? 'Sending...':'Send'}
        </button>
      </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'between' ,'0.2',1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')