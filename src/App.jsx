import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './page/Navbar'
import Home from './page/Home'
import Login from './page/Login'
import Signup from './page/Signup'
import ContactUs from './page/ContactUs'
import Grammar from './page/Grammar'
import'./grammar.css'
import Islam from './page/Islam'
import Assignment from './page/Assignment'
import Grammard from './page/Grammard'
import Islamd from './page/Islamd'
import AssignmentA from './page/AssignmentA'
import AssignmentQ from './page/AssignmentQ'

function App() {
      const users = JSON.parse(localStorage.getItem('user'))
      return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/login" element={users ? <Navigate to="/" /> : <Login />} />
                        <Route path="/signup" element={ <Signup />} />
                        <Route path="/contact" element={!users ? <ContactUs /> : <Navigate to="/" />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/grammar" element={<Grammar/>} />
                        <Route path="/islam" element={<Islam/>} />
                        <Route path="/assignment" element={<Assignment/>} />
                        <Route path="/grammard" element={<Grammard/>} />
                        <Route path="/islamd" element={<Islamd/>} />
                        <Route path="assignmenta" element={<AssignmentA/>} />
                        <Route path="assignmentQ" element={<AssignmentQ/>} />

                    </Routes>
                </div>
            </BrowserRouter>
        </div>
  )
}

export default App
