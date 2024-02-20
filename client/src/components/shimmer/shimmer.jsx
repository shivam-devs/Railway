import React from 'react'

const Shimmer = () => {
  return (
    <div id="container" >
      <div id="square" className="shimmer"></div>
      <div id="content">
        <div id="title" className="shimmer"></div>
        <div id="desc">
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
          <div className="line shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default Shimmer