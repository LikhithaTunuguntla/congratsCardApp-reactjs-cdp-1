const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="congrats-head">Congratulations</h1>
    <div className="person-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="desc">
        Vishnu Institute of Engineering and Technology, Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
