import { Component } from "react";
import Child from "./ChildComponent";

class Parent extends Component {
    constructor(props) {
        console.log("Constructor in Parent Component")
        super(props);
        this.state = {
            name: "Victor"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps in Parent Component");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount in Parent Component");
    }

    getSnapshotBeforeUpdate(prevProps, presState) {
        console.log("getSnapshotBeforeUpdate in Parent Componet");

        return null;
    }

    componentDidUpdate(prevProps, presState, snapshot) {
        console.log("componentDidUpdate in Parent Component");
        console.log(snapshot);
        return true;
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount in Parent Component")
    }

    render() {
        console.log("Render in Parent Component")
        return (
            <div>
                <h3>Parent Component</h3>
                <p>Hello {this.state.name}</p>
                <button onClick={() => this.setState({ name: "Simiyu" })}>
                    Change name
                </button>
            </div>
        );
    }
}

export default Parent;