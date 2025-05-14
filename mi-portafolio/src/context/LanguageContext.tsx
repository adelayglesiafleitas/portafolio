import React, { createContext, useContext, useState, ReactNode } from "react";
import { content } from "../data/dataText"; // tus textos
import type { Content } from "../types/types"; // tus tipos

// Definimos el tipo del contexto
interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    translations: Content;
}

// Creamos el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook para usar el contexto
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de LanguageProvider");
    }
    return context;
};

// Provider
interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState("en");

    const value: LanguageContextType = {
        language,
        setLanguage,
        translations: content[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
