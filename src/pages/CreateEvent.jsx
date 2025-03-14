import { useEffect,useState } from "react"
import { data } from "react-router-dom";

function CreateEvent() {

  const [formData,setFormData] = useState({
    title:"",
    description:"",
    date:"",
    location:""
  });

  const [event,setEvent] = useState([]);

  const handleChangeInput = (e) => {
    setFormData({...formData , [e.target.name]: e.target.value});
  }

  useEffect(() => {
    const localEvent = JSON.parse(localStorage.getItem("event")) || [];
    setEvent(localEvent); 
  },[]);
  
  const submitForm = (e) => {
    e.preventDefault();
    if(!formData.title || !formData.description || ! formData.date || !formData.location){
      alert("Please fill all required fields")
      return;
    }
    else{
      event.push(formData);
      console.log(event)
      localStorage.setItem("event", JSON.stringify(event));

      setFormData({
        title:"",
        description:"",
        date:"",
        location:""
      })
    }
    
  }

  return (
    <div className="border-2 border-[#ff9696] w-[70%] mx-auto rounded-md p-3
    flex items-center flex-col shadow-lg">
        <h2 className="text-2xl font-semibold mb-5">New Event</h2>
        <form onSubmit={submitForm} >
        <div className="flex items-center my-4">
          <label htmlFor="title" className="mr-12 block text-sm font-medium">title: </label>
          <input type="text" name="title" className="p-2 rounded-md bg-[#fcebda]
          border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]" placeholder="enter a title" 
            value={formData.title} onChange={handleChangeInput} />
        </div>
        <div className="flex items-center my-4">
          <label htmlFor="description" className="mr-0.5 block text-sm font-medium">description: </label>
          <input type="text" name="description" className="p-2 rounded-md bg-[#fcebda]
          border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]" placeholder="enter a description"
          value={formData.description} onChange={handleChangeInput}/>
        </div>
        <div className="flex items-center my-4">
          <label htmlFor="date" className="mr-11 block text-sm font-medium">date: </label>
          <input type="date" name="date" className="p-2 rounded-md bg-[#fcebda]
          border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000] w-[200px]" value={formData.date} 
          onChange={handleChangeInput}/>
        </div>
        <div className="flex items-center my-4">
          <label htmlFor="location" className="mr-5 block text-sm font-medium">location: </label>
          <input type="text" name="location" className="p-2 rounded-md bg-[#fcebda]
          border-2 border-[#ff9696] shadow-md ml-3 text-[#a60000]" placeholder="enter a location" 
          value={formData.location} onChange={handleChangeInput} />
        </div>
        <button type="submit" 
        className="cursor-pointer rounded-md m-4 px-[7px] pb-[4px] pt-[2px] bg-[#ff2424] text-[#ffead7] border-2 border-[#ff2424]
           hover:bg-[#ffead7] hover:border-[#ff2424] hover:text-[#ff2424] transition-all duration-300 ease-in">
           Add Event</button>
        </form>
    </div>
  )
}

export default CreateEvent