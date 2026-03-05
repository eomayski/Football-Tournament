import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import BracketView from "./Components/Matches/BracketView.jsx"
import { fetchFlags } from "./store/flagsSlice.js"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFlags())
  }, [dispatch])

  return (
    <>
        <div className="wrapper">
        <Header />
        <ToastContainer theme="color" toastClassName={"toast"} closeButton={false} />
        <BracketView />
        <Footer/>
        </div>
    </>
  )
}

export default App
