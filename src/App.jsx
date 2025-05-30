import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//context

import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound"
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePost from "./pages/CreatePost/CreatePost"

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Search from "./pages/Search/Search";

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.log("aq " + user)
    })
    }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>

  }

  return (
    <div className="App">
    <AuthProvider value={{ user }}>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
        <Route path="/post/create" element={user ? <CreatePost /> : <Navigate to="/login"/>} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
