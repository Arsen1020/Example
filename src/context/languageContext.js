import {createContext, useCallback, useContext, useState} from "react";
import {getLanguage, languages, LANGUAGES} from "../helpers/translation";


const LanguageContext = createContext(null)

const LanguageProvider = ({children}) => {
    const [activeLanguage, setActiveLanguage] = useState(
        getLanguage(localStorage.getItem("Language") || LANGUAGES[0])
    )
    const changeLanguage=useCallback((lang)=>{
        setActiveLanguage(languages[lang])
        localStorage.setItem('language',lang)
    },[activeLanguage])

    const t=useCallback((word)=>{
        return activeLanguage[word]

    },[activeLanguage])

    return <LanguageContext.Provider value={{t,changeLanguage,activeLanguage}}>{children}</LanguageContext.Provider>
}
export const useTranslation=()=>useContext(LanguageContext)
export default LanguageProvider


