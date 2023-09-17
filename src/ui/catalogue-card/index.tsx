import React from "react";

type CatalogueCardType = {
    image: string;
    title: string;
    price: string;
    onClick: () => void;
};

const CatalogueCard = ({ image, title, price, onClick }: CatalogueCardType) => {

    return (
        <div
            className="catalogue-card"
            onClick={onClick}
        >
            <div className="catalogue-card_header">
                <img
                    src={image}
                    alt="item-thumbnail-cover"
                    className="cover"
                    loading="lazy"
                />
                <img
                    src={image}
                    alt="item-thumbnail"
                    className="main"
                    loading="lazy"
                />
            </div>
            <div className="catalogue-card_main">
                <div className="catalogue-card_main__price">
                    { price }
                </div>
                <div className="catalogue-card_main__title">
                    { title }
                </div>
            </div>
        </div>
    )
}

export default CatalogueCard;