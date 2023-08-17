import React, {useState} from 'react';
import './App.css';
import {Searchbar} from "./components/searchbar";
import {VideoView} from "./components/video-view";
import {History} from "./components/history";

function App() {
    const [vidUrl,setvidUrl] = useState<string>('')
    const [vidID,setvidID] = useState<string>('')

    return (
      <>
          <Searchbar setvidID={setvidID}></Searchbar>
          <VideoView vidID={vidID}></VideoView>
          <History url={vidUrl} vidID={vidID}></History>
      </>
  );
}

export default App;
