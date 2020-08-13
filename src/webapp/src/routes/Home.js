import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Home.css"
import ContactModal from '../components/ContactModal';

function Home(props) {

    const handleWriter = (typewriter) => {
        typewriter.typeString('Hey There!')
            .pauseFor(2500)
            .deleteAll()
            .typeString("My name is Daniyal Ibrahim")
            .pauseFor(2500)
            .deleteAll()
            .typeString("I am a full stack software developer")
            .pauseFor(2500)
            .deleteAll()
            .typeString("I am passionate about my work")
            .pauseFor(2500)
            .deleteAll()
            .typeString("and i am capable of working with these tools mentioned below")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Thank you for Visiting!!")
            .start();
            
    }

    return (
        <div className="main-text">
            <Typewriter
                loop
                
                className="writer"
                onInit={(typewriter) => handleWriter(typewriter)}
            />
           <br></br>
            <img alt="java-logo" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/>
            <img alt="go-lang-logo" src="https://img.icons8.com/color/48/000000/golang.png"/>
            <img alt="python-logo" src="https://img.icons8.com/color/48/000000/python.png"/>
            <img alt="react-js-logo" src="https://img.icons8.com/color/48/000000/react-native.png"/>
            <img alt="html-5-logo" src="https://img.icons8.com/color/48/000000/html-5.png"/>
            <img alt="css-3-logo" src="https://img.icons8.com/color/48/000000/css3.png"/>
            <img alt="docker-logo" src="https://img.icons8.com/color/48/000000/docker.png"/>
            <br></br>

            <br></br>
            <ContactModal></ContactModal>
        </div>
    );
}

export default Home;
