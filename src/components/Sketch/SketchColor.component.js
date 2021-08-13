import React, { useState } from 'react';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';
import './SketchColor.styles.scss';
 
class SketchColor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: 5,
            displayColorPicker: false,
            color: {
                r: '255',
                g: '255',
                b: '255',
                a: '1',
            },   
        };
      }
     
     
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };
     
    handleChange = (color) => {
        this.setState({ color: color.rgb });
    }
    
    render(){
        

        const styles = reactCSS({
            'default': {
              color: {
                width: '100%',
                height: '200px',
                borderRadius: '2px',
                background: `rgba(${this.state.color.r}, ${ this.state.color.g}, ${ this.state.color.b}, ${this.state.color.a})`,
              }
            },
          });

        return(
            <div className="col">
                
                <div className="swatch" onClick={this.handleClick}>
                     
                    <div style={styles.color} />
                </div>
                { this.state.displayColorPicker ? <div className="popover">
                <div className="cover" onClick={this.handleClose}/>
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </div> : null }
            </div>
        )
    }
}

export default SketchColor;