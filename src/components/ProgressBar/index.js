import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  margin-top: 200px;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

export default class ProgressBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      percentage: 20
    }
  }

  clamp = (min, value, max) => {
    return Math.min(Math.max(min,value),max);
  }

  render(){
    return{
      <AppWrapper>
        <ProgressBarContainer>
          <button onClick={() => this.setState({percentage: this.state.percentage + 10})}>increase</button>
          <button onClick={() => this.setState({percentage: this.state.percentage - 10})}>decrease</button>
          <Track>
            <Thumb percentage={this.clamp(0,this.state.percentage,100)} />
          </Track>
        </ProgressBarContainer>
      </AppWrapper
    };
  }
}
