import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error.message);
    this.setState({ message: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.message}</p>;
    }
    return this.props.children;
  }
}
