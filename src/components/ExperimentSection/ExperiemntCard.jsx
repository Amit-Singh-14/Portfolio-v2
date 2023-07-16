function ExperiemntCard({ id, onClick, active }) {
  function handleClick() {
    onClick(id);
  }
  return (
    <div className={`expCard ${active ? "expanded" : "shrink"}`} onClick={handleClick}>
      <div>
        <img className="cardimg" src="/images/a.png" alt=" " />
      </div>
      <div className="disc">
        <div className="exptdisc">
          <h4>TITLE</h4>
          <p>project name for gtihub.</p>
        </div>
        <span>01</span>
      </div>
    </div>
  );
}

export default ExperiemntCard;
