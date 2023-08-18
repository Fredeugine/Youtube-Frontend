import React, {useState} from "react";

type VideoViewProp = {
    vidID: string;
    urlsent: boolean;
    seturlsent: React.Dispatch<React.SetStateAction<boolean>>
}
// @ts-ignore
export function VideoView({vidID,urlsent,seturlsent}: VideoViewProp) {
    if (vidID === '' || vidID.includes(' ')){
        seturlsent(false)
    }

    // Construct the full video source URL for the iframe src
    var src = `https://www.youtube.com/embed/${vidID}`
    return (
        <>
            <button disabled={urlsent} className={'bookmarkBtn'} onClick={()=>{
                async function SendVidID(): Promise<void>{

                    await fetch('http://localhost:8000/bookmarks',{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            url: vidID,
                        })
                    })
                }
                SendVidID()
            }}>bookmark</button>
            <iframe
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </>
    );
}
