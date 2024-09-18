import { useContext, useEffect, useState } from "react";
import Events from "@/src/pages/events/EventsPage";
import { EventContext, EventContextType, EventProvider } from "@/src/contexts/EventContext";
import { TEvent } from "@/@types/dataTypes";


export default function Index() {

  const eventContext = useContext(EventContext);

  useEffect(() => {
    eventContext?.getEvents();
  }, [])

  return (
      <Events events={eventContext?.events || []} />
  );
}

