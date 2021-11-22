import React from 'react';
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                We are using Node.js <span id="node-version"/>,
                Chromium <span id="chrome-version"/>,
                and Electron <span id="electron-version"/>.
            </div>
        );
    }
}
export default App;
