import { createContext, useState } from "react"
import { Header } from "./Header";
import { Section } from "./Section";



const ResumeContext=createContext();



export const Resume=({children})=>{

    const [data,setData]=useState({});

    const Values={
        data,setData
    }

    return (<ResumeContext.Provider value={Values} >
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 shadow-xl rounded-lg" >
            {children}
        </div>
    </ResumeContext.Provider>)
}


Resume.Header=Header;
Resume.Section=Section;



