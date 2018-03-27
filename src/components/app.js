/**
 * Created by serhan.i on 3/27/18.
 */
import React from 'react';
export default class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        let result =  this.props.operations.join("")  + (this.props.result ? (" = " + this.props.result) : "");
        return ( <div id='calc-contain'>
            <div  name="answer"> {result}</div>
                    <br/>
            <div name="error" className="error">{this.props.error}</div>
                    <br/>

                        <input type="button" value=" 1 " onClick={this.props.number1Click} />
                        <input type="button" value=" 2 " onClick={this.props.number2Click} />
                        <input type="button" value=" 3 " onClick={this.props.number3Click} />
                        <input type="button" value=" + " onClick={this.props.addClick} />
                        <br/>

                        <input type="button" value=" 4 " onClick={this.props.number4Click} />
                        <input type="button" value=" 5 " onClick={this.props.number5Click} />
                        <input type="button" value=" 6 " onClick={this.props.number6Click} />
                        <input type="button" value=" - " onClick={this.props.minusClick} />
                    <br/>

                    <input type="button" value=" 7 " onClick={this.props.number7Click} />
                    <input type="button" value=" 8 " onClick={this.props.number8Click} />
                    <input type="button" value=" 9 " onClick={this.props.number9Click} />
                    <input type="button" value=" x " onClick={this.props.multiplyClick} />
                <br/>

                <input type="button" value=" 0 " onClick={this.props.number0Click}/>
                <input type="button" value=" = " onClick={this.props.calculate} />
                <input type="button" value=" / " onClick={this.props.divideClick} />
            <br/>
    </div>)
    }
}
