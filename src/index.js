import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import data from './data.js';
import cat from '../public/img/Cat.png';

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
          <div className="text-head">
            <span> Ты сегодня покормил кота?</span>
          </div> 
          {data.data.map(item => <Block {...item} />)}
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

  blockClick= () => {
    this.setState({ selected: !this.state.selected, withoutHover: true });
  }

  onMouseOutHandle = () => {
    this.setState({ withoutHover: false });
  }

  render () {
    let showBuy = false;
    let description = '';
    let hoverMessage = '';
    let blockClassName = '';
    
    if (this.props.disabled) {
      blockClassName = 'disabled'
      description = this.props.disable_description;
    } else if (this.state.selected) {
      blockClassName = 'selected'
      hoverMessage = this.props.hover_message;
      description = this.props.selected_description;
      if (this.state.withoutHover && this.state.selected) {
        blockClassName += ' without-hover'
      }
    } else {
      description = this.props.description;
      showBuy = true;
    }

    return (
      <div className="block"> 
        <div 
          className={'wrapper '.concat(blockClassName)} 
          onClick={() => this.blockClick()} 
          onPointerLeave={this.onMouseOutHandle}
        >
          <div className="title_block">
            <span className="title"> Сказочное заморское яство </span>
            <span className="hover_title">{hoverMessage}</span>
            <h1>Нямушка</h1>
            <h2>{this.props.taste}</h2>
            <p><span><b>{this.props.portion}</b> порций</span></p>
            <p><span><b>{this.props.count_mouse}</b> {this.props.text_mouse}</span></p>
            <p><span>{this.props.extra_information}</span></p>
          </div>
          <div className="cat">
            <img src={cat} alt={"cat"} />
          </div>
          <div className="label">
            <div>
              <span className="weight">{this.props.weight}</span>
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