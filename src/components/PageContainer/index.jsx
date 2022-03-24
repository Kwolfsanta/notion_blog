import './index.scss';
import React from 'react';
class PageContainer extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-container-content">
        <div className="page-container-img">
          <img src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="" />
        </div>
          <div className="page-container-content-title">
            <h1>Page Container</h1>
          </div>
          <div className="page-container-content-desc">
            <p>
              PageContainer is a container for the whole page.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContainer;
