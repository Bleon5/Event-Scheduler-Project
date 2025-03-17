import { useEvn } from "../context/EventContext";
import { Link } from "react-router-dom";

function Home() {
  const { event, setEvent } = useEvn();

  return (
    <div>
      <h1>Events</h1>
      <div className="flex gap-5">
        {event.length > 0 ? (
          event.map((ev) => (
            <div key={ev.id} className="border w-1/2">
              <h1 className="text-red-500 text-2xl text-center">{ev.title}</h1>
              <p className="text-xl">{ev.description}</p>
              <p className="text-xl">{ev.location}</p>
              <p className="text-sm">{ev.date}</p>
              <Link to={`/event/${ev.id}`}>
                <button className="border bg-green-500 text-white p-2 w-full mt-5">
                  View Event
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
