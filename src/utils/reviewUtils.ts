import { LoyaltyUser, Review } from "../types";

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

export function returnTopReviews(reviews: Review[], cap: number): Review[] {
  let buffer: Review[] = [...reviews]
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, cap);

  return buffer;
}

export function addReviews(tag: Element, array: Review[]): void {
  const cap = 2;
  const topTwoReviews = returnTopReviews(array, cap);

  const builder = (index: number): HTMLElement => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML =
      topTwoReviews[index].stars + " stars from " + topTwoReviews[index].name;
    return card;
  };

  const cards = [];
  for (let i = 0; i < cap; i++) {
    cards.push(builder(i));
  }

  tag.innerHTML = "";
  tag.append(...cards);
}
