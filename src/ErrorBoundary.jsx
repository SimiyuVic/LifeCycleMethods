import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // Fallback UI when an error occurs
            return (
                <div className="p-4 bg-red-100 text-red-700 rounded">
                    <h2>Something went wrong. Please try refreshing the page.</h2>
                </div>
            );
        }

        // Render children normally if there are no errors
        return this.props.children;
    }
}
 
export default ErrorBoundary;