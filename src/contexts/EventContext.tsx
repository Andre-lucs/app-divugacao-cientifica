import { TEvent } from "@/@types/dataTypes";
import { createContext, useState } from "react"
import axios from "axios";

export type EventContextType = {
    getEvents:  () => Promise<any>;
    events: TEvent[];
}


export const EventContext = createContext<EventContextType | null>(null);


export const EventProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [events, setEvents] = useState<TEvent[]>([]);
    
    
    const  getEvents = async  () => {
        var url = "http://192.168.137.1:5050/evento";
        var bearer = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbSIsImlhdCI6MTcyNjQ5MDI2NCwiZXhwIjoxNzI2NTAxMDY0fQ.X8G2p06yg8BZ24U8e3xjQJxkils2KwunHedIVJ0-8-g";
        const configurationObject = {
            method: 'get',
            url: url,
            headers: {
                authorization : bearer,
                "Content-Type":"application/json"
            },
            
          };

          axios(configurationObject).then((response, )=>{
            let eventData = (response.data as Array<any>).map((i)=>{
                return i as TEvent
            });
            setEvents(eventData);
            
            return eventData;

          }).catch((err) => console.log(err));
    }

    return (
        <EventContext.Provider value={{getEvents, events}}>{children}</EventContext.Provider>
    )
}