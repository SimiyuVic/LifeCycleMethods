import { Component } from "react";

class Child extends Component {
    constructor(props) {
        console.log("Constructor in Child Component")
        super(props);
        this.state = { 
            name: "Victor"
         }
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps in Child Component");
        return null;
    }

    componentDidMount()
    {
        console.log("componentDidMount in Child Component");
    }
    
    render() {
        console.log("Render in Child Component") 
        return ( 
            <div>
                <h3>Child Component</h3>
            </div>
         );
    }
}
 
export default Child;