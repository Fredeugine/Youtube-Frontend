import React, {useState} from 'react';
import './App.css';
import {Searchbar} from "./components/searchbar";
import {VideoView} from "./components/video-view";
import {History} from "./components/history";
import {Bookmarks} from "./components/bookmarks";

function App() {
    const [vidUrl,setvidUrl] = useState<string | null>()
    const [vidID,setvidID] = useState<string>('')
    const [bkmrvidID,setbkmrvidID] = useState<string>('')
    const [urlsent,seturlsent] = useState<boolean>(false)

    return (
      <div className={'main'}>
          <div className={'sec1'}>
              <Searchbar seturlsent={seturlsent} setvidID={setvidID}></Searchbar>
              <VideoView seturlsent={seturlsent}  urlsent={urlsent} vidID={vidID}></VideoView>
          </div>
          <div className={'sec2'}>
              <History vidID={vidID}></History>
              <Bookmarks></Bookmarks>
          </div>
      </div>
  );
}

export default App;
