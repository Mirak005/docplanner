import React from "react";

function Links(props) {
  return (
    <section className="offices-section">
      <div className="offices-header">
        <h2>
          {" "}
          Improve the lives of millions.
          <br /> Change yours forever
        </h2>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          <br /> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City
          <br /> and Curitiba, our search for great talent never stops.
        </p>
      </div>

      <div className="offices-link">
        {props.linkItem.map(function(link, i) {
          return (
            <a href={link.link} key={i}>
              <figure className={link.figclass}>
                <img
                  scr={link.imagesrc}
                  srcSet={link.imagesrcet}
                  alt="Fail to load"
                />
                <figcaption>
                  {" "}
                  {link.countryName}
                  <button>{link.buttonLabel}</button>
                </figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Links;
