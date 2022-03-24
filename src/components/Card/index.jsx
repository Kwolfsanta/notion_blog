import './index.scss';
import React from 'react';
class Card extends React.Component() {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="" />
        </div>
        <div className="card-section">
          <div className="card-section-title">title</div>
          <div className="card-desc">desc</div>
        </div>
      </div>
    );
  }
}

export default Card;
