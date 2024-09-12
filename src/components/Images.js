import React from 'react';
import two from "../assests/images/adonis.jpg";
import three from "../assests/images/apollo.jpg";
import four from "../assests/images/bird wing.jpg";
import five from "../assests/images/blue morpho.jpg";
import six from "../assests/images/gulf.jpg";
import seven from "../assests/images/monarch.jpg";
import eight from "../assests/images/red admiral.jpg";
import nine from "../assests/images/swallow.jpg";


function Images({ name, imgSrc, altText }) {
    return (
        <div className="images">
            <img src={imgSrc} alt={altText} />
            <h5>{name}</h5>
        </div>
    );
}

const imageArray = [
    { name: "Adonis Blue", imgSrc: two, altText: "Adonis Blue Butterfly" },
    { name: "Apollo", imgSrc: three, altText: "Apollo Butterfly" },
    { name: "Birdwing Butterfly", imgSrc: four, altText: "Birdwing Butterfly" },
    { name: "Menelaus Blue Morpho", imgSrc: five, altText: "Menelaus Blue Morpho Butterfly" },
    { name: "Gulf Fritillary", imgSrc: six, altText: "Gulf Fritillary Butterfly" },
    { name: "Monarch Butterfly", imgSrc: seven, altText: "Monarch Butterfly" },
    { name: "Red Admiral", imgSrc: eight, altText: "Red Admiral Butterfly" },
    { name: "Swallowtail", imgSrc: nine, altText: "Swallowtail Butterfly" },
];

function Gallery() {
    return (
        <div className="image_container">
            {imageArray.map((image, index) => (
                <Images
                    key={index}
                    name={image.name}
                    imgSrc={image.imgSrc}
                    altText={image.altText}
                />
            ))}
        </div>
    );
}

export default Gallery;
