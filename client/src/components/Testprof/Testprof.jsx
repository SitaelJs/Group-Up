/* eslint-disable react/style-prop-object */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */

import './test.css'

const Testprof = () => (
  <div className="container">

    <div className="wrapper">
      <div className="img-wrapper">
        <img className="profImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qI-Sj1lQI3HVbdlSGtLNryKwc2iN8lkogw&usqp=CAU" alt="userpic" />
      </div>
      <div className="userInfo">
        <h4 className="text">Nick name</h4>
        <h4 className="text">Email</h4>
        <h4 className="text">User information</h4>
      </div>
      <ul>User Stats</ul>
      <div className="stat-area">
        <label htmlFor="">
          <div className="row">
            <div className="column">
              <span className="text">Toxic</span>
            </div>
            <span className="percent">30%</span>
          </div>
          <div className="progress"></div>
        </label>
        <label htmlFor="">
          <div className="row">
            <div className="column">
              <span className="text">Friendly</span>
            </div>
            <span className="percent">60%</span>
          </div>
          <div className="progress"></div>
        </label>
        <label htmlFor="">
          <div className="row">
            <div className="column">
              <span className="text">Team player</span>
            </div>
            <span className="percent">10%</span>
          </div>
          <div className="progress"></div>
        </label>
        <label htmlFor="">
          <div className="row">
            <div className="column">
              <span className="text">Leader</span>
            </div>
            <span className="percent">80%</span>
          </div>
          <div className="progress"></div>
        </label>
        <label htmlFor="">
          <div className="row">
            <div className="column">
              <span className="text">Strategist</span>
            </div>
            <span className="percent">50%</span>
          </div>
          <div className="progress"></div>
        </label>
      </div>
    </div>
  </div>
)

export default Testprof
