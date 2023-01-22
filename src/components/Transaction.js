

export default function Transaction({type, value, description, date}){
    return(
        
        <li>
            <span>
            {date}
            {description}
            {value}
            </span>
        </li>
    )
}