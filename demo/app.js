'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import createReactClass from 'create-react-class';

window.React = React;

const App = createReactClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0 }; },

  render() {
    const slideStyle = {backgroundColor: '#eeeeee', width: '765px', height: '300px'};

    return (
      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref="carousel"
          data={this.setCarouselData.bind(this, 'carousel')}
          dragging={false}
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <div style={slideStyle}>
            <input type="checkbox" id="sample-checkbox" />
            <label htmlFor="sample-checkbox">Sample checkbox</label>
          </div>
          <img src="http://placehold.it/1000x400&text=slide1"/>
          <img src="http://placehold.it/1000x400&text=slide2"/>
          <img src="http://placehold.it/1000x400&text=slide3"/>
          <img src="http://placehold.it/1000x400&text=slide4"/>
          <img src="http://placehold.it/1000x400&text=slide5"/>
          <img src="http://placehold.it/1000x400&text=slide6"/>
        </Carousel>
        <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
      </div>
    )
  }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content)
