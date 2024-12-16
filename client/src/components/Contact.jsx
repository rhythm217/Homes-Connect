import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Contact({listing}) {
    const [landlord,setLandlord]=useState(null);
    const [message,setMessage]=useState('');
    const onChange=(e)=>{
        setMessage(e.target.value);
    }
    const subject = "Query"
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    const mailtoLink = `mailto:${landlord.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
    };
    useEffect(()=>{

        const fetchLandlord=async()=>{

            try {

                const res=await fetch(`/api/user/${listing.userRef}`);
                const data=await res.json();
                setLandlord(data);
                
            } catch (error) {

                console.log(error);
                
            }
        }

        fetchLandlord();

    },[listing.userRef])
  return (
  <>

  {landlord && (

   <div className='flex flex-col gap-2 '>
    <p>Contact <span className='font-semibold'>{landlord.username}</span> for 
    
    <span> {listing.name.toLowerCase()}</span>
    </p>

    <textarea name="message" id="message" rows='2' value={message} onChange={onChange} placeholder='Enter your message here...'
    
    className='w-full border p-3 rounded-lg '
    
    ></textarea>

    <Link to={`mailto:${landlord.email}?subject=Regarding 
    ${listing.name} &body=${message}`}
    className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 '>
    Send Message

    </Link>
    {/* <div className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95' onClick={handleSubmit}>
        Send Message1
    </div> */}

    {/* <Mailto email={landlord.email} subject={subject} body={message}>
      Email Us
    </Mailto> */}

   </div>


  )}
  
  
  
  
  </>
  )
}

export default Contact
