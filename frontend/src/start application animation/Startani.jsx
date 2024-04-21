import { useEffect, useState } from 'react';
import '../App.css';
const Startani = () => {
    const [bounce, setBounce] = useState('animate-bounce');
    const [none, setNone] = useState('block');
    useEffect(()=>{
        setTimeout(()=>{
            setBounce('animate-pulse')
        },3500)
        setTimeout(()=>{
            setNone('hidden')
        },6000)
    },[])
  return (
    <div className={`text-black ${bounce} ${none} overflow-hidden font-bold text-[4rem] flex items-center bg-white w-full absolute [text-shadow:0_0_0.2rem_black] top-[0] left-[] h-screen justify-center setBac`}>
      <p className='animation1'>C</p>
      <p className='animation2'>h</p>
      <p className='animation3'>a</p>
      <p className='animation4'>t</p>
      <p className='animation5'>t</p>
      <p className='animation6'>e</p>
      <p className='animation7'>r</p>
      <p className='animation8'>S</p>
      <p className='animation9'>p</p>
      <p className='animation10'>a</p>
      <p className='animation11'>r</p>
      <p className='animation12'>k</p>
      <p className='animation13'>l</p>
      <p className='animation14'>e</p>
    </div>
  )
}

export default Startani
