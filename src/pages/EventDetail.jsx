import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("event")) || [];
    const foundEvent = events.find((ev) => String(ev.id) === id);
    setEventDetail(foundEvent);
  }, [id]);

  if (!eventDetail) {
    return (
      <div>
        <h2>Event Not Found</h2>
        <Link to="/" className="text-[#a60000] underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 border-[#ff9696] rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{eventDetail.title}</h2>
      <p className="mb-2">
        <span className="font-semibold">Description: </span>
        {eventDetail.description}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Date: </span>
        {eventDetail.date}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Location: </span>
        {eventDetail.location}
      </p>
      <Link to="/" className="mt-4 inline-block text-[#a60000] underline">
        Back to Home
      </Link>
    </div>
  );
};

export default EventDetail;
