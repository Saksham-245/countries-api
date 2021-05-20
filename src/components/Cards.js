const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.source} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="card-title">{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
