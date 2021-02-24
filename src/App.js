import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function returnImage(event) {
    return URL.createObjectURL(event.target.files[0]);
}

function returnImageName(event) {
    return event.target.files[0].name;
}

function App() {
    const [imgURL, setImage] = useState(logo);
    const [fileName, getFileName] = useState('default');
    console.log(imgURL);
    return (
        <div className="App">
            <input type="file" onChange={(event) => {
                setImage(returnImage(event));
                getFileName(returnImageName(event))
            }}/><br/>
            <img src={imgURL} width={500}/>

            <h6>{imgURL}</h6>
            <h6>{fileName}</h6>
        </div>
    );
}

export default App;
