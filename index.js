const element = (
  // Write your code here.
  <div className="bg-container">
    <div className="inner-container">
      <h1 className="heading-1">Congratulations</h1>
      <div className="card-1">
        <div className="ele-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="img-profile"
          />
          <h1 className="profile-heading">Kiran V</h1>
          <p className="profile-paragraph">
            Vishnu Institute of Computer Education and Technology, Bhimavaram
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="img-watch"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
