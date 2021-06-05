import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../../styles/Category.css";

export function Category() {
  const [events, setEvents] = useState(null);
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
    <div className="event-list">
      {events === null ? (
        <h1>Loading...</h1>
      ) : (
        events.events.map((v) => (
          <Link to={`/event/${v.id}`} key={v.id}>
            <div className="event-item card">
              {!!v.tournament && !!v.tournament.uniqueTournament ? (
                <div className="image-container">
                  <img
                    src={`https://master.dev.sofascore.com/api/v1/unique-tournament/${v.tournament.uniqueTournament.id}/image`}
                    alt="Slika turnira"
                  ></img>
                </div>
              ) : (
                ""
              )}
              <div>
                <h3>
                  {v.tournament.name} -{" "}
                  {!!v.roundInfo ? `Round: ${v.roundInfo.round}` : ``}
                </h3>
                <div className="event-names">
                  <div className="event-home-score">
                    <h2>{v.homeTeam.name}</h2>
                    <h2>{v.homeScore.display}</h2>
                  </div>
                  <div className="event-away-score">
                    <h2>{v.awayTeam.name}</h2>
                    <h2>{v.awayScore.display}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
