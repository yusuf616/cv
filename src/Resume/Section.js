




export const  Section=({data,children})=>{
    return  <section className="mb-8 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600 flex items-center"> {data?.title} </h2>
        {children}
    </section>
}


const SubSection=({data,children})=>{

    return(<div className="mb-4 pl-4">
        <h3 className="text-lg font-semibold text-purple-600">{data?.title}</h3>
        {children}
    </div>) 

}

Section.SubSection=SubSection;