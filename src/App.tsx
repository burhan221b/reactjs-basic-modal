import React from 'react';
import Modal from './components/Modal';
import './styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                {console.log("RENDER")}
                <h2>Welcome to React using TypeScript and Webpack created by Burhan</h2>
                <Modal.Button modalId="One">Click Here 1</Modal.Button>
                <Modal.Button modalId="Two">Click Here 2</Modal.Button>
                <Modal modalId="One" customStyles={{ width: "500px" }}>
                    <Modal.Title>Title: Hello There One</Modal.Title>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos beatae tempore necessitatibus, amet minus nostrum, fugiat, nemo facilis aut in totam blanditiis officiis dolorum tenetur architecto sequi illo nesciunt.
                    </Modal.Body>
                </Modal>
                <Modal modalId="Two" customStyles={{ width: "80%" }}>
                    <Modal.Title>Title: Hello There Two</Modal.Title>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos beatae tempore necessitatibus, amet minus nostrum, fugiat, nemo facilis aut in totam blanditiis officiis dolorum tenetur architecto sequi illo nesciunt.
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

App.displayName = "App";

export default App;