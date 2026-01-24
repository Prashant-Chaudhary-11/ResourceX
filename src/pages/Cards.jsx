export const Cards = ({ title, description, link, image, description_small, index, scrollY }) => {
  // index: 0,1,2,3
  const moveUpCards = index === 1 || index === 3; // 2nd and 4th

  // limit movement to max 22px (smooth)
  const offset = moveUpCards ? Math.min(182, scrollY * 0.09) : 0;

  return (
    <div className="col-3 welcome-cards">
      <div
        className="cards-page shadow rounded-5 m-3 d-flex flex-column justify-content-between"
        style={{
          transform: `translateY(-${offset}px)`,
          transition: "transform 0.08s linear",
          willChange: "transform",
        }}
      >
        <div>
          <h3>{description}</h3>
          <p>{description_small}</p>
        </div>

        <div>
          <div className="cards-image-div d-flex justify-content-between align-items-center w-100 rounded-4">
            <h3>{title}</h3>
            <img width="auto" height="150" src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};
