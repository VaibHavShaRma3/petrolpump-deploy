export default function Card({title,bgColor,children,textColor}){
    const bgColorClass = bgColor ? `bg-${bgColor}` : "bg-black";
    const textColorClass = textColor ? `text-${textColor}` : "text-black";   
    return(
        // <div className={bgColorClass+" rounded-lg border-2 border-black p-4 my-2" + textColorClass}>
        <div className={`bg-${bgColor} rounded-lg p-4 my-2 `}>
            <span className="text-lg font-bold pb-2">{title}</span><br></br>
            {children}
        </div>
    )
}