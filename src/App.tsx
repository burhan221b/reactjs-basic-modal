import React from 'react';
import Modal from './components/Modal';
import './styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                {console.log("RENDER")}
                <h2>Welcome to React using TypeScript and Webpack created by Burhan</h2>
                <Modal.Button>Click Here</Modal.Button>
                <Modal>
                    <Modal.Title>Hello There Title</Modal.Title>
                    <Modal.Body>Lorem</Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

App.displayName = "App";

export default App;