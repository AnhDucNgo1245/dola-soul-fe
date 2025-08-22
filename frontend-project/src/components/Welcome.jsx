import { useEffect } from "react"
import { statusService } from "../services/statusService"

export default function Welcome() {

    useEffect(() => {
        async function statusLog(){
            const response = await statusService();
            console.log(response)
        }
        statusLog();
    }, [])

    return (
        <>
            <h1>Welcome to D209's website</h1>
        </>
    )
}