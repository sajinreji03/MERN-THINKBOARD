import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
 
  useEffect(() => {
     const fetchnote = async () => {
      try{
         const res = await api.get(`/notes/${id}`);
         setNote(res.data);
      } catch(error){
        console.log("Error fetching note" ,error);
        toast.error("Failed to fetch note");
        
      } finally{
        setLoading(false)
      }

     }

     fetchnote();
  }, [id])

  const handleDelete = async () => {

  }
  
  if(loading){
    return(
      <div className="flex items-center justify-center min-h-screen bg-base-200">
       <LoaderIcon className="animate-spin size-10" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
          <Link to={"/"}  className=" btn btn-ghost">
           <ArrowLeftIcon className="w-5 h-5" />
           Back to Notes
          </Link>
           <button onClick={() => handleDelete } className=' btn btn-error btn-outline'>
              <Trash2Icon className='size-5' />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100"> 
            <div className="card-body">
              <div className="mb-4 form-control">
                  <label className="label">
                    <span className="text-lg label-text">Title</span>
                  </label>
                  <input type="text"
                  placeholder="Note Title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value})}
                  />
                </div>

                <div className="mb-4 form-control">
                  <label className="label">
                    <span className="text-lg label-text">Content</span>
                  </label>
                  <textarea type="text"
                  placeholder="Write your note here..."
                  className="h-32 textarea textarea-bordered"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value})}
                  /> 
                </div>
                
              
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage