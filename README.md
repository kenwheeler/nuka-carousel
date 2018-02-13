# vuka-carousel

A Pure ReactJS Carousel Component

![http://i.imgur.com/UwP5gle.gif](http://i.imgur.com/UwP5gle.gif)

### Install

```
npm install nuka-carousel
```

### Example
```javascript
import React from 'react';
import Carousel from '../src/carousel';
import Decorators from '../src/decorators'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
      carousels: {}
    }
  }

  setCarouselData = () => {
    this.setState({
      carousels: {
        carousel: this.carouselComponent
      }
    })
  }

  render() {
    return (
      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref={ref => { this.carouselComponent = ref }}
          data={this.setCarouselData}
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
          decorators={Decorators}
        >
          <img src="http://placehold.it/1000x400&text=slide1"/>
          <img src="http://placehold.it/1000x400&text=slide2"/>
          <img src="http://placehold.it/1000x400&text=slide3"/>
          <img src="http://placehold.it/1000x400&text=slide4"/>
          <img src="http://placehold.it/1000x400&text=slide5"/>
          <img src="http://placehold.it/1000x400&text=slide6"/>
        </Carousel>
        <button onClick={() => this.carouselComponent.goToSlide(0)}>1</button>
        <button onClick={() => this.carouselComponent.goToSlide(1)}>2</button>
        <button onClick={() => this.carouselComponent.goToSlide(2)}>3</button>
        <button onClick={() => this.carouselComponent.goToSlide(3)}>4</button>
        <button onClick={() => this.carouselComponent.goToSlide(4)}>5</button>
        <button onClick={() => this.carouselComponent.goToSlide(5)}>6</button>
      </div>
    )
  }
}
```

### Running demo locally

The demo can be launched on local machine via `webpack-dev-server`. Run the following:

```javascript
// if webpack-dev-server is not installed globally
./node_modules/.bin/webpack-dev-server

```
Now, you can access the application on  your localhost at following url: <a href="http://localhost:8080/demo" target="_blank">Demo</a>

### Props

#### afterSlide
`React.PropTypes.func`

Hook to be called after a slide is changed.

#### autoplay
`React.PropTypes.bool`

Autoplay mode active. Defaults to false.

#### autoplayInterval
`React.PropTypes.number`

Interval for autoplay iteration. Defaults to 3000.

#### beforeSlide
`React.PropTypes.func`

Hook to be called before a slide is changed.

#### cellAlign
`React.PropTypes.oneOf(['left', 'center', 'right'])`

When displaying more than one slide, sets which position to anchor the current slide to.

#### cellSpacing
`React.PropTypes.number`

Space between slides, as an integer, but reflected as `px`

#### data
`React.PropTypes.func`

Used with the ControllerMixin to add carousel data to parent state.

#### decorators
`React.PropTypes.array`

An array of objects that supply internal carousel controls.
Decorator objects have `component`, `position` & `style` properties. `component` takes a React component, `position` takes a predefined position string and `style` takes an object of styles to be applied to the decorator. See an example below:

```javascript
var Decorators = [{
  component: createReactClass({
    render() {
      return (
        <button
          onClick={this.props.previousSlide}>
          Previous Slide
        </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
}];

// Valid position properties are TopLeft, TopCenter, TopRight
// CenterLeft, CenterCenter, CenterRight, BottomLeft, BottomCenter
// and BottomRight
```

#### dragging
`React.PropTypes.bool`

Enable mouse swipe/dragging

#### easing
`React.PropTypes.string`

Animation easing function. See valid easings here: [https://github.com/chenglou/tween-functions](https://github.com/chenglou/tween-functions)

#### framePadding
`React.PropTypes.string`

Used to set the margin of the slider frame. Accepts any string dimension value such as `"0px 20px"` or `"500px"`.

#### frameOverflow
`React.PropTypes.string`

Used to set overflow style property on slider frame. Defaults to `hidden`.

#### edgeEasing
`React.PropTypes.string`

Animation easing function when swipe exceeds edge. See valid easings here: [https://github.com/chenglou/tween-functions](https://github.com/chenglou/tween-functions)

#### initialSlideHeight
`React.PropTypes.number`

Initial height of the slides in pixels.

#### initialSlideWidth
`React.PropTypes.number`

Initial width of the slides in pixels.

#### Placeholder
`React.PropTypes.func`

Placeholder component.

#### placeholderMode
`React.PropTypes.bool`

Activates placeholder mode (rendering a Placeholder instead of Slide for some slides). Defaults to `false`.
If placeholderMode is activated, a Placeholder component must be provided. Otherwise, the real Slide will be rendered.

#### preloadedChildrenLevel
`React.PropTypes.number`

Sets the level of preloaded children, for which the real Slide is rendered (not including the current slide), when placeholderMode is active. Defaults to `1`.

#### Slide
`React.PropTypes.func`

Slide component.

#### slideIndex
`React.PropTypes.number`

Manually set the index of the slide to be shown.

#### slidesToShow
`React.PropTypes.number`

Slides to show at once.

#### slidesToScroll
```
slidesToScroll: React.PropTypes.oneOfType([
  React.PropTypes.number,
  React.PropTypes.oneOf(['auto'])
])
```

Slides to scroll at once. Set to `"auto"` to always scroll the current number of visible slides.

#### slideWidth

`React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])`

Manually set slideWidth. If you want hard pixel widths, use a string like `slideWidth="20px"`, and if you prefer a percentage of the container, use a decimal integer like `slideWidth={0.8}`

#### speed
`React.PropTypes.number`

Animation duration.

#### swiping
`React.PropTypes.bool`

Enable touch swipe/dragging

#### vertical
`React.PropTypes.bool`

Enable the slides to transition vertically.

#### width
`React.PropTypes.string`

Used to hardcode the slider width. Accepts any string dimension value such as `"80%"` or `"500px"`.

#### wrapAround
`React.PropTypes.bool`

Sets infinite wrapAround mode. Defaults to `false`

### ControllerMixin

The ControllerMixin provides a way to add external controllers for a carousel. To use the controller mixin, add it to your parent component as shown below:

```javascript
const App = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel ref="carousel" data={this.setCarouselData.bind(this, 'carousel')}>
        ...
      </Carousel>
    )
  }
});
```

It is required to give your component a ref value, and to pass the setCarouselData method to the data prop with the same ref as an argument.

After setting this up, your parent component has a carousels object in it's state. You can now control your carousels from other child components:

```javascript
const App = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel ref="carousel" data={this.setCarouselData.bind(this, 'carousel')}>
        ...
      </Carousel>
      {this.state.carousels.carousel ? <button type="button" onClick={this.state.carousels.carousel.goToSlide.bind(null,4)}>
        Go to slide 5
      </button> : null}
    )
  }
});

```

###  Contributing

See the [Contribution Docs](CONTRIBUTING.md).
