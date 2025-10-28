import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import toast from 'react-hot-toast';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';

const HomePage = () => {
 const [isRateLimited, setIsRateLimited] = useState(false);
 const [notes, setNotes] = useState([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  const fetchNotes = async () => {
    try{
      const res = await api.get("/notes");
      console.log(res.data);
      setNotes(res.data)
      setIsRateLimited(false)
     
    } catch (error){
      console.log("Error Fetching Notes");
      console.log(error);
      if(error.response?.status === 429) {
      setIsRateLimited(true);
      } else{
        toast.error("Failed to fetch notes");
      }
    } finally{
      setLoading(false)
    }
  };
  fetchNotes()
 }, [])
 
  return (
    <div className='min-h-screen'>
        <Navbar />
        {isRateLimited && <RateLimitedUI />}
        
        <div className='p-4 mx-auto mt-6 max-w-7xl'>
          {loading && <div className='py-10 text-center text-primary'>Loading notes...</div>}

          {notes.length > 0 && !isRateLimited && (
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
              
            </div>
          )}
          
        </div>
        
    </div>
  )
}

export default HomePage