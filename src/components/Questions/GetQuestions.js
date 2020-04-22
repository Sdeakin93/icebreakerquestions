import React from 'react';

class GetQuestions extends React.Component {
    render() {
  
      return (
        <div style={{ backgroundColor: "white" }} className="quotebox">

      <h1>Sarah's Icebreaker Generator</h1>
          <div key={Math.random()} >
            <h2 id="body">"{this.props.body}"</h2>
          </div>
          <button id="newquote" onClick={this.props.handleClick}>
            Click for an fun question
          </button>
        </div>
      );
    }
  }
  
  export default GetQuestions;