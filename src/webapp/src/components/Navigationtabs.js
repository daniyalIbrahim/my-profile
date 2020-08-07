import React from 'react';
import Projects from "../routes/Projects";
import Home from "../routes/Home";
import About from "../routes/About";
import {Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Navigationtabs(props) {
    return (
        <Router>
            <Nav variant="tabs" className="nav-bar" defaultActiveKey="/">
                <Nav.Item className="nav-items">
                    <Link className="link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item className="nav-items">
                    <Link className="link" to="/projects">Projects</Link>
                </Nav.Item>
                <Nav.Item className="nav-items">
                    <Link className="link" to="/about">About</Link>
                </Nav.Item>
            </Nav>
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Navigationtabs;

