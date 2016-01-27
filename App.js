import React from 'react';
import ReactDOM from 'react-dom';

/*
The render method can only return one HTML (actually JSX but whatever) tag. So
if we returned <i></i> <b></b>, then the browser would shit its pants. In this
case it would have been better to wrap the <i> and <b> tags into a containing
div to hold both so that return only actually returns one thing.

Also, it's good to wrap your HTML (actually JSX, yes) content in ( ); to freely
utilize whitespace. If you don't use the parenthesis with semicolon, the browser
predictably shits the bed by rendering nothing.

Props, mostly static values passed to components for use, states to be managed by
components themselves.

The constructor acts like it did in C++ if you remember, when a class is instantiated
as an object in C++ the constructor would run. Similarly when we use the App class,
the constructor initializes this.state as {txt: 'this is the state text'}. Since the
render function returns this.state.txt, it's like it's returning the default value.

updateTheState is a custom method. e = event, so event's target value

for <input type="text" onChange={this.updateTheState.bind(this)} />, we're binding the
updates to the input field to "txt:" through this.updateTheState.

By moving:
<div>
    <input type="text" onChange={props.updateTheState} />
    <div>{props.txt}</div>
</div>
into the WIDGET const, we can turn that into a... widget of sorts. So when you look at render,
you can just repeat the widget a bunch of times using less code. Composit component since it's
an immediate relative/child of App.

ReactDOM.findDOMNode(this.ref.red).value will reach out to the DOM and go to the input
where the ref is to red and pull its value.
*/
class App extends React.Component {
    constructor() {
        super();
        this.state={
            red: 0,
            green: 0,
            blue: 0
        }
    }
    updateTheState (e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render(){
        return (
            <div>
                <Slider ref="red" sliderUpdateTheState={this.updateTheState} />
                {this.state.red}
                <br />
                <Slider ref="green" sliderUpdateTheState={this.updateTheState} />
                {this.state.green}
                <br />
                <Slider ref="blue" sliderUpdateTheState={this.updateTheState} />
                {this.state.blue}
                <br />
            </div>
        );
    }
}

class Slider extends React.Component {
  render(){
    return (
        <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.updateTheState} />
        </div>
    );
  }
}

// I used h1 here instead of having the text appear in a div alone since it wasn't
// rendering the text when I tried the latter way. Using proper h1 or even p tags
// worked fine though.
const WIDGET = (props) => {
    return (
        <div>
            <input type="text" onChange={props.widgetUpdateTheState} />
            <h1>{props.widgetTxt}</h1>
        </div>
    );
}

// App.propTypes = {
//     txt: React.PropTypes.string
// }
//
// App.defaultProps ={
//     txt: 'this is default text'
// }

// Stateless function:
// const App = () => <div>Hi</div>
export default App
