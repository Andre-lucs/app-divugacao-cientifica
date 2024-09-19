import { TEvent } from "@/@types/dataTypes";
import { createContext, useState } from "react"
import axios from "axios";
import { PORT, SERVER_IP, TOKEN } from "@/varibles";

export type EventContextType = {
    getEvents: () => Promise<any>;
    events: TEvent[];
    getEventById: (id: string) => Promise<TEvent | null>;
}


export const EventContext = createContext<EventContextType>({
    getEvents: async () => [],
    events: [],
    getEventById: async () => null
  });


export const EventProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [events, setEvents] = useState<TEvent[]>([]);
    
    
    const  getEvents = async  () => {
        var url = `${SERVER_IP}:${PORT}/evento`;
        var bearer = 'Bearer ' + `${TOKEN}`;
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

    const getEventById = async (id: string): Promise<TEvent | null> => {
        try {
            const url = `${SERVER_IP}:${PORT}/evento/${id}`;
            const bearer = 'Bearer ' + `${TOKEN}`;
    
            const configurationObject = {
                method: 'get',
                url: url,
                headers: {
                    authorization: bearer,
                    "Content-Type": "application/json"
                },
                params: {
                    id
                }
            };
            const response = await axios(configurationObject);
            const eventData: TEvent | null = response.data as TEvent | null;
            return eventData;

        } catch (err) {
            console.error("Erro ao buscar o evento:", err);
            return null; 
        }
    };
    

    return (
        <EventContext.Provider value={{getEvents,  events, getEventById}}>{children}</EventContext.Provider>
    )
}