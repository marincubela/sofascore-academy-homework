import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../../styles/Event.css";

export function Event() {
  const [event, setEvent] = useState({ event: {} });
  const { eventId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`https://master.dev.sofascore.com/api/v1/event/${eventId}`)
      ).json();
      setEvent(data);
    })();
  });

  console.log(event);

  return (
    <div className="event">
      {event === { event: {} } ? (
        <h1>Loading...</h1>
      ) : (
        console.log(
          event.event
        )`${event.event.homeTeam.name} - ${event.event.awayTeam.name}`
      )}
    </div>
  );
}
