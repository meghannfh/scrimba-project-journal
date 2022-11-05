import { VscGithub } from 'react-icons/vsc'
import { FiTwitter } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

export default function Bottom(){
    return (
        <div className="flex gap-2 justify-center pt-4">
                <button className='hover:bg-pink-500 hover:text-white cursor-pointer bg-gray-900 text-pink-500 p-2 rounded-full shadow-md'>
                <a href="https://github.com/meghannfh" target="_blank" rel="noreferrer"><VscGithub size={30}/></a>
                </button>

                <button className='hover:bg-pink-500 hover:text-white cursor-pointer bg-gray-900 text-pink-500 p-2 rounded-full shadow-md'>
                <a href="https://mobile.twitter.com/megfdev" target="_blank" rel="noreferrer"><FiTwitter size={30}/></a>
                </button>

                <button className='hover:bg-pink-500 hover:text-white cursor-pointer bg-gray-900 text-pink-500 p-2 rounded-full shadow-md'>
                <a href="https://www.linkedin.com/in/meghannfh/" target="_blank" rel="noreferrer"><FiLinkedin size={30}/></a>
                </button>
            </div>
    )
}