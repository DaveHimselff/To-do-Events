export default function Card({firstname, lastname, address}){
    
    return (
        <div className="text-lg font-bold">
            <div>
                Name: {firstname} {lastname}
            </div>
            <div>
                Address: {address}
            </div>
        </div>
    )
}