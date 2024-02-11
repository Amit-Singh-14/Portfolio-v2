function ExperiemntCard({ id, onClick, active }) {
  function handleClick() {
    onClick(id);
  }
  return (
    <div className={`expCard ${active ? "expanded" : "shrink"}`} onClick={handleClick}>
      <div>{/* <img className={`cardimg ${active ? "cardimgshow" : ""}`} src="" alt=" " /> */}</div>
      <div className="disc">
        <div className="exptdisc">
          <h4 className={`${active ? "" : "hidden"}`}>TITLE</h4>
          {/* className={`${active ? "" : "change"}`} */}
          <p className={`${active ? "" : "hidden"}`}> project name for gtihub.</p>
        </div>
        <span>{id}</span>
      </div>
    </div>
  );
}

export default ExperiemntCard;
