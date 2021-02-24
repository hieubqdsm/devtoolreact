import React, {useState} from "react";
function returnImage(event) {
    return URL.createObjectURL(event.target.files[0]);
}

function returnImageName(event) {
    return event.target.files[0].name;
}
const DownloadMultiFile = () => {
    return <div>

    </div>
}

export default DownloadMultiFile;