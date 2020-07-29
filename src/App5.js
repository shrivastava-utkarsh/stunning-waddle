import React from 'react';

class App5 extends React.Component {
    state = { name: "Girls", job: "Sabka Kaatna" }

    render() {
        return (
            <React.Fragment>
                Name : {this.state.name}
                <br></br>
                Job : {this.state.job}
                <br></br>
                I am : {this.props.name}
                <br></br>
                And my job is : {this.props.job}
            </React.Fragment>
        )
    }
}

export default App5;