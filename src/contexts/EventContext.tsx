import { TEvent } from "@/@types/dataTypes";
import { createContext, useState } from "react";
import { Alert } from "react-native";
import { fetchApi } from "@/src/services/api";



export type EventContextType = {
    getEvents: () => Promise<any>;
    events: TEvent[];
    getEventById: (id: string) => Promise<TEvent | null>;
    userEventHistory: (userId: string) => Promise<any>;
    getUserEvents: (userId: string) => Promise<any>;
    registerForEvent: (email: string, eventId: string) => Promise<any> | null;
};

export const EventContext = createContext<EventContextType>({
    getEvents: async () => [],
    userEventHistory: async (userId: string) => [],
    events: [],
    getEventById: async () => null,
    getUserEvents: async () => null,
    registerForEvent: (email: string, eventId: string) => null,
});

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<TEvent[]>([]);

    const getEvents = async () => {
        try {
            const response = await fetchApi("/evento", { useToken: true });
            const eventData = (response?.data as Array<any>).map((i) => i as TEvent);
            setEvents(eventData);
            return eventData;
        } catch (err) {
            console.error("Erro ao buscar eventos:", err);
        }
    };

    const getEventById = async (id: string): Promise<TEvent | null> => {
        try {
            const response = await fetchApi(`/evento/${id}`, { useToken: true });
            return response?.data as TEvent | null;
        } catch (err) {
            console.error("Erro ao buscar o evento:", err);
            return null;
        }
    };

    const userEventHistory = async (userId: string) => {
        try {
            const response = await fetchApi(`/evento/historico-de-eventos/${userId}`, { useToken: true });
            return response?.data.map((i: any) => i as TEvent);
        } catch (err) {
            console.error("Erro ao buscar o histórico de eventos:", err);
            return null;
        }
    };

    const getUserEvents = async (userId: string) => {
        try {
            const response = await fetchApi(`/evento/meus-eventos/${userId}`, { useToken: true });
            return response?.data.map((i: any) => i as TEvent);
        } catch (err) {
            console.error("Erro ao buscar os eventos do usuário:", err);
            return null;
        }
    };

    const registerForEvent = async (email: string, eventId: string) => {
        try {
            const response = await fetchApi(`/evento/${eventId}/adicionar-participante/${email}`, {
                method: "post",
                useToken: true,
            });
            console.log(response)
            if (response?.status === 200) {
                Alert.alert("Sucesso", "Usuário adicionado ao evento com sucesso!");
            } else {
                Alert.alert("Erro", "Não foi possível inscrever no evento.");
            }
        } catch (error: any) {
            const message = error.response?.data || "Ocorreu um erro inesperado. Tente novamente.";
            Alert.alert("Erro", message);
        }
    };

    return (
        <EventContext.Provider value={{ getEvents, events, getEventById, userEventHistory, getUserEvents, registerForEvent }}>
            {children}
        </EventContext.Provider>
    );
};
