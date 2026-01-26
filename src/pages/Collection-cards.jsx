export const Collectioncards = ({ title, description, link, image, description_small, index }) => {
    return (
        <div className="col-md-3 col-6 welcome-cards p-2 mb-3 collection-cards-wrapper"
        >
            <div className={`p-0 collection-cards rounded-4 h-100 d-flex flex-column justify-content-between card-collection-${index}`}>
                <div className="p-4">
                    <h3 className="collection-heading">{title}</h3>
                    <p className="collection-subheading">{description}</p>
                    {/* {description_small && <small>{description_small}</small>} */}
                </div>
                <div>
                    <div className="cards-image-div d-flex justify-content-end align-items-center w-100 rounded-4">
                        <img src={image} alt={title} className="rounded-end-5 collection-card-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};
