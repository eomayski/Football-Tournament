import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import BracketView from "./components/Matches/BracketView.jsx"
import { fetchFlags } from "./store/flagsSlice.js"
import { Route, Routes } from "react-router"
import TeamSearch from "./components/Teams/TeamSearch.jsx"

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
        <Routes>
        <Route path="/" element={<BracketView />}/>
        <Route path="/matches" element={<BracketView />}/>
        <Route path="/teams" element={<TeamSearch />}/>
        </Routes>
        <Footer/>
        </div>
    </>
  )
}

export default App
