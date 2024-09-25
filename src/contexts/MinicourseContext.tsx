import { TMinicourse } from "@/@types/dataTypes";
import { createContext, useState } from "react";
import { fetchApi } from "@/src/services/api";

export type MinicourseContextType = {
    minicourses: TMinicourse[];
    getMinicourses: () => Promise<any>;
    getMinicoursesByIds: (ids: string[]) => Promise<TMinicourse[]>;
};

export const MinicourseContext = createContext<MinicourseContextType>({
    minicourses: [],
    getMinicourses: async () => null,
    getMinicoursesByIds: async () => [],
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

    const getMinicoursesByIds = async (ids: string[]) => {
        try {
            const promises = ids.map(id => fetchApi(`/minicurso/${id}`, { useToken: true }));
            const responses = await Promise.all(promises);
         
            const minicoursesData = responses
                .filter(response => response !== undefined) 
                .map(response => response.data as TMinicourse); 
            
            return minicoursesData;
        } catch (err) {
            console.error("Erro ao buscar minicursos pelos IDs:", err);
            return [];
        }
    };
    

    return (
        <MinicourseContext.Provider value={{ minicourses, getMinicourses, getMinicoursesByIds }}>
            {children}
        </MinicourseContext.Provider>
    );
};
