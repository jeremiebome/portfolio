import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <span className="text-xl font-bold">JE-ASYNC</span>
        </div>
        <div className='flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
        </div>
    </nav>
  )
}
