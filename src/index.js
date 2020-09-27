import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import back from '../public/img/Back.png';
import backPink from '../public/img/Back-pink.png';
import cat from '../public/img/Cat.png';
import ellipse from '../public/img/Ellipse.png';
import ellipsePink from '../public/img/Ellipse-pink.png';

class Pattern extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBlock(i) {
    console.log(this.props);
    return <Block value={i} />;
  }

  render() { 
    return ( 
        <div className="area">
          <div className="block">
            {this.renderBlock({    
                              selected: 0,
                              h2: "с фуа-гра",  
                              portion: 10,
                              countMouse: "",
                              textMouse: "мышь в подарок",
                              weight: "0,5",
                              selected_description:  "",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "",
                              disable: 0
                              })
                              }
          </div>
          <div className="block">
            {this.renderBlock({    
                              selected: 0,
                              h2: "с рыбой",  
                              portion: 40,
                              countMouse: 2,
                              textMouse: "мыши в подарок",
                              weight: 2,
                              selected_description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "",
                              disable: 0
                              })}
          </div>
          <div className="block">
            {this.renderBlock({    
                              selected: 0,
                              h2: "с курой",  
                              portion: 100,
                              countMouse: 5,
                              textMouse: "мышей в подарок",
                              weight: 5,
                              selected_description:  "",
                              description: "",
                              disable_description: "Печалька с курой закончился.",
                              disable: 1
                              })}
          </div>
        </div>       
      
    );
  }
}

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      back: null,
    };
  }

  blockClick() {
    // console.log(this);
    // this.setState({selected: 1});
   
    // const element = <div tabIndex="0"></div>;
    ReactDOM.render(
      <Pattern value={1} />,
      document.getElementById('root')
      
    );
    
  }

  render () {
    let disable = this.props.value.disable;
    let backColor = this.props.value.selected == 0 ? <img src={back} alt={"back"} className={disable == 1 ? "disable" : ""} /> : <img src={backPink} alt={"backPink"} className={disable == 1 ? "disable" : ""} />;
    let ellipseColor = this.props.value.selected == 0 ? <img src={ellipse} alt={"ellipse"} className={disable == 1 ? "disable" : ""} /> : <img src={ellipsePink} alt={"ellipsePink"} className={disable == 1 ? "disable" : ""} />;

    return (
      <div 
        id={disable == 1 ? "disable_block" : "active"} 
        onClick={() => this.blockClick()}
      > 
      
        {backColor}
        <div className="title_block">
          <span className="first-title"> Сказочное заморское яство </span>
          <h1>Нямушка</h1>
          <h2>{this.props.value.h2}</h2>
          <p><span><b>{this.props.value.portion}</b> порций</span></p>
          <p><span><b>{this.props.value.countMouse}</b> {this.props.value.textMouse}</span></p>
        </div>
        <div className="cat">
          <img src={cat} alt={"cat"} />
        </div>
        <div className="label">
          {ellipseColor}
          <div>
            <span className="weight">{this.props.value.weight}</span>
            <p><span> кг</span></p>
          </div>
        </div>
        <div className="buy-text">
          <span>{disable == 1 ? this.props.value.disable_description : this.props.value.description}</span>
          <span className="buy">{disable == 1 ? "" : "купи"}</span>
        </div>
      </div>
    );

  }

}

ReactDOM.render(
  <Pattern />,
  document.getElementById('root')
);