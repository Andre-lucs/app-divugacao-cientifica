import { TEvent } from "@/@types/dataTypes";
import { AuthContext } from "@/src/contexts/AuthContext";
import useEvents from "@/src/hooks/useEvents";
import MyEventsPage from "@/src/pages/user/events/CreatedEvents";
import { useContext, useEffect, useState } from "react";


export default function(){

  const [userEvents, setUserEvents] = useState<TEvent[]>([]);
  const {getUserEvents} = useEvents();
  const authContext = useContext(AuthContext);
  
  const fetchMyEventData = async () => {
      if (authContext.authData.userId) {
          const data = await getUserEvents(authContext.authData.userId);
          setUserEvents(data);
      }
  };

  useEffect(() => {
    fetchMyEventData();
}, []);

  return (
    <MyEventsPage events={userEvents}/>
  );
}