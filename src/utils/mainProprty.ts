import { Review } from "../types";

export default class MainProperty {
  src: string;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }

  private build(): HTMLElement {
    const image = document.createElement("img");
    image.setAttribute("src", this.src);
    return image;
  }

  get getElement(): HTMLElement {
    return this.build();
  }
}
