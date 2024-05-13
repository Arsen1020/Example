
import './Header.css'
import {NavLink} from "react-router-dom";
import {useTranslation} from "../context/languageContext";
const Header=()=>{

    const {t,changeLanguage,activeLanguage}=useTranslation()
    console.log('activeLanguage',activeLanguage)
    const onchangeSelect=(e)=>{
        console.log(e.target.value)
        changeLanguage(e.target.value)
    }
    return <div className={'header'}>
    <NavLink activeClassName={'active'} className={'link'} to={'/'}>{t('Home')}</NavLink>
    <NavLink activeClassName={'active'} className={'link'} to={'/about-us'}>{t('About Us')}</NavLink>
    <NavLink activeClassName={'active'}  className={'link'} to={'/contact-us'}>{t('Contact Us')}</NavLink>
        <select onChange={onchangeSelect}>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="AM">AM</option>
        </select>
    </div>
}
export  default Header