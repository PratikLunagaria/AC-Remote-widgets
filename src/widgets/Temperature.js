import React, { Component } from 'react';
import Tempsvg from './Tempsvg';

export default class Temperature extends Component {
    constructor(props){
        super(props);
        this.state={
            dAngle: 10,
            currentTemp: 19,
            pathProps: 'M 15.39 150 A 98 98 0, 0, 1, 100 2'
        }
        this.updateArc = this.updateArc.bind(this);
        this.increase = this.increase.bind(this);
        this.reduce = this.reduce.bind(this);
    }

    componentDidMount(){
      this.updateArc();
    }

    async increase(){
        if (this.state.currentTemp >= 19 && this.state.currentTemp <= 33){
        await this.setState((prevState, props) => ({
            dAngle: prevState.dAngle+15.225,
            currentTemp: prevState.currentTemp+1
        }))
        this.updateArc();
      }

    }

    async reduce(){
     if (this.state.currentTemp <= 34 && this.state.currentTemp > 19){
      await this.setState((prevState, props) => ({
        dAngle: prevState.dAngle-15.225,
        currentTemp: prevState.currentTemp-1
    }))
    this.updateArc();
  }
  }
    updateArc(){
        var rAngle = this.state.dAngle*(Math.PI / 120);
        var x = 88 - 88 * Math.cos(rAngle) ;
        var y = - 88 * Math.sin(rAngle);
        var big = (rAngle > Math.PI)? 1:0;
          
        var d = 'M0,88 a88,88 0 ' + big + ',1 ' + x + ',' + y;
        // var d = 'M0,90 a90,90 0 ' + big + ',1 ' + x + ',' + y;
        this.setState({
          pathProps: d
        }); 
    };         

    



  render() {
    return (
      <div>
      <div class="knob-surround">
      <div id="knobcontent">
        <div id="temp-col">
            <div className="faded-temp">{this.state.currentTemp-1}°C</div>
            <div className="active-temp">{this.state.currentTemp}°C</div>
            <div className="faded-temp">{this.state.currentTemp+1}°C</div>
        </div>
      </div>
      <Tempsvg pathd={this.state.pathProps}/>
      <span className="min" onClick={this.reduce}>-</span>
      <span className="max" onClick={this.increase}>+</span>
      <div class="ticks">
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
        <div class="tick"></div>
      </div>
      
    </div>
        
      </div>
    )
  }
}
