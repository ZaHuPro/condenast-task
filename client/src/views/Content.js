import React from "react";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="content-heading">
        <h1>Ryan Reynolds, Blake Lively Arrive at Film Festival </h1>
        <p> - May 20 2021 10:22 AM</p>
      </div>
      <div className="content-post">
        <div className="content-featured">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Food/full%20page/2.jpg"
            className="featured"
            alt="..."
          />
        </div>
        <div className="content-text">
          <p>
            Omaze is sweetening three of its electric car sweepstakes with an
            add-on opportunity to win a bundle of Apple products. Those who
            enter to win a Tesla Model S, an Audi e-tron Sportback or a Porsche
            T… [+1504 chars]
          </p>

          <p className="author"> -TechCrunchJapan Admin </p>
          <p className="source"> Source(TechCrunch) </p>
        </div>
      </div>
    </div>
  );
}
