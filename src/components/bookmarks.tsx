import {useEffect, useState} from "react";

export function Bookmarks() {

    const [urlHistory, seturlHistory] = useState([])

    useEffect(() => {
        async function SendVidID(): Promise<void>{
            let response: Response =  await fetch('http://localhost:8000/bookmarks',{
                method: "GET"
            })
            // json the fetched data
            let fetchedUrls = await response.json()

            seturlHistory(fetchedUrls)
        }

        SendVidID()

    }, [urlHistory]);
    return(
        <div>
            <span className={'h3'}>Bookmarked</span>
            <p>You have {urlHistory.length} bookmarked videos buddy :)</p>
            <div className={'historySec'}>
                {urlHistory.map((urls)=>{
                        return (
                            <span>
                                    <br/>
                                    <iframe
                                        width="230"
                                        height="120"
                                        // @ts-ignore
                                        src={`https://www.youtube.com/embed/${urls.url}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </span>
                        )
                })}

            </div>
        </div>
    )
}
