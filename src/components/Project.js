import React, { Component } from 'react';
import Background from './Background';
import Footer from './Footer';
import geekbot from '../img/geekbot.png';
import geekbot_dark from '../img/geekbot_dark.png';
import demo from '../img/demo.jpg';
import demo2 from '../img/demo2.jpeg';
import cross from '../img/cross.png';
import '../css/Project.css';

//Vanilla JavaScript for Pop-up
function displayFlex1(){
    document.querySelector('.bg-modal1').style.display = 'flex';
}
function displayFlex2(){
    document.querySelector('.bg-modal2').style.display = 'flex';
}
function displayFlex3(){
    document.querySelector('.bg-modal3').style.display = 'flex';
}
function displayFlex4(){
    document.querySelector('.bg-modal4').style.display = 'flex';
}
function displayNone1(){
    document.querySelector('.bg-modal1').style.display = 'none';
}
function displayNone2(){
    document.querySelector('.bg-modal2').style.display = 'none';
}
function displayNone3(){
    document.querySelector('.bg-modal3').style.display = 'none';
}
function displayNone4()
{
    document.querySelector('.bg-modal4').style.display = 'none';
}
class Project extends Component {
    render() {
        return (
            <div>
                <Background clipType="clipping-projects" overlayColor="bgcolor-projects"></Background>
                {/* <!-- CONTENT --> */}
                <p className = "project">Projects</p>
                <div className="slogan_project" >
                    <h2>Work we have</h2>
                    <h2>done in the past</h2>
                </div>
                <div className="image1"  id = "click1">
                    <img src={geekbot} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image3">
                    <img src={demo2} onClick={displayFlex3} className="image3" />
                </div>
                <div className="image2">
                    <img src={geekbot_dark} onClick = {displayFlex2} className="image2" />
                </div>
                <div className="image4">
                    <img src={demo} onClick = {displayFlex4} className="image4" />
                </div>

                {/* <!-- POPUP --> */}
                <div className="bg-modal1">
                    <div className="modal-content1">
                        <img src={geekbot} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone1}><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-modal2">
                    <div className="modal-content2">
                        <img src={demo} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone2} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-modal3">
                    <div className="modal-content3">
                        <img src={demo2} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone3} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-modal4">
                    <div className="modal-content4">
                        <img src={geekbot_dark} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone4} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div>
                <Footer bgColor="footer-projects"></Footer>
            </div>
        )
    }
}

export default Project;