import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import back from '../public/img/Back.png';
import backPink from '../public/img/Back-pink.png';
import cat from '../public/img/Cat.png';
import ellipse from '../public/img/Ellipse.png';
import ellipsePink from '../public/img/Ellipse-pink.png';
{/* <img src={require("./public/img/Back.png")} alt={"cat"} /> */}

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
            {this.renderBlock({    
                              taste: "с фуа-гра",  
                              portion: 10,
                              countMouse: "",
                              textMouse: "мышь в подарок",
                              weight: "0,5",
                              selected_description:  "Печень утки разварная с артишоками.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "",
                              disabled: false
                              })
                              }
            {this.renderBlock({    
                              taste: "с рыбой",  
                              portion: 40,
                              countMouse: 2,
                              textMouse: "мыши в подарок",
                              weight: 2,
                              selected_description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "",
                              disabled: false
                              })}
            {this.renderBlock({    
                              taste: "с курой",  
                              portion: 100,
                              countMouse: 5,
                              textMouse: "мышей в подарок",
                              weight: 5,
                              selected_description:  "Филе из цыплят с трюфелями в бульоне.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "Печалька с курой закончился.",
                              disabled: true
                              })}
        </div>       
      
    );
  }
}

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.blockClick = this.blockClick.bind(this)
  }

  blockClick() {
    this.setState({ selected: !this.state.selected });
  }

  render () {
    const { disabled } = this.props.value.disabled;

    let blockClassName = ''
    if (this.props.value.disabled) {
      blockClassName = 'disabled'
    } else if (this.state.selected) {
      blockClassName = 'selected'
    }

    // let disabled = this.props.value.disable;
    // let backColor = this.props.value.selected == false ? <img src={back} alt={"back"} className={disabled == 1 ? "disable" : ""} /> : <img src={backPink} alt={"backPink"} className={disabled == 1 ? "disable" : ""} />;
    // let ellipseColor = this.props.value.selected == false ? <img src={ellipse} alt={"ellipse"} className={disabled == 1 ? "disable" : ""} /> : <img src={ellipsePink} alt={"ellipsePink"} className={disabled == 1 ? "disable" : ""} />;


    return (
      <div className="block"> 
        <div 
          className={'wrapper '.concat(blockClassName)} 
          onClick={() => this.blockClick()}
        >
        {/* {backColor} */}
          <div className="title_block">
            <span> Сказочное заморское яство </span>
            <h1>Нямушка</h1>
            <h2>{this.props.value.taste}</h2>
            <p><span><b>{this.props.value.portion}</b> порций</span></p>
            <p><span><b>{this.props.value.countMouse}</b> {this.props.value.textMouse}</span></p>
          </div>
          <div className="cat">
            <img src={cat} alt={"cat"} />
          </div>
          <div className="label">
            {/* {ellipseColor} */}
            <div>
              <span className="weight">{this.props.value.weight}</span>
              <p><span> кг</span></p>
            </div>
          </div>
        </div>
        <div className="description">
          <span>{disabled == 1 ? this.props.value.disable_description : this.props.value.description}</span>
          <span className="buy">{disabled == 1 ? "" : "купи"}</span>
        </div>
      </div>
    );

  }

}

ReactDOM.render(
  <Pattern />,
  document.getElementById('root')
);