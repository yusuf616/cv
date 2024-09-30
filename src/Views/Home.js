import { Building, Calendar } from "lucide-react"
import { Resume } from "../Resume/Resume"



export const Home=()=>{
    return (<div className=" py-10 " >
        <Resume>
            <Resume.Header data={{
                userName:"Yusuf ELMUHAMMED",
                contents:[
                    { name:"email" , title:"yusufelmuhammed616@gmail.com",href:"mailto:yusufelmuhammed616@gmail.com" },
                    { name:"phone" , title:"+905313911590" , href:"tel:+905313911590" },
                    { name:"location", title:"ŞANLIURFA/Türkiye" },
                    { name:"github",title:"github.com/yusuf616",href:"https://github.com/yusuf616"},
                    { name:"linkedin",title:"LinkedIn Profile",href:"https://www.linkedin.com/in/yusuf-elmuhammed-016908286/"}
                ]
            }} />
            <Resume.Section data={{title:"Education"}} > 
                <Resume.Section.SubSection data={{title:"Master Degree, Computer Engineering"}} >
                    <p className="text-gray-600">Harran University, Şanlıurfa/Türkiye</p>
                    <p className="text-gray-600 flex items-center"><Calendar className="w-4 h-4 mr-2 text-pink-500" /> 09/2023 – present (Estimated Graduation 2025)</p>
                    <p className="text-gray-600">Specialization: Virtual Reality (VR)</p>
                </Resume.Section.SubSection>

                <Resume.Section.SubSection data={{title:"Bachelor's Degree, Computer Engineering"}} >
                    <p className="text-gray-600">Harran University, Şanlıurfa/Türkiye</p>
                    <p className="text-gray-600 flex items-center"><Calendar className="w-4 h-4 mr-2 text-pink-500" /> 09/2019 – 08/2023</p>
                    <p className="text-gray-600">GPA: 3.34/4.00</p>
                </Resume.Section.SubSection>
            </Resume.Section>

            <Resume.Section data={{title:"Professional Experience"}}>
                
                <Resume.Section.SubSection data={{title:"Polynomial functions"}}>
                    <p className="text-gray-600 flex items-center"><Calendar className="w-4 h-4 mr-2 text-pink-500" /> 06/2023 – 08/2023 | Şanlıurfa, Türkiye</p>
                    <p className="text-gray-700 mt-2">
                        Provided virtual reality supported training using ReactJS, nodeJS (express), 
                        MySQL and THREEJS to simulate relevant Polynomial functions in a virtual reality 
                        environment for a 30-day period.
                    </p>
                </Resume.Section.SubSection>

                <Resume.Section.SubSection data={{title:"Web design using ReactJS"}}>
                    <p className="text-gray-600 flex items-center"><Calendar className="w-4 h-4 mr-2 text-pink-500" /> 06/2022 – 08/2022 | Şanlıurfa, Türkiye</p>
                    <p className="text-gray-700 mt-2">
                        Worked on web design and development using React JS for a period of 30 days. 
                        Developed the LipSync project, which focuses on human mouth movements according to letters.
                    </p>
                </Resume.Section.SubSection>
            </Resume.Section>
            
            
            <Resume.Section data={{title:"Organizations"}}>
                <Resume.Section.SubSection data={{title:"AyzaSoft"}} >
                    <p className="text-gray-600 flex items-center"><Calendar className="w-4 h-4 mr-2 text-pink-500" /> 09/2023 – present | Şanlıurfa, Türkiye</p>
                    <p className="text-gray-700 mt-2">
                        Front-end Developer specializing in the design and implementation of user interfaces using ReactJS.
                    </p>
                </Resume.Section.SubSection>
            </Resume.Section>

            <Resume.Section data={{title:"Skills"}}>
                <ul className="grid grid-cols-2 gap-2">
                    {['ReactJS', 'HTML-CSS-JavaScript', 'ThreeJS', 'NodeJs (Express.js)', 'C/C++', 'Python'].map((skill, index) => (
                        <li key={skill} className={`flex items-center p-2 rounded ${
                        index % 6 === 0 ? 'bg-red-100' :
                        index % 6 === 1 ? 'bg-yellow-100' :
                        index % 6 === 2 ? 'bg-green-100' :
                        index % 6 === 3 ? 'bg-blue-100' :
                        index % 6 === 4 ? 'bg-indigo-100' :
                        'bg-purple-100'
                        }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                            index % 6 === 0 ? 'bg-red-500' :
                            index % 6 === 1 ? 'bg-yellow-500' :
                            index % 6 === 2 ? 'bg-green-500' :
                            index % 6 === 3 ? 'bg-blue-500' :
                            index % 6 === 4 ? 'bg-indigo-500' :
                            'bg-purple-500'
                        }`}></span>
                        {skill}
                        </li>
                    ))}
                </ul>
            </Resume.Section>

            <Resume.Section data={{title:"Projects"}} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center bg-purple-100 p-3 rounded">
                        <Building className="w-5 h-5 mr-2 text-purple-600" />
                        <a href="https://ciftcibilir.com" target="_blank" rel="noopener noreferrer" className=" cursor-pointer select-none hover:underline">
                            <span className="font-semibold text-purple-700">Çiftçibilir</span>
                            <span className="text-purple-600 ml-2">10/2023 – 01/2024</span>
                        </a>
                    </div>
                    <div className="flex items-center bg-pink-100 p-3 rounded">
                        <Building className="w-5 h-5 mr-2 text-pink-600" />
                        <a href="https://galerimax.com" target="_blank" rel="noopener noreferrer" className=" cursor-pointer select-none hover:underline">
                            <span className="font-semibold text-pink-700">GaleriMax</span>
                            <span className="text-pink-600 ml-2">01/2024 – 05/2024</span>
                        </a>
                    </div>
                </div>
            </Resume.Section>

        </Resume>
    </div>)
}