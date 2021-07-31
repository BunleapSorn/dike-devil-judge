export default function Voting() {
  return (
    <div className="voting">
      <h3>
        "<span>Your Choice?</span>"
      </h3>
      <p>
        *Voting opportunity is once a day and cannot be overturned. Please vote
        carefully.
      </p>
      <div className="vote-ref">
        <div className="gul-wrap">
          <div className="gul"></div>
          <span>Guilty</span>
        </div>
        <div className="no-gul-wrap">
          <div className="no-gul"></div>
          <span>Not Guilty</span>
        </div>
      </div>
      <div className="vote-prog">
        <div className="guilt">90%</div>
        <div className="no-guilt">10%</div>
      </div>
      <div className="Button">
        <button className="but-gul">Guilty</button>
        <button className="but-no-gul">Not Guilty</button>
      </div>
    </div>
  );
}
