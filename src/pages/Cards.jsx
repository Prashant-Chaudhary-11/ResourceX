export const Cards = ({ title, description, link, image, description_small, index, scrollY }) => {
    // index: 0,1,2,3
    const moveUpCards = index === 1 || index === 3; // 2nd and 4th

    // limit movement to max 22px (smooth)
    const offset = moveUpCards ? Math.min(182, scrollY * 0.09) : 0;

    return (
        <div className="col-md-3 col-6 welcome-cards">
            <div
                className="cards-page shadow-sm rounded-5 mb-4 d-flex flex-column justify-content-between position-relative"
                style={{
                    transform: `translateY(-${offset}px)`,
                    transition: "transform 0.08s linear",
                    willChange: "transform",
                }}
            >   
                <div className="card-home-tite">{title}</div>
            <div>
                {/* <div className="text-center">
                    <img width="auto" height="150" src={image} alt={title} />
                </div> */}
                {/* <div> */}
                    <div className="cards-image-div d-flex flex-column  w-100 rounded-4">
                        <div>
                            <div className="cards-badge">#{title}</div>
                        </div>
                        <p className="card-small-text mb-4 fst-italic">{description_small}</p>
                        <h6 className="text-">{description}</h6>
                    </div>
                {/* </div> */}
            </div>
           
            </div>
        </div>
    );
};
