import { Mail,Phone,MapPin,Github,Linkedin } from "lucide-react";


const Icons={
    "email":Mail,
    "phone":Phone,
    "location":MapPin,
    "github":Github,
    "linkedin":Linkedin
}

export const Header=({data})=>{

    return <header className="mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
        <h1 className="text-4xl font-bold mb-2 text-purple-600"> {data?.userName} </h1>    
        <div className="flex flex-wrap gap-4 text-sm">
            {data?.contents?.map((cont,index)=><Item key={index} item={cont} />)}
        </div>
    </header> 
};



const Item=({item})=>{

    console.log(item);

    const EmptyIcon=()=>{
        return <></>
    }

    const getIcon=(name)=>{
        const Icon=Icons[name]||EmptyIcon
        return <Icon className="w-4 h-4 mr-2"/>
    }
    return (<div className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
        {getIcon(item.name)}
        <a href={item?.href} target="_blank" rel="noopener noreferrer" className=" cursor-pointer select-none hover:underline">{item?.title}</a>
    </div>)
}

