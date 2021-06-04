import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../../styles/Event.css";

export function Event() {
  const [event, setEvent] = useState(null);
  const [tournamentId, setTournamentId] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    (async () => {
      const url = `https://master.dev.sofascore.com/api/v1/event/${eventId}`;
      const data = await (await fetch(url)).json();
      setEvent(data);
    })();
  });

  useEffect(() => {
    if (event !== null && event.event.tournament !== undefined)
      setTournamentId(event.event.tournament.uniqueTournament.id);
  }, [event]);

  console.log(event);

  return (
    <div className="event">
      {event === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="event-top-container">
            <div className="image-container">
              {" "}
              {tournamentId && (
                <img
                  src={`https://master.dev.sofascore.com/api/v1/unique-tournament/${tournamentId}/image`}
                  alt="Slika turnira"
                ></img>
              )}
            </div>
            <div>
              <div>{event.event.tournament.name}</div>
              <div>Round {event.event.roundInfo.round}</div>
            </div>
          </div>
          <div className="event-bottom-container">
            <div className="event-team-names">
              <div>{event.event.homeTeam.name}</div>
              <div>:</div>
              <div>{event.event.awayTeam.name}</div>
            </div>
            <div className="event-result">
              <div className="team-image">
                <img
                  src={`https://master.dev.sofascore.com/api/v1/team/${event.event.homeTeam.id}/image`}
                  alt="Home team"
                ></img>
              </div>
              <div>{event.event.homeScore.display}</div>-
              <div>{event.event.awayScore.display}</div>
              <div className="team-image">
                <img
                  src={`https://master.dev.sofascore.com/api/v1/team/${event.event.awayTeam.id}/image`}
                  alt="Away team"
                ></img>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
