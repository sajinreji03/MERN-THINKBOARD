import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className='border-b border-base-content/10 bg-base-300 '>
      <div className='p-4 mx-auto max-w-7xl '>
       <div className='flex items-center justify-between'>
        <h1 className='font-mono text-4xl font-bold tracking-tighter text-primary'>
          ThinkBoard </h1>
        <div className='flex items-center gap-4'>
            <Link to={"/create"} className='btn btn-primary'>
            <PlusIcon className='size-5' />
            <span>New Note</span>
            </Link>
        </div>
       </div>
      </div>
    </header>
  )
}

export default Navbar