import React from "react";

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumber = this.handleNumber.bind(this);
    this.state = {
      input: "1",
      result: "",
    };
  }

  handleNumber(e) {
    console.log(e.target.innerText)
    let caracter=e.target.innerText;
    this.setState(state => {
        return {input:state.input+caracter}
    });
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row h align-items-center">
          <div className="calculadora m-auto">
            <div id="display1" className="row align-items-end">
              <p id="display" className="text-end mb-1 fs-4">
                {this.state.input}
              </p>
            </div>
            <div className="row">
              <button id="clear" className="col">
                AC
              </button>
              <button
                id="divide"
                onClick={this.handleNumber}
                className="col"
              >
                /
              </button>
              <button
                id="multiply"
                onClick={this.handleNumber}
                className="col"
              >
                *
              </button>
            </div>
            <div className="row">
              <button id="seven" onClick={this.handleNumber} className="col">
                7
              </button>
              <button id="eight" onClick={this.handleNumber} className="col">
                8
              </button>
              <button id="nine" onClick={this.handleNumber} className="col">
                9
              </button>
              <button
                id="substract"
                onClick={this.handleNumber}
                className="col"
              >
                -
              </button>
            </div>
            <div className="row">
              <button id="four" onClick={this.handleNumber} className="col">
                4
              </button>
              <button id="five" onClick={this.handleNumber} className="col">
                5
              </button>
              <button id="six" onClick={this.handleNumber} className="col">
                6
              </button>
              <button id="add" onClick={this.handleNumber} className="col">
                +
              </button>
            </div>
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <button id="one" onClick={this.handleNumber}  className="col">
                    1
                  </button>
                  <button id="two"  onClick={this.handleNumber} className="col">
                    2
                  </button>
                  <button id="three"  onClick={this.handleNumber} className="col">
                    3
                  </button>
                </div>
                <div className="row">
                  <button id="zero"  onClick={this.handleNumber} className="col-8">
                    0
                  </button>
                  <button id="decimal"  onClick={this.handleNumber} className="col-4">
                    .
                  </button>
                </div>
              </div>
              <div className="col-3">
                <button id="equals" className="h-100 w-100">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
