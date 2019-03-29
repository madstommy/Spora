import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import './About.css';

const About = ({showAboutMessage}) => {
    return (
        <Transition
            items={showAboutMessage} 
            from={{height: 0}}
            enter={{height: 'auto'}}
            leave={{height: 0}}>
            {showAboutMessage => showAboutMessage && (props => 
                    <animated.div  class='containerT' style={props}>
                        <h3>Lorem ipsum</h3>
                        <p  className='aboutP'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia sem sit amet neque auctor bibendum. Etiam non ligula tristique, consequat mauris vitae, consequat diam. Donec faucibus nisl ante, nec ullamcorper enim tincidunt vel. Pellentesque sit amet pharetra justo. Morbi at ligula ullamcorper dui luctus dapibus. Quisque ornare ex vel massa fermentum, eu suscipit lorem mollis. In mollis nulla nulla, nec tempor ipsum convallis quis. Sed lobortis lacus lacinia, rutrum ligula vel, tempus nulla.
                            Etiam dui nulla, sagittis nec tellus nec, gravida ultrices risus. Vivamus ut tincidunt dui. Vestibulum placerat feugiat pharetra. Phasellus volutpat scelerisque purus, eget consectetur enim pellentesque a. Nunc non orci dolor. Quisque id egestas dolor. In ut eros nec mauris fringilla blandit. Pellentesque ac scelerisque velit. Vestibulum orci metus, pretium vel vulputate in, malesuada quis orci. Donec diam sapien, fringilla in quam in, vulputate porttitor metus. Morbi posuere orci ac lacus blandit, consectetur sagittis velit mattis. Donec vel risus quis mauris auctor convallis. Nam quam metus, ultrices vitae feugiat id, consequat id est. Phasellus congue sodales magna bibendum hendrerit. Quisque lacus sapien, tempor sed efficitur sed, vehicula condimentum massa.
                        </p>
                    </animated.div>
                    )}
        </Transition>
     
  );
}

export default About;
