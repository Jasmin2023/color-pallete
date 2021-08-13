import React, { useState } from 'react';
import './colorPalette.styles.scss'; 

class ColorPallete extends React.Component{
    render () {
        let style = {
          backgroundColor: this.props.hexCode
        }
        return (
          <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
            <p className="color-code">{this.props.hexCode}</p>
          </div>
        );
      }
}

export default ColorPallete;