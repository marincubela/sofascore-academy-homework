import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../../styles/Category.css";

export function Category(props) {
  const [events, setEvents] = useState({ events: [] });
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(
          `https://master.dev.sofascore.com/api/v1/category/${id}/scheduled-events/2021-05-07`
        )
      ).json();
      setEvents(data);
    })();
  });

  return (
    <div className="category-list">
      {events.events.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        events.events.map((v) => (
          <>
            <div className="category-item card">
              <h2>
                {v.tournament.name} -{" "}
                {!!v.roundInfo ? `Round: ${v.roundInfo.round}` : ``}
              </h2>
              <h1>
                {v.homeTeam.name} - {v.awayTeam.name}
              </h1>
            </div>
          </>
        ))
      )}
    </div>
  );
}
