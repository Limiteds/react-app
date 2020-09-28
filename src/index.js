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
    return <Block value={i} />;
  }

  render() { 
    return ( 
      
        <div className="area">
          <div class="text-head">
            <span> Ты сегодня покормил кота?</span>
          </div>
            {this.renderBlock({    
                              taste: "с фуа-гра",  
                              hover_message: "Котэ не одобряет?",
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
                              hover_message: "Котэ не одобряет?",
                              portion: 40,
                              countMouse: 2,
                              textMouse: "мыши в подарок",
                              weight: 2,
                              selected_description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "Печалька с рыбой закончился.",
                              disabled: true
                              })}
            {this.renderBlock({    
                              taste: "с курой",  
                              hover_message: "Котэ не одобряет?",
                              portion: 100,
                              countMouse: 5,
                              textMouse: "мышей в подарок",
                              weight: 5,
                              selected_description:  "Филе из цыплят с трюфелями в бульоне.",
                              description: "Чего сидишь? Порадуй котэ, ",
                              disable_description: "Печалька с курой закончился.",
                              disabled: false
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
    let showBuy = false;
    let description = '';
    let hoverMessage = '';
    let blockClassName = '';
    if (this.props.value.disabled) {
      blockClassName = 'disabled'
      description = this.props.value.disable_description;
    } else if (this.state.selected) {
      blockClassName = 'selected'
      hoverMessage = this.props.value.hover_message;
      description = this.props.value.selected_description;
    } else {
      description = this.props.value.description;
      showBuy = true;
    }

    return (
      <div className="block"> 
        <div 
          className={'wrapper '.concat(blockClassName)} 
          onClick={() => this.blockClick()}
        >
          <div className="title_block">
            <span className="title"> Сказочное заморское яство </span>
            <span className="hover_title">{hoverMessage}</span>
            <h1>Нямушка</h1>
            <h2>{this.props.value.taste}</h2>
            <p><span><b>{this.props.value.portion}</b> порций</span></p>
            <p><span><b>{this.props.value.countMouse}</b> {this.props.value.textMouse}</span></p>
          </div>
          <div className="cat">
            <img src={cat} alt={"cat"} />
          </div>
          <div className="label">
            <div>
              <span className="weight">{this.props.value.weight}</span>
              <p><span> кг</span></p>
            </div>
          </div>
        </div>
        <div className="description">
          <span>{description}</span>
          <span 
            className="buy" 
            onClick={() => this.blockClick()}
          >
            {showBuy == true ? "купи" : ""}
          </span>
        </div>
      </div>
    );

  }

}

ReactDOM.render(
  <Pattern />,
  document.getElementById('root')
);