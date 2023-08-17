import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react"


// @ts-ignore
export function Searchbar({setvidID}) {


const inputRef1  = useRef<HTMLInputElement | any>()
    const [checkpass,setcheckpass] = useState<boolean>(true)
    // Check if the input value contains a space or is empty

    function CheckwrongURLS(): void{
        var wrongUrl = document.querySelector('.wrongUrl') as HTMLElement
        if (
            inputRef1.current?.value.includes('https://youtu.be/') ||
            inputRef1.current?.value.includes('https://www.youtube.com/')
        ) {
            setcheckpass(false);
            wrongUrl.style.opacity = '1' // Show the message
        }
        else{
            setcheckpass(true)
        }
        if (inputRef1.current?.value.includes(' ') || inputRef1.current?.value === ''){
            wrongUrl.style.opacity = '1' // Show the message
            setcheckpass(true)
        }
        else {
            wrongUrl.style.opacity = '0' // Hide the message
        }



    }

    return(
        <>
            <input ref ={inputRef1} onChange={()=>{
                CheckwrongURLS()
            }} type={'text'} placeholder={'Paste your url here'}/>
            <button onClick={()=>{
                CheckwrongURLS()


                async function SendVidID(): Promise<void>{
                    // Split the URL to extract the video ID

                    var videoID: string[] = inputRef1?.current?.value.split('youtu.be/')

                    if (videoID.length === 1){
                        videoID = inputRef1?.current?.value.split('watch?v=')
                    }
                    var id: string = videoID[1]
                    await fetch('http://localhost:3002/api/items',{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: id,
                        })
                    })
                    setvidID(id)
                    console.log(id)
                }
                SendVidID()
            }} disabled={checkpass} type={'submit'}>Submit</button>
            <p className={'wrongUrl'}>URL contains a spacebar or is empty</p>
        </>
    )
}



