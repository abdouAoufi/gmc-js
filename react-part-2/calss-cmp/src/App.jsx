//! Functional Component

import React from "react";

const AppF = (props) => {
    return <div > { props.text } < /div>;
};

class AppC extends React.Component {
    render() {
        return <div > { this.props.text } < /div>;
    }
}

export default AppC;