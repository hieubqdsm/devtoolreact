import React, {useState} from "react";
import logo from "../logo.svg";
import {RefineText, TextToArray} from "../utils/editText";

const returnImage = (event) => {
    return URL.createObjectURL(event.target.files[0]);
}

const onHandleTextInput = (event) => {
    return event.target.value;
}

const returnImageName = (event) => {
    return event.target.files[0].name;
}

const getFileExtension = (fileName) => {
    const arr_name = fileName.split(".");
    return arr_name[arr_name.length - 1];
}

const downloadAllImage = (link, fileName, keywordList) => {
    const fileExtension = getFileExtension(fileName);
    const keywordArray = TextToArray(keywordList);
    console.log(RefineText(fileName, "setminus", "origin"));
    console.log(keywordArray);
    fetch(link)
        .then(response => {
            response.blob().then(blob => {
                for (let i = 0; i < keywordArray.length; i++) {
                    const keyword = keywordArray[i].trim();
                    if (keyword.length <= 0) {
                        continue;
                    }
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    const newFileName = RefineText(keywordArray[i], "setminus", "origin")+"."+fileExtension;
                    console.log(newFileName);
                    a.href = url;
                    a.download = newFileName;
                    // a.click();
                }
            });
        });
}
const DownloadMultiFile = () => {
    const [imgURL, setImage] = useState(logo);
    const [fileName, getFileName] = useState('default');
    const [fileExtension, debugFileExtension] = useState('None');
    const [keywordList, setKeywordList] = useState([]);
    return <div className="App">
        <h3>1 Hinh tra ve nhieu file</h3>
        <div>
            <h6>Keyword list</h6>
            <textarea name="keywordList" style={{width: "650px", height: "150px"}}
                      onChange={(event) => setKeywordList(onHandleTextInput(event))}/>
        </div>
        <div>
            <input type="file" onChange={(event) => {
                setImage(returnImage(event));
                getFileName(returnImageName(event));
                debugFileExtension(getFileExtension(returnImageName(event)));
            }}/>
        </div>
        <div>
            <button onClick={() => downloadAllImage(imgURL, fileName, keywordList)}>Download All Image</button>
        </div>
        <div>
            <h4>Debug</h4>
            <img src={imgURL} width={150}/>
            <h6>{imgURL}</h6>
            <h6>{fileName}</h6>
            <h6>{fileExtension}</h6>
        </div>


    </div>
}

export default DownloadMultiFile;