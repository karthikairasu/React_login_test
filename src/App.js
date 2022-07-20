import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import React, { Component }  from 'react';


function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Logo</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li> 
            </ul>
            
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Link</a></li>
                  <li><a class="dropdown-item" href="#">Another link</a></li>
                  <li><a class="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
              </ul> 
          </div>
        </div>
      </nav>
       
        <div className="container">
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
