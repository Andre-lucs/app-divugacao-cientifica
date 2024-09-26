import { TMinicourse } from "@/@types/dataTypes";
import { createContext, useState } from "react";
import { fetchApi } from "@/src/services/api";

export type MinicourseContextType = {
    minicourses: TMinicourse[];
    getMinicourses: () => Promise<any>;
    getMinicoursesByIds: (ids: string) => Promise<TMinicourse[]>;
    acceptMinicourseRequest: (reqMinicourseId: string) => Promise<any>;
    refuseMinicourseRequest: (reqMinicourseId: string) => Promise<any>;
    getMinicoursesRequests: (eventId: string) => Promise<any>;
};

export const MinicourseContext = createContext<MinicourseContextType>({
    minicourses: [],
    getMinicourses: async () => null,
    getMinicoursesByIds: async () => [],
    acceptMinicourseRequest: async () => null,
    refuseMinicourseRequest: async () => null,
    getMinicoursesRequests: async () => null,
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
    

    return (
        <MinicourseContext.Provider value={{ minicourses, getMinicourses, getMinicoursesByIds, getMinicoursesRequests, acceptMinicourseRequest, refuseMinicourseRequest }}>
            {children}
        </MinicourseContext.Provider>
    );
};
