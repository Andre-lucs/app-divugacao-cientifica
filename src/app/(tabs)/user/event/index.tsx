import { TEvent } from "@/@types/dataTypes";
import useEvents from "@/src/hooks/useEvents";
import MyEventsPage from "@/src/pages/user/events/CreatedEvents";
import { useEffect, useState } from "react";


export default function(){

  const [userEvents, setUserEvents] = useState<TEvent[]>([]);
  const {getUserEvents} = useEvents();
  const userId = "66e725bee3f330c276451992"

  useEffect(() => {
    const fetchMyEventData = async () => {
        if (userId) {
            const data = await getUserEvents(userId);
            setUserEvents(data);
        }
    };

    
    fetchMyEventData();
    
}, []);

  return (
    <MyEventsPage events={userEvents}/>
  );
}