import React, { CSSProperties, ReactElement, useRef, useEffect, FormEvent } from 'react';
import '../styles/Modal.scss';

export interface ModalProps {
    children: Element | ReactElement[] | Element[] | React.FormEvent<HTMLInputElement>,
    modalId: string,
    customStyles?: CSSProperties | undefined
}

export interface ModalButtonProps {
    children: string,
    modalId: string,
    customStyles?: CSSProperties | undefined
}

export interface ModalTitleProps {
    children: string,
    customStyles?: CSSProperties | undefined
}

export interface ModalBodyProps {
    children: any,
    customStyles?: CSSProperties | undefined
}

const openModal: Function = (modalId: string): void => {
    document.querySelector(`#${modalId}`)?.classList.add('modal-active')
    document.querySelector('.overlay')?.classList.add('overlay-active')
}

const closeModal: Function = (): void => {
    document.querySelectorAll(`.modal`).forEach(modal => modal?.classList.remove('modal-active'))
    document.querySelector('.overlay')?.classList.remove('overlay-active')
}

// const Modal: React.FunctionComponent<ModalProps> = () => {
const Modal = (props: ModalProps) => {
    const { children, customStyles, modalId } = props
    useEffect(() => {
        document.querySelector('.overlay')?.addEventListener('click', () => {
            closeModal()
        })
    }, [])
    return (<>
        <div className="modal" id={modalId} style={customStyles}>{children}</div>
        <div className="overlay" id="overlay"></div>
    </>);
}

Modal.Title = (props: ModalTitleProps) => {
    const { children, customStyles } = props
    const closeButtonRef = useRef<HTMLButtonElement | null>(null)
    useEffect(() => {
        console.log("Button ===", closeButtonRef.current)
        closeButtonRef.current?.addEventListener('click', () => {
            closeModal()
        })
    }, [])
    return (<div className="modal-header" id="modal-header">
        <div className="modal-title" id="modal-title" style={customStyles}>{children}</div>
        <button ref={closeButtonRef} className="btn-modal-close" id="btn-modal-close">&times;</button>
    </div>)
}

Modal.Body = (props: ModalBodyProps) => {
    const { children, customStyles } = props
    return (<div className="modal-body" id="modal-body" style={customStyles}>{children}</div>)
}

Modal.Button = (props: ModalButtonProps) => {
    const { children, customStyles, modalId } = props
    const openButtonRef = useRef<HTMLButtonElement | null>(null)
    useEffect(() => {
        console.log("Button ===", openButtonRef.current)
        openButtonRef.current?.addEventListener('click', () => {
            openModal(modalId)
        })
    }, [])
    return (<button ref={openButtonRef} className="modal-btn-modal-open" id="modal-btn-modal-open" style={customStyles}>{children}</button>)
}

Modal.displayName = "Modal";
// Modal.Button.displayName = "Modal.Button";
// Modal.Title.displayName = "Modal.Title";
// Modal.Body.displayName = "Modal.Body";
export default Modal;