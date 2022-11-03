import React from "react"
import Omdb from "./omdb";
import Signup from "./Signup";
// import Dashboard from "./Dashboard";
import Login from "./login";
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import PrivateRoute from "./PrivateRoute";
// import axios from 'axios'

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              {/* <Route exact path="/" component={PrivateRoute}/> */}
              {/* <Omdb/> */}
              <Route exact path='/' element={<Omdb />} />
              {/* <Route exact path='/' element={<Dashboard />} /> */}
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;