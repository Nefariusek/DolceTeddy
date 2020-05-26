import React, { Component } from 'react';
import './OurCats.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { FacebookProvider, Page } from 'react-facebook';
export default class OurCatsContent extends Component {
   
	render() {
 
		return   <div>
        <NavBar/>
        <div className="container-all">
            <div className="container-content">
         <h1>Nasze koty</h1>
        </div>
        <div className="container-extra"> <div className="container-extra-text">Polub nas na Facebooku'u! </div>
        <div className="facebook">
        <FacebookProvider appId="1616352375187490 ">
        <Page  href="https://www.facebook.com/EuphoriaWorldPL/" tabs="timeline" adapt_container_width="true" scrolling="no"/>
      </FacebookProvider>    
       </div>
       <div className="container-extra-text">Aktualności </div>
       <div className="news">
        tutaj najnowsze posty itp..
        <br/><br/><br/>   <br/><br/>
       </div> 
       <div className="container-extra-text">Jakieś inne rzeczy jak się chce </div>
       <div className="news">
        jakis content..
        <br/><br/><br/>   <br/><br/>
       </div>
        </div>
        
        </div>
        <Footer/></div>
	}
}
