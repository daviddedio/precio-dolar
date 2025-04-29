import { UseGlobalContext } from "../Context/Context"
import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"
import './Modal.css'

export const Modal = () => {
    const modalRoot = document.getElementById('modal')

    const modalRef = useRef(null)
    const { state, setState, component } = UseGlobalContext()

    const closeModal = () => { setState(false) }

    if (!state || !modalRoot) return null

    return createPortal(
        <div className="overlay">
            <div className="modal" ref={modalRef}>
                <button className="closeButton" onClick={closeModal}>X</button>
                {component}
            </div>
        </div>
        , modalRoot)
}