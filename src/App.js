import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function returnImage(event) {
    return URL.createObjectURL(event.target.files[0]);
}

function returnImageName(event) {
    return event.target.files[0].name;
}

const fs = require('fs'),
    request = require('request');

const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//     console.log('done');
// });
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
            <input type="button" value="Download Hinh" onClick={() => {
                download(imgURL, fileName, {
                    function() {
                        console.log('done');
                    }
                })
            }}/>
            <img src={imgURL} width={500}/>

            <h6>{imgURL}</h6>
            <h6>{fileName}</h6>
        </div>
    );
}

export default App;
