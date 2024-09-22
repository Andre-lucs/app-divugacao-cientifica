import { useContext, useEffect, useState } from "react";
import Events from "@/src/pages/events/EventsPage";
import { EventContext, EventContextType, EventProvider } from "@/src/contexts/EventContext";



export default function Index() {

  const {events, getEvents} = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, [])
 

  return (
      <Events events={events || []} />
  );
}

