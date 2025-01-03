// interfaces/index.ts

// Interface for CardProps
export interface CardProps {
  title: string;
  description?: string; // Optional property
  imageSrc?: string; // Optional property for the card image
  onClick?: () => void; // Optional click handler
}

// Interface for ButtonProps
export interface ButtonProps {
  label: string;
  onClick: () => void; // Click handler is required
  disabled?: boolean; // Optional disabled state
  type?: "button" | "submit" | "reset"; // Optional button type
  className?: string; // Optional custom className
}

// Interface dor structure of property
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: Array<string>;
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
