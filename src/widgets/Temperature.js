import React, { Component } from 'react'

export default class Temperature extends Component {
    constructor(props){
        super(props);
        this.state={
            dAngle: 0,
            prevTemp: 19,
            currentTemp: 20,
            nextTemp:21
        }
        this.updateArc = this.updateArc.bind(this);
    }

    increase(){
        this.setState({
            dAngle: this.state.dAngle+1
        })
    }
    updateArc(dAngle){
        var rAngle = this.state.dAngle*(Math.PI / 180);
        var x = 88 - 88 * Math.cos(rAngle) ;
        var y = - 88 * Math.sin(rAngle);
        var big = (rAngle > Math.PI)? 1:0;
        var d = 'M0,88 a88,88 0 ' + big + ',1 ' + x + ',' + y;
        var path = document.getElementById("cp");
        path.setAttribute('d', d);
        var knob = document.getElementById("knob");
        knob.style.webkitTransform = 'rotate('+(dAngle)+'deg)'; 
    };


  render() {
    return (
      <div>
      <div class="knob-surround">
  
      <div id="knob">
        <div id="temp-col">
            <div className="faded-temp">{this.state.prevTemp}°C</div>
            <div className="active-temp">{this.state.currentTemp}°C</div>
            <div className="faded-temp">{this.state.nextTemp}°C</div>
        </div>
      </div>
      <svg id='level'>
        <path d='M 15.39 150 A 98 98 0, 0, 1, 100 2' fill='none' stroke-width='5' stroke='#26BEF0'></path>
    </svg>
      <span className="min">-</span>
      <span className="max">+</span>
      <div class="ticks">
        <div class="tick activetick"></div>
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
        <div class="tick activetick"></div>
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
