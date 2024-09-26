import { TMinicourse } from "@/@types/dataTypes";
import { createContext, useState } from "react";
import { fetchApi } from "@/src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextDataType } from "@/@types/authTypes";

export type MinicourseContextType = {
    minicourses: TMinicourse[];
    getMinicourses: () => Promise<any>;
    getMinicoursesByIds: (ids: string) => Promise<TMinicourse[]>;
    acceptMinicourseRequest: (reqMinicourseId: string) => Promise<any>;
    refuseMinicourseRequest: (reqMinicourseId: string) => Promise<any>;
    getMinicoursesRequests: (eventId: string) => Promise<any>;
    minicourseSubscribe: (reqMinicourseId: string) => Promise<any>;
};

export const MinicourseContext = createContext<MinicourseContextType>({
    minicourses: [],
    getMinicourses: async () => null,
    getMinicoursesByIds: async () => [],
    acceptMinicourseRequest: async () => null,
    refuseMinicourseRequest: async () => null,
    getMinicoursesRequests: async () => null,
    minicourseSubscribe: async () => null,
});

export const MinicourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [minicourses, setMinicourses] = useState<TMinicourse[]>([]);

    const getMinicourses = async () => {
        try {
            const response = await fetchApi("/minicurso", { useToken: true });
            const minicoursesData = (response?.data as Array<any>).map((i) => i as TMinicourse);
            setMinicourses(minicoursesData);
            return minicoursesData;
        } catch (err) {
            console.error("Erro ao buscar minicursos:", err);
        }
    };

    const getMinicoursesByIds = async (id: string) => {
        try {
            const response = (await fetchApi(`/minicurso/event/${id}`, { useToken: true })).data as Array<any>;
            const minicoursesData = response
                .map(response => response as TMinicourse).filter((i) => i !== undefined); 
            return minicoursesData;
        } catch (err) {
            console.error("Erro ao buscar minicursos pelos IDs:", err);
            return [];
        }
    };

    const getMinicoursesRequests = async (eventId: string) => {
        try {
            const response = await fetchApi(`/requesicao-minicurso/event/${eventId}`, { useToken: true });
            console.log("response", response.data);
            const minicoursesData = (response?.data as Array<any>).map((i) => i as TMinicourse);
            return minicoursesData;
        } catch (err) {
            console.error("Erro ao buscar minicursos:", err);
        }
    }
    const acceptMinicourseRequest = async (reqMinicourseId: string) => {
        try {
            const response = await fetchApi(`/minicurso/`, { method:"POST", useToken: true, data:JSON.stringify({reqMinicourseId: reqMinicourseId}) });
            fetchApi(`/requesicao-minicurso/${reqMinicourseId}`, { method:"DELETE", useToken: true });
            return response;
        } catch (err) {
            console.error("Erro ao aceitar minicurso:", err);
        }
    }
    const refuseMinicourseRequest = async (reqMinicourseId: string) => {
        try {
            const response = await fetchApi(`/requesicao-minicurso/${reqMinicourseId}`, { method:"DELETE", useToken: true });
            return response;
        } catch (err) {
            console.error("Erro ao recusar minicurso:", err);
        }
    }

    const minicourseSubscribe = async (minicourseId: string) => {
        try {
            console.log("minicourseId", minicourseId);
            const userId = (JSON.parse(await AsyncStorage.getItem('authData') ||"{}") as AuthContextDataType).userId;
            const response = await fetchApi(`/minicurso/subscribe/${minicourseId}/user/${userId}`, { method:"POST", useToken: true });
            return response;
        } catch (err) {
            console.error("Erro ao se inscrever no minicurso:", err);
        }
    }
    

    return (
        <MinicourseContext.Provider value={{ minicourses, getMinicourses, getMinicoursesByIds, getMinicoursesRequests, acceptMinicourseRequest, refuseMinicourseRequest, minicourseSubscribe }}>
            {children}
        </MinicourseContext.Provider>
    );
};
