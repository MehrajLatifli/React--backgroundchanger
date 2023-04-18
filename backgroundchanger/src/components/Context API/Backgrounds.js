import React, { Component } from 'react'
import BackgroundConsumer from './context'
import Background from './Background.js';



export default class Backgrounds extends Component {
    render() {
      return (
        <BackgroundConsumer>
          {
            value=>{
              const {backgrounds}=value;
              return (
                <div>
                  {
  
                      backgrounds.map((background)=>(
  
                      <Background key={background.id} background={background}/>
              
                   
                    ))
  
                  }
                </div>
              )
            }
          }
        </BackgroundConsumer>
      )
    }
  }