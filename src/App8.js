import React from 'react';
class App8 extends React.Component {
    state = { name1: "Iwa Alankrit", session: "React JS" }
    render() {
        return (
            <React.Fragment>
                <Person nameProp={this.state} />
                <SessionWork nameProp={this.state} />
            </React.Fragment>
        )
    }
}
class Person extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.nameProp.name1}</h1>
            </React.Fragment>
        )
    }
}

class SessionWork extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.nameProp.session}</h1>
            </React.Fragment>
        )
    }
}
export default App8;