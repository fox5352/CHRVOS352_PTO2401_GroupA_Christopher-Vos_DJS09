export enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

export enum Permissions {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
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
  permissions: Permissions;
  age: number;
  stayedAt: string[];
};

export type Price = 45 | 30 | 25;

export type Property = {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
};

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

export function showDetails(
  authStatus: boolean | Permissions,
  tag: HTMLDivElement,
  price: number
) {
  if (authStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + " / night";
    tag.append(priceDisplay);
  }
}

export function MapPropertyToDom(
  tag: HTMLElement,
  data: Property[],
  authStatus: boolean | Permissions
) {
  const cards = data.map((cardData) => {
    const card = buildPropertyElement(cardData);
    showDetails(authStatus, card, cardData.price);
    return card;
  });

  tag.append(...cards);
}
