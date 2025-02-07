import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error("Caught an error:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>Oops! Something went wrong.</h1>
                    <p>We're sorry for the inconvenience. Please try refreshing the page or return to the main menu.</p>
                    <button onClick={() => this.setState({ hasError: false })}>Try again</button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary