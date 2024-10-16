import { Property, Permissions } from "../types";

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

export function mapPropertyToDom(
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
