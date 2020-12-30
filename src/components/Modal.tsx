import React, { CSSProperties, ReactElement } from 'react';

export interface ModalProps {
    children: ReactElement[],
    customStyles?: CSSProperties | undefined
}

export interface ModalButtonProps {
    children: string,
    customStyles?: CSSProperties | undefined
}

export interface ModalTitleProps {
    children: string,
    customStyles?: CSSProperties | undefined
}

export interface ModalBodyProps {
    children: ReactElement[] | string,
    customStyles?: CSSProperties | undefined
}



// const Modal: React.FunctionComponent<ModalProps> = () => {
const Modal = (props: ModalProps) => {
    const { children, customStyles } = props
    // return (<h1>{children}</h1>);
    return (<>
        <div className="modal" id="modal" style={customStyles}>{children}</div>
        <div className="overlay" id="overlay"></div>
    </>);
}

Modal.Title = (props: ModalTitleProps) => {
    const { children, customStyles } = props
    return (<div className="modal-title" id="modal-title" style={customStyles}>{children}</div>)
}

Modal.Body = (props: ModalBodyProps) => {
    const { children, customStyles } = props
    return (<div className="modal-body" id="modal-body" style={customStyles}>{children}</div>)
}

Modal.Button = (props: ModalButtonProps) => {
    const { children, customStyles } = props
    return (<button className="modal-btn-modal-open" id="modal-btn-modal-open" style={customStyles}>{children}</button>)
}

Modal.displayName = "Modal";
// Modal.Button.displayName = "Modal.Button";
// Modal.Title.displayName = "Modal.Title";
// Modal.Body.displayName = "Modal.Body";
export default Modal;