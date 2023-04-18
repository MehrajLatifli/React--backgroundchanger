import React, { Component } from 'react'

export default class Background extends Component {
    
    state={
        isvisible:false
    }

    onClickEvent(backgroundcolor,fontcolor){
      
        this.setState({
            isvisible:!this.state.isvisible

            
        })

        document.body.style.backgroundColor = backgroundcolor;

        for (let elem of document.querySelectorAll('#fontcolor')) {
          elem.style.color = fontcolor;
        }
    }


    render() {
      const {backgroundcolor, fontcolor}=this.props.background;
    return (
      <div className='col-md-8 mx-auto mb-4'>
          <div className='card'></div>
          <div className='card-header d-flex justify-content-betwwen'>
            <h3 className='d-inline' id='fontcolor' onClick={() =>this.onClickEvent(backgroundcolor,fontcolor)}>{backgroundcolor}</h3>
          </div>
          {this.state.isvisible ? <ul className='list-group list-group-flush'>
            <li className='list-group-item' id='fontcolor' >backgroundcolor: {backgroundcolor}</li>
            <li className='list-group-item' id='fontcolor'>fontcolor: {fontcolor}</li>
          </ul>
          :null
          }
      </div>
    )
  }
}
