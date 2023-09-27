import React from "react";
export const GifItem = (props) => {
    const { title, url } = props
    return (
      <div>
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    )
  }