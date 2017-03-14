import React, { Component } from 'react'

import RowInputType1 from '../zhn-moleculs/RowInputType1'
import RowInputType2 from '../zhn-moleculs/RowInputType2'

const STYLE = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  }
}

const inputRows = [
  {
    style : STYLE.ROW_INPUT, caption: "Horizontal Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : STYLE.ROW_INPUT, caption: "Vertical Length",
    min: -30, max: 30, step:1, unit: 'px'
  },{
    style : STYLE.ROW_INPUT, caption: "Blur Radius",
    min: 0, max: 20, step:1, unit: 'px'
  },{
    style : STYLE.ROW_INPUT, caption: "Spread Radius",
    min: -10, max: 20, step:1, unit: 'px'
  },{
    style : STYLE.ROW_INPUT, caption: "Opacity",
    min: 0, max: 1, step: 0.01, unit: ''
  }
]


class InputBoxShadow extends Component {

  constructor(props){
    super()
    const { vLength, gLength, blurR, spreadR, opacity } = props.initValue
    this.vLength = vLength
    this.gLength = gLength
    this.blurR = blurR
    this.spreadR = spreadR
    this.opacity = opacity
  }

  _getBoxShadow = () => {
    return {
      vLength: this.vLength,
      gLength: this.gLength,
      blurR: this.blurR,
      spreadR: this.spreadR,
      opacity: this.opacity
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps &&
        this.props.initValue !== nextProps.initValue ) {
          const { vLength, gLength, blurR, spreadR, opacity } = nextProps.initValue
          this.vLength = vLength
          this.gLength = gLength
          this.blurR = blurR
          this.spreadR = spreadR
          this.opacity = opacity
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps &&
        this.props.initValue === nextProps.initValue ){
      //console.log('skip Input render');
      return false;
    }
    return true;
  }

  _handleChangeInput = (propName, value) => {
     this[propName] = value
     if (this.props.onChange){
      this.props.onChange(this._getBoxShadow())
     }
  }

  _handleEnter = (propName, value) => {
    console.log(propName)
    console.log(value)
    if (this.props.onEnter){
      this.props.onEnter(propName, value)
    }
  }

  render(){
    const { style, initValue, configStyle } = this.props
        , {
            vLength, gLength,
            blurR, spreadR,
            opacity
          } = initValue
        , {
            bgColor,
            boxColor, boxBorderRadius
          } = configStyle
    return (
      <div style={style}>
        <RowInputType1
           {...inputRows[0]}
            initValue={vLength}
            onChange={this._handleChangeInput.bind(this, 'vLength')}
        />
        <RowInputType1
           {...inputRows[1]}
           initValue={gLength}
           onChange={this._handleChangeInput.bind(this, 'gLength')}
        />
        <RowInputType1
           {...inputRows[2]}
           initValue={blurR}
           onChange={this._handleChangeInput.bind(this, 'blurR')}
        />
        <RowInputType1
           {...inputRows[3]}
           initValue={spreadR}
           onChange={this._handleChangeInput.bind(this, 'spreadR')}
        />
        <RowInputType2
           style={STYLE.ROW_INPUT}
           caption="Shadow Color"
           initValue="#000000"
        />
        <RowInputType1
           {...inputRows[4]}
           initValue={opacity}
           onChange={this._handleChangeInput.bind(this, 'opacity')}
        />
        <RowInputType2
           style={STYLE.ROW_INPUT}
           styleInput={STYLE.BOX_INPUT}
           caption="Background Color"
           initValue={bgColor}
           onEnter={this._handleEnter.bind(this, 'bgColor')}
        />
        <RowInputType2
           style={STYLE.ROW_INPUT}
           styleInput={STYLE.BOX_INPUT}
           caption="Box Color"
           initValue={boxColor}
           onEnter={this._handleEnter.bind(this, 'boxColor')}
        />
        <RowInputType2
           style={STYLE.ROW_INPUT}
           styleInput={STYLE.BOX_INPUT}
           caption="Box Border Radius"
           initValue={boxBorderRadius}
           onEnter={this._handleEnter.bind(this, 'boxBorderRadius')}
        />
      </div>
    )
  }
}

export default InputBoxShadow
