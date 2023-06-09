import "./ContentPage.css";

const RowElement = ({ title, desc, avatar }) => {
  return (
    <div className="content-row">
      <div className="avatar-circle">
        <img src={avatar} alt="Avatar" className="avatar-img" />
      </div>
      <div className="row-container">
        <h3 className="content-title">{title}</h3>
        {desc &&
          desc.map((d, index) => {
            return desc.length === 1 ? (
              <p className="content-description" key={index}>
                {d}
              </p>
            ) : (
              <ul key={index}>
                <li className="content-description">{d}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default RowElement;
