import {useEffect, useState} from "react";


type historyProps = {
    url: string
    vidID: string;
}
export function History({url,vidID}: historyProps) {
    const [urlHistory, seturlHistory] = useState([])
    useEffect(() => {
        async function SendVidID(): Promise<void>{
         let response: Response =  await fetch('http://localhost:3002/api/items',{
             method: "GET"
            })
            let fetchedUrls = await response.json()
            seturlHistory(fetchedUrls)
        } console.log(urlHistory)
        SendVidID()
    }, [vidID]);

    return(
        <>

        </>
    )
}
