// components/Card.tsx
import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Card;
