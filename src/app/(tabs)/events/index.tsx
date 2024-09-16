import { useContext, useEffect, useState } from "react";
import Events from "@/src/pages/events/EventsPage";
import { EventContext, EventContextType, EventProvider } from "@/src/contexts/EventContext";
import { TEvent } from "@/@types/dataTypes";


export default function Index() {

  const {getEvents,events} = useContext(EventContext) as EventContextType;

  useEffect(() => {
    getEvents();
  }, [])

  return (
      <Events events={events} />
  );
}

