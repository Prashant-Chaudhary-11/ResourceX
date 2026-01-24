export const Collectioncards = ({ title, description, link, image, description_small, index }) => {
    return (
        <div className="col-md-3 col-6 welcome-cards p-0 collection-cards-wrapper">
            <div className={`p-0 shadow rounded-5 m-3 d-flex flex-column justify-content-between card-collection-${index}`}>
                <div className="p-4">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {description_small && <small>{description_small}</small>}
                </div>
                <div>
                    <div className="cards-image-div d-flex justify-content-end align-items-center w-100 rounded-4">
                        <img height="200" src={image} alt={title} className="rounded-end-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
