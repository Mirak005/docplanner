import React from "react";

function Card(props) {
  return( <section className="services">{ props.cardItem.map(function(el, i) {
    return (
      <div key={i} className={el.divname}>
        <h2>
          <span>{el.title}</span><br/>
          {el.description}
        </h2>
        {!el.option?null: <select>{el.option.map( (el,i) => <option key={i}value={el}>{el}</option>) }</select>}
        <img className={el.imageClas} src={el.imageLink} alt="fail to load" />
      </div>
    )
  })}
  </section>
  )
  
  
}

export default Card;
