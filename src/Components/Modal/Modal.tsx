import React from 'react';
import ReactDom from 'react-dom';


function Modal({ open, children, onClose }:{open:any, children:any, onClose:any}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="OVERLAY_STYLES" />
            <div className="MODAL_STYLES">
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById('portal') as HTMLElement
    );
}


export default Modal;