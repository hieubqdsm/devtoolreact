import React from 'react';
class DownloadFile extends React.Component {

    constructor(props) {
        super(props);
    }

    downloadEmployeeData = () => {
        fetch("https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/153531338_4129721350373278_1704693346196518273_o.jpg?_nc_cat=104&ccb=3&_nc_sid=730e14&_nc_ohc=G5xqKYX_ZSUAX-QxWQg&_nc_oc=AQnWL8JLvHpovZRWoAsE9B33Shhy8udRqsGu9a5OB09jSfXYxXhsX4DnYaMqHv67QeA&_nc_ht=scontent.fsgn5-4.fna&oh=e2a439d75baf4ddb9a4c05440ab2bbc8&oe=605CBCAF")
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'aaaa.jpg';
                    a.click();
                });
                //window.location.href = response.url;
            });
    }

    render() {
        return (
            <div id="container">
                <h1>Download File using React App</h1>
                <h3>Download Employee Data using Button</h3>
                <button onClick={this.downloadEmployeeData}>Download</button>
                <p/>
                <h3>Download Employee Data using Link</h3>
                <a href="#" onClick={this.downloadEmployeeData}>Download</a>
            </div>
        )
    }

}

export default DownloadFile;