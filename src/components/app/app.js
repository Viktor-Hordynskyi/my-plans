import React from 'react';
import './app.scss'

function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="myPlans__title">My Plans</h1>

        <div className="add">
          <form className="add__form">
            <button className="btn">Add plan</button>
            <input type="text" className="add__input" />
          </form>
        </div>

        <div className="filter">
          <h3>
            Filtered by:
          </h3>

          <button className="btn active">All</button>
          <button className="btn">Today</button>
          <button className="btn">Done</button>
          <button className="btn">Important</button>
        </div>

        <div className="plans">
          <div className="plans__element">
            <div className="plans__date">
              <h3>
                Today
              </h3>
            </div>

            <div className="plans__data">
              <ul>
                <li className="done">
                  <input type="checkbox" checked/>
                  Lorem ipsum dolor sit amet.
                  </li>
                <li className="important">
                  <input type="checkbox"/>
                  Fugiat dicta rem facilis atque.
                  </li>
                <li>
                  <input type="checkbox"/>
                  Nesciunt ut ad illum quas!
                  </li>
                <li>
                  <input type="checkbox"/>
                  Quibusdam dolorum adipisci omnis obcaecati.
                  </li>
                <li className="important">
                  <input type="checkbox"/>
                  Ut quia labore consequuntur architecto.
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
