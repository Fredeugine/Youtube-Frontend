import {useRef, useState} from "react"


// @ts-ignore
export function Searchbar({setvidID,seturlsent}) {


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
            seturlsent(false)
        }
        else{
            setcheckpass(true)
            seturlsent(true)
        }
        if (inputRef1.current?.value.includes(' ') || inputRef1.current?.value === ''){
            wrongUrl.style.opacity = '1' // Show the message
            setcheckpass(true)
            seturlsent(true)
        }
        else {
            wrongUrl.style.opacity = '0' // Hide the message
            seturlsent(false)
        }

    }

    return(
        <>
            <div className={'inputSec'}>
                <input className={'urlInput'} ref ={inputRef1} onChange={()=>{
                    CheckwrongURLS()
                }} type={'text'} placeholder={'Paste your url here'}/>
                <button className={'submitBtn'} onClick={()=>{
                    CheckwrongURLS()
                    let inputVal = inputRef1?.current?.value


                    async function SendVidID(): Promise<void>{
                        // check if input Value contains {&t=}, remove it if it does before extracting the id
                        const index = inputVal?.indexOf('&t=');
                        if (index !== -1) {
                             inputVal = inputVal.substring(0, index);
                        }
                            // Split the URL to extract the video ID
                        var videoID: string[] = inputVal?.split('youtu.be/')

                        if (videoID.length === 1){
                            videoID = inputVal.split('watch?v=')
                        }
                        var id: string = videoID[1]
                        await fetch('http://localhost:8000/history',{
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                url: id,
                            })
                        })
                        await setvidID(id)
                    }
                    SendVidID()
                }} disabled={checkpass} type={'submit'}>Submit</button>
                <p className={'wrongUrl'}>URL contains a spacebar or is empty</p>
            </div>

        </>
    )
}



