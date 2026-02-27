import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Sidebar = () => {
    return (
        <aside className='bg-gray-950 text-gray-200 p-4 w-64'>
            <div className='flex-1'>
                <div className='border-3  border-gray-950 border-b-indigo-100'>
                    <p className='flex items-center justify-center'>FullStack</p>
                    <h1 className='text-6xl font-bold ml-2'>ROGER</h1>
                </div>

                <DotLottieReact className='mt-48'
                    src="https://lottie.host/80e3f17a-0b4b-440b-8626-e6cdeab88f3f/7WPbZuIwPc.lottie"
                    loop
                    autoplay
                />

                <div className='mt-68 flex gap-4 cursor-pointer items-center justify-center transition-transform duration-700 ease-in-out 
                hover:scale-110 mr-5'>
                    <Linkedin onClick={() => window.open('https://www.linkedin.com/in/roger-robert/', '_blank')} className='text-white' />
                    <Github onClick={() => window.open('https://www.github.com/roger-robertt', '_blank')} className='text-white' />
                    <Instagram onClick={() => window.open('https://www.instagram.com/roger_basss/', '_blank')} className='text-white' />
                    <Mail onClick={() => window.open('mailto:roberrobertsouzadossantos@gmail.com', '_blank')} className='text-white' />
                </div>

            </div>
        </aside>
    )
}

export default Sidebar;




