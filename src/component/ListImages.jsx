import React from "react";
import "../css/listimages.css";
import ImageCard from "./ImageCard";

function ListImages(props) {
  return (
    <div className="list-images">
      {props.images.map((i) => (
        <ImageCard key={i.id} image={i} />
      ))}
    </div>
  );
}

export default ListImages;
