import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DownloadMultiFile from "./components/DownloadMultiFile";
import ChangeMultiFileName from "./components/ChangeMultiFileName";
function App() {

    return (
        <Router className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/onefile">Mot ten nhieu hinh</Link>
                        </li>
                        <li>
                            <Link to="/multifile">Doi ten hang loat hinh thanh 1</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/onefile">
                        <DownloadMultiFile />
                    </Route>
                    <Route path="/multifile">
                        <ChangeMultiFileName />
                    </Route>
                    <Route path="/">
                        <DownloadMultiFile />
                    </Route>/
                </Switch>
            </div>
        </Router>
    );
}

export default App;
