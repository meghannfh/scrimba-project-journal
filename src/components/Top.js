import { BsCodeSlash } from 'react-icons/bs'

export default function Top(){
    return (
        <div className="bg-gray-800 flex rounded-t-lg gap-2 justify-center items-center text-white py-3">
            <BsCodeSlash size={24}/>
            <h1 className='text-xl'>Megfdev's Project Journal</h1>
        </div>
    )
}