import React, { Component } from 'react'

const BackgroundContext = React.createContext();

export class BackgroundProvider extends Component {

    state={
        backgrounds: [
            {
              id:1,
              backgroundcolor:"red",
              fontcolor:"black"
            },
            {
                id:2,
                backgroundcolor:"Cyan",
                fontcolor:"gold"
            },
            {
                id:3,
                backgroundcolor:"black",
                fontcolor:"deepskyblue"
            },
            {
                id:4,
                backgroundcolor:"DarkMagenta",
                fontcolor:"gold"
            },
            {
                id:5,
                backgroundcolor:"deepskyblue",
                fontcolor:"SpringGreen"
            },
            {
                id:6,
                backgroundcolor:"white",
                fontcolor:"SpringGreen"
            },
            {
                id:7,
                backgroundcolor:"gold",
                fontcolor:"DarkMagenta"
            },
            {
                id:8,
                backgroundcolor:"SpringGreen",
                fontcolor:"deepskyblue"
            },
        ]
    }


  render() {
    return (
        <BackgroundContext.Provider value={this.state}>
        {this.props.children}
        </BackgroundContext.Provider>
        )
    
    }
}


    const BackgroundConsumer = BackgroundContext.Consumer;

    export default BackgroundConsumer;