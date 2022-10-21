import React from 'react';

class Calculadora extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            input:'',
            result:''
        }
    }

    render(){
        return(
            <div className='container text-center'>
            <div className='row h align-items-center'>
                <div className='calculadora m-auto'>
                 <div id='display1' className="row align-items-end">
                   <p id='display' className="text-end mb-1 fs-4">display</p>
                 </div>
                <div className="row">
                 <button id='clear' className="col">
                    AC
                 </button>
                 <button id='divide' className="col">
                    /
                 </button>
                 <button id='multiply' className="col">
                    *
                 </button>
                </div>
                <div className="row">
                 <button id='seven' className="col">7</button>
                 <button id='eight' className="col">8</button>
                 <button id='nine' className="col">9</button>
                    <button id='substract' className="col">-</button>
                </div>
                <div className="row">
                 <button id='four' className="col">4</button>
                 <button id='five' className="col">5</button>
                 <button id='six' className="col">6</button>
                    <button id='add' className="col">+</button>
                </div>
                <div className="row">
                 <div className="col-9">
                     <div className="row">
                 <button id='one' className="col">1</button>
                 <button id='two' className="col">2</button>
                 <button id='three' className="col">3</button>
                         </div>
                    <div className="row">
                         <button id='zero' className="col-8">0</button>
                         <button id='decimal' className="col-4">.</button>
                    </div>
                </div>
                <div className="col-3">
                 <button id='equals' className="h-100 w-100">=</button>
                </div>
                </div>
                
                </div>
            </div>
            </div>
        )
    }
}

export default Calculadora;