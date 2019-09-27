import React from "react";
var unirest = require("unirest");
var output=""
class Words extends React.Component{
  state={
    item:"",
    word:""
  }
  
  getWord=()=>{
    var req = unirest("GET", "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate");
    var word=this.state.item
    req.query({
        source:"en",
        target:"hi",
        input:word
    });
    req.headers({
      "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
      "x-rapidapi-key": "3aef6bc77amshed41b86334520a6p1befe1jsn5edd704640b6"
    });
    var output=req.end(function (res) {
        var out=res.body.outputs[0].output
        document.getElementById("mean").innerHTML=out;
        return out
    });
  }
  onchangehand=(e)=>{
    var letters=e.target.value;
    this.setState({
      item:letters
    })
  }
  render(){
    return(
      <div id="data">
        <div className="child">
        <input onChange={this.onchangehand} value={this.state.item} />
        </div>
        <div className="child">
        <button onClick={this.getWord}>Translate</button>
        </div>
        <div className="child">
        <h1 id="mean"></h1>
        </div>
      </div>
    )
  }
}
export default Words;