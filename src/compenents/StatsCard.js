import React from "react";

function StatsCard(props) {
  return (
    /*static part*/
    <section className="stat-section">
      <div className="stat-description">
        <div className="stat-header">
          <h2>
            The world's
            <br /> biggest healthcare platform
          </h2>
          <p>
            We work from 6 offices all over the world, bringing Docplanner{" "}
            <br /> Group to life in almost 20 countries.
          </p>
        </div>
        <img
          className="stat-docplaner-logo"
          src="https://www.docplanner.com/img/logo.png"
          alt="logo"
        />
      </div>

      {/* stat card */}
      <div className="stats">
        {props.statsItem.map(function(stat, i) {
          return (
            <div key={i} className={stat.divname}>
              <img
                src={stat.imagesrc}
                srcSet={stat.imagesrcet}
                alt="fail to load"
              />
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsCard;
