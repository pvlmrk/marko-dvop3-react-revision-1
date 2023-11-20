const CardDynamic = ({ title, description, link, linkText }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
    );
  };
  
export default CardDynamic;