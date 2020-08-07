import React from 'react';
import {Figure} from "react-bootstrap";
import ParticlesBg from 'particles-bg'

let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};

function About(props) {

    return (
        <div className="container-lg" style={{textAlign:"center"}} >

            <ParticlesBg type="lines" bg={true} />
            <Figure>
                <Figure.Image
                    style={{ marginTop:"5vh", color:"white"}}
                    width={433}
                    height={577}
                    alt="daniyal-ibrahim"
                    src="./assets/me.png"
                />
                <Figure.Caption style={{color:"white"}}>
                    <h3>Thats me! </h3>
                </Figure.Caption>
            </Figure>
        </div>
    );
}

export default About;