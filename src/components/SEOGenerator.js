import React, { useState } from "react";
import { RefineText, TextToArray } from "../utils/editText";

const onHandleTextInput = (event) => {
    return event.target.value;
}
const onHandleRawText = (prefix, main, suffix) => {
    let textOutput = [];
    const prefixArray = TextToArray(prefix);
    const mainArray = TextToArray(main);
    const suffixArray = TextToArray(suffix);
    for (let i = 0; i < prefixArray.length; i++) {
        for (let j = 0; j < mainArray.length; j++) {
            for (let k = 0; k < suffixArray.length; k++) {
                if (prefixArray[i].length > 0 && mainArray[j].length > 0 && suffixArray[k].length > 0) {
                    const textItem = prefixArray[i] + " " + mainArray[j] + " " + suffixArray[k];
                    textOutput.push(textItem);
                }
            }
        }
    }
    return textOutput;
}
const onHandleLinkText = (prefix, main, suffix) => {
    let textOutput = [];
    const prefixArray = TextToArray(prefix);
    const mainArray = TextToArray(main);
    const suffixArray = TextToArray(suffix);
    for (let i = 0; i < prefixArray.length; i++) {
        for (let j = 0; j < mainArray.length; j++) {
            for (let k = 0; k < suffixArray.length; k++) {
                if (prefixArray[i].length > 0 && mainArray[j].length > 0 && suffixArray[k].length > 0) {
                    const textItem = prefixArray[i] + " " + mainArray[j] + " " + suffixArray[k];
                    textOutput.push(RefineText(textItem, "none", "origin"));
                }

            }
        }
    }
    return textOutput;
}
const SEOGenerator = () => {
    const [preFixText, setPreFix] = useState("");
    const [mainText, setMainText] = useState("");
    const [suffixText, setSuffixText] = useState("");
    const [rawText, setRawText] = useState([]);
    const [linkText, setLinkText] = useState([]);
    return <div className="App" style={{ width: "100%" }}>
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "33%" }}>
                <h4>Tiền tố</h4>
                <textarea name="textPrefix" style={{ width: "100%", height: "150px" }}
                    onChange={(event) => {
                        setPreFix(onHandleTextInput(event)); setRawText(onHandleRawText(preFixText, mainText, suffixText));
                        setLinkText(onHandleLinkText(preFixText, mainText, suffixText));
                    }}></textarea>
            </div>
            <div style={{ width: "33%" }}>
                <h4>Từ chính</h4>
                <textarea name="textMain" style={{ width: "100%", height: "150px" }}
                    onChange={(event) => {
                        setMainText(onHandleTextInput(event)); setRawText(onHandleRawText(preFixText, mainText, suffixText));
                        setLinkText(onHandleLinkText(preFixText, mainText, suffixText));
                    }}></textarea>
            </div>
            <div style={{ width: "33%" }}>
                <h4>Hậu tố</h4>
                <textarea name="textSuffix" style={{ width: "100%", height: "150px" }}
                    onChange={(event) => {
                        setSuffixText(onHandleTextInput(event)); setRawText(onHandleRawText(preFixText, mainText, suffixText));
                        setLinkText(onHandleLinkText(preFixText, mainText, suffixText));
                    }}></textarea>
            </div>
        </div>
        <div>
            <h4>Kết quả</h4>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "50%" }}>
                    <h4>Từ khóa SEO</h4>
                    <div style={{ paddingLeft: "50px" }} >
                        {rawText.map(value => (
                            <p>{value}</p>
                        ))}
                    </div>
                </div>
                <div style={{ width: "50%" }}>
                    <h4>Từ khóa Link</h4>
                    <div style={{ paddingLeft: "50px" }} >
                        {linkText.map(value => (
                            <p key={value}>{value}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SEOGenerator;