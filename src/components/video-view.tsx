import React, { Dispatch, SetStateAction } from "react";

type VideoViewProps = {
    vidID: string
};

export function VideoView({vidID}: VideoViewProps) {

    // Construct the full video source URL for the iframe src
    var src = `https://www.youtube.com/embed/${vidID}`
    return (
        <>
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
