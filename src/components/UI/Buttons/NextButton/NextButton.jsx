import React, { Component } from 'react';
// import styled from 'styled-components';

// const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

class NextButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-info btn-lg btn-block"
        disabled={this.props.disabled}
        onClick={e => this.props.handleNext(e)}
      >
        Next
      </button>
    );
  }
}

export default NextButton;
