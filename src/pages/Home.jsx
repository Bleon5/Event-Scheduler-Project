import { useEvn } from "../context/EventContext";
import { Link } from "react-router-dom";

function Home() {
  const { event, setEvent } = useEvn();

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
       gap-5">
        {event.length > 0 ? (
          event.map((ev) => (
            <div key={ev.id} className="border-2 border-[#ff9696] rounded-md
               shadow-lg bg-[#fff1e3]">
              <h1 className="text-red-500 text-xl text-center p-3">{ev.title}</h1>
              <p className="p-3 h-[210px] overflow-hidden text-justify mb-3">{ev.description}</p>
              <p className="px-3">{ev.location}</p>
              <p className="text-sm px-3">{ev.date}</p>
              <Link to={`/event/${ev.id}`}>
                <button className="border bg-[#ff2424] text-[#ffead7] p-2 w-full mt-5 cursor-pointer">
                  View Event
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
  );
}

export default Home;
