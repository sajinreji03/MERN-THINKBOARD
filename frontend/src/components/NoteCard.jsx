import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'

const NoteCard = ({note}) => {
  return (
    <Link to={`/note/${note._id}`} className='transition-all duration-200 border-x-1 border-y-4 border-t-4 border-solid border-[#00ff4c] card bg-base-100 hover:shadow-lg'>
        
        <div className='card-body'>
            <h3 className='text-base-content card-title'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='items-center justify-between mt-4 card-actions '>
                <span className='text-sm text-base-content/60'>
                    {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4' />
                    <button className='btn btn-ghost btn-xs text-error'>
                        <Trash2Icon className='size-4' />
                    </button>
                    
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard