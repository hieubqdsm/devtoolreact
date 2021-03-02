const RefineText = (raw_text, remove_space, text_format) => {
    let refined_text = "";
    raw_text = raw_text.trim();
    switch (text_format) {
        case "Caption":
            refined_text = TitleCase(raw_text);
            break;
        case "Camel":
            refined_text = CamelCase(raw_text);
            break;
        default:
        case "Origin":
            refined_text = raw_text;
            break;
    }
    switch (remove_space) {
        case "setunderline":
            refined_text = refined_text.replace(/ /g, "_");
            break;
        case "setminus":
            refined_text = refined_text.replace(/ /g, "-");
            break;
        case "removespace":
            refined_text = refined_text.replace(/ /g, "");
            break;
        default:
            break;

    }
    return refined_text.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

const TitleCase = (str) => {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

const CamelCase = (str) => {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        if (i > 0) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
    }
    return splitStr.join(' ');
}

const TextToArray = (str) => {
    const tmp_str = str.replace(/\n/g, ",");
    return tmp_str.split(",");
}
const removeAccents = (str) => {
    const AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (let i = 0; i < AccentsMap.length; i++) {
        const re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        const char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}
export { RefineText, TitleCase, CamelCase, TextToArray, removeAccents };