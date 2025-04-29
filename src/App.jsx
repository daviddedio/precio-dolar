import { AppRutas } from "../AppRutas/AppRutas"
import { Modal } from "../Modal/Modal"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

import './App.css'

export const App = () => {
  return (
    <>
      <Header />
      <AppRutas />
      <Modal />
      <Footer />
    </>
  )
}
