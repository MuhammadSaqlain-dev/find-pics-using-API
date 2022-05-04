import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    // React Ref API
    this.imageRefs = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRefs.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRefs.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRefs} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
