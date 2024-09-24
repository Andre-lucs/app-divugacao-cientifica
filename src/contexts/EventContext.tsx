import { TEvent } from "@/@types/dataTypes";
import { createContext, useState } from "react"
import axios from "axios";
import { PORT, SERVER_IP, TOKEN } from "@/globalVariables";

export type EventContextType = {
    getEvents: () => Promise<any>;
    events: TEvent[];
    getEventById: (id: string) => Promise<TEvent | null>;
    userEventHistory: (userId:string) => Promise<any>
    getUserEvents: (userId:string) => Promise<any>
    registerForEvent: (email: string, eventId: string) => Promise<any> | null
}


export const EventContext = createContext<EventContextType>({
    getEvents: async () => [],
    userEventHistory: async (userId: string) => [], 
    events: [],
    getEventById: async () => null, 
    getUserEvents: async () => null,
    registerForEvent: (email: string, eventId: string) => null
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

    const userEventHistory = async (userId: string) => {
        try {
            const url = `${SERVER_IP}:${PORT}/evento/historico-de-eventos/${userId}`;
            const bearer = 'Bearer ' + `${TOKEN}`;
    
            const configurationObject = {
                method: 'get',
                url: url,
                headers: {
                    authorization: bearer,
                    "Content-Type": "application/json"
                },
                params: {
                    userId: userId
                }
            };
            const response = await axios(configurationObject);
            let eventsData = (response.data as Array<any>).map((i)=>{
                return i as TEvent
            });
            return eventsData;

        } catch (err) {
            console.error("Erro ao buscar o evento:", err);
            return null; 
        }
    }

    const getUserEvents = async (userId: string) => {
        try {
            const url = `${SERVER_IP}:${PORT}/evento/meus-eventos/${userId}`;
            const bearer = 'Bearer ' + `${TOKEN}`;
    
            const configurationObject = {
                method: 'get',
                url: url,
                headers: {
                    authorization: bearer,
                    "Content-Type": "application/json"
                },
                params: {
                    userId: userId
                }
            };
            const response = await axios(configurationObject);
            let eventsData = (response.data as Array<any>).map((i)=>{
                return i as TEvent
            });
            return eventsData;

        } catch (err) {
            console.error("Erro ao buscar os eventos:", err);
            return null; 
        }
    }
    
    const registerForEvent = async (email: string, eventId: string) => {
        const url = `${SERVER_IP}:${PORT}/evento/${eventId}/adicionar-participante/${email}`;
        const bearer = 'Bearer ' + `${TOKEN}`;

        const configurationObject = {
            
            method: 'post',
            url: url,
            headers: {
                authorization: bearer,
                "Content-Type": "application/json"
            },
            params: {
                email,
                id: eventId
            }
        };
        
    }

    return (
        <EventContext.Provider value={{getEvents,  events, getEventById, userEventHistory, getUserEvents, registerForEvent}}>{children}</EventContext.Provider>
    )
}