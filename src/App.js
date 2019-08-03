import React from 'react';
class Calculator extends React.Component{
  constructor(props){
    super(props)
      this.state={
      item:""
    }
  }
  changevalue=(event)=>{
    var value=this.state.item+event.target.value
    // console.log(value);
    this.setState({
      item:value
    })
    document.getElementById("out").style.backgroundColor="black";
  }
  handleclear=(event)=>{
    this.setState({
      item:""
    })
    document.getElementById("out").style.backgroundColor="black";
  }
  calcu = (event)=>{
    var data=this.state.item
    var out=0
    if (data.includes("+")){
      data=data.split("+")
      for (var i of data){
        out+=parseFloat(i)
      }
    }
    else if (data.includes("-")){
      data=data.split("-")
      out=data[0]-data[1]
    }
    else if (data.includes("*")){
      data=data.split("*")
      out=1
      for (var i of data){
        out*=parseFloat(i)
      }
    }
    else if (data.includes("/")){
      data=data.split("/")
      out=data[0]/data[1]
    }else{
      out=data
    }

    this.setState({
      item:out.toString()
    })
    document.getElementById("out").style.backgroundColor="blue";
    
  }
  cutone=(event)=>{
    var value=this.state.item;
    value=value.slice(0,-1)
    this.setState({
      item:value
    })
    document.getElementById("out").style.backgroundColor="black";
    
  }
  render(){
    return(
      <div className="box">
        {/* <div className="inputbox"><input autoFocus align="right" type="text" ></input></div> */}
        <div className="buttons">
          <div><input id="out" placeholder="🤩😎By Pratik😎🤩   " value={this.state.item}></input></div>
          <div>
            <button value="7" onClick={this.changevalue}>7</button>
            <button value="8" onClick={this.changevalue}>8</button>
            <button value="9" onClick={this.changevalue}>9</button>
            <button value="/" onClick={this.changevalue} className="operator">/</button>

          </div>
          <div>
            <button value="6" onClick={this.changevalue}>6</button>
            <button value="5" onClick={this.changevalue}>5</button>
            <button value="4" onClick={this.changevalue}>4</button>
            <button value="*" onClick={this.changevalue} className="operator">*</button>

          </div>
          <div>
            <button value="3" onClick={this.changevalue}>3</button>
            <button value="2" onClick={this.changevalue}>2</button>
            <button value="1" onClick={this.changevalue}>1</button>
            <button value="-" onClick={this.changevalue} className="operator">-</button>

          </div>
          <div>
            <button value="." onClick={this.changevalue}>.</button>
            <button value="0" onClick={this.changevalue}>0</button>
            <button onClick={this.calcu} >=</button>
            <button value="+" onClick={this.changevalue} className="operator">+</button>

          </div>
          <div>
            <button onClick={this.handleclear} className="clear">CLEAR</button>
            <button onClick={this.cutone} className="cut">CC</button>
          </div>
          {/* <div>
            <button>Clear</button>
          </div> */}
      </div>
      </div>
    )
  }
}
export default Calculator;
