export enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

export type Review = {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description?: string;
};

export type User = {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
};

export interface Property {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export function showReviewTotal(
  reviewTotalDisplay: HTMLElement,
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = isLoyalty == LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function populateUser(
  returningUserDisplay: HTMLElement,
  userNameDisplay: HTMLElement,
  isReturning: boolean,
  userName: string
) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function buildPropertyElement(data: Property) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = data.title;

  const image = document.createElement("img");
  image.setAttribute("src", data.image);
  card.appendChild(image);

  return card;
}

export function MapPropertyToDom(tag: HTMLElement, data: Property[]) {
  const cards = data.map((cardData) => buildPropertyElement(cardData));

  tag.append(...cards);
}
