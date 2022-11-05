import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3 } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { GrJava } from 'react-icons/gr'
// import photo from '../images/image.jpeg'

export default function Card({item}){
    const contributors = item.contributors
    const contributor = contributors.map(person => 
        <h3 key={person} className='font-semibold'>
            {person}
        </h3>)

    const tools = item.tools
    const tool = tools.map(item => 
        item === 'html' ? <h3 key={item}><AiOutlineHtml5 /></h3> :
        item === 'css3' ? <h3 key={item}><FaCss3 /></h3> :
        item === 'js' ? <h3 key={item}><DiJavascript1 /></h3> :
        item === 'java' ? <h3 key={item}><GrJava /></h3> :
        item === 'nodejs' ? <h3 key={item}><FaNodeJs /></h3> :
        item === 'mongodb' ? <h3 key={item}><SiMongodb /></h3> :
        <h3 key={item}>{item.toUpperCase()}</h3>
    )

    return (
        <div className="flex gap-4 p-6 bg-white min-w-min snap-center">
            <div className='w-72 rounded-md overflow-hidden relative'>
                <img src={item.imageUrl} alt={"screenshot of" + item.title + "project"} className='object-cover h-full w-full'/>
                <a href={item.repoUrl} className="uppercase absolute top-0 right-0 m-1 bg-pink-500 py-2 px-3 rounded-full text-white hover:text-pink-500 hover:bg-white hover:cursor-pointer" target="_blank" rel="noreferrer">view repo</a>
            </div>
            <div className='w-96'>
                <div className="flex items-center gap-3 my-2">
                    {tool}
                    {/* <h2 className="uppercase">{item.tools}</h2> */}
                    <a href={item.demoUrl} className="text-gray-400 hover:text-pink-500" target="_blank" rel="noreferrer">View Demo</a>
                </div>
                <h1 className='text-6xl mb-2'>{item.title}</h1>
                <p className='mb-6'>
                    {item.description}
                </p>
                <div className='flex gap-2'>
                by {contributor}
                </div>
            </div>
        </div>
    )
}