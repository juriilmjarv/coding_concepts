import React, { Component } from 'react';
import character from './images/character.svg';
import { relative } from 'path';

class Character extends Component{

    constructor(props) {
        super(props);
        this.state = {
          position: {
              x: 1,
              y: 1
          },
          positionOffset:{
              top: -408,
              left: -153
          }
        };
    }

    dontLetOutTop(){
        if(this.state.positionOffset.top === -408){
            this.state.positionOffset = -408;
        }
    }
    
    moveForward(){
        if(this.state.positionOffset.top === -51){
            this.state.position.y++;
            this.setState(this.state);
        }else{
            this.state.position.y++;
            this.state.positionOffset.top += 51;
            this.setState(this.state);
        }

    }

    moveBack(){
        if(this.state.positionOffset.top === -408){
            this.state.position.y--;
            this.setState(this.state);
        }else{
            this.state.position.y--;
            this.state.positionOffset.top -= 51;
            this.setState(this.state);
        }
    }

    moveLeft(){
        if(this.state.positionOffset.left === -153){
            this.state.position.x--;
            this.setState(this.state);
        }else {
            this.state.position.x--;
            this.state.positionOffset.left -= 51;
            this.setState(this.state);
        }
    }

    moveRight(){
        if(this.state.positionOffset.left === 204){
            this.state.position.x++;
            this.setState(this.state);
        }else {
            this.state.position.x++;
            this.state.positionOffset.left += 51;
            this.setState(this.state);
        }
    }



    render(){
        var style = {
            margin: "0",
            position: "relative",
            left: this.state.positionOffset.left.toString().concat("px"),
            top: this.state.positionOffset.top.toString().concat("px")
        };

        return(
            <img src={character} alt="character" width="50px" id="character" style={style} />
        );
    }
}

export default Character;