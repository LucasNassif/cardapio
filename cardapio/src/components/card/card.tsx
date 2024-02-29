import "./card.css";

interface CardProps {
    price: number;
    title: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ price, image, title }) => {
    return (
        <div className="card">
            <img srcSet={image} alt={title} />
            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
        </div>
    );
};

export default Card;
