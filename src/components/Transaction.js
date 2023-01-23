

export default function Transaction({type, price, description, date}){
    return(
        
        <li>
            <span>
            {date}
            {description}
            {price}
            </span>
        </li>
    )
}