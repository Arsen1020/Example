export const EN={
    "Home":'Home',
    "About Us":"About Us",
    "Contact Us":"Contact Us",
}
export const RU={

    "Home":'дом',
    "About Us":"а нас",
    "Contact Us":"свизаца с нами",
}
export const AM={

    "Home":'տուն',
    "About Us":"մեռ մասին",
    "Contact Us":"կապ մեզ հետ",
}

export const LANGUAGES=['EN','RU','AM']
export const languages ={
    EN,
    RU,
    AM
}
export const getLanguage=(lang)=>{
    return languages[lang]
}
