// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
import {
  showReviewTotal,
  populateUser,
  mapPropertyToDom,
  addReviews,
  populateFooter,
  bindEventListener,
} from "./utils/index";

import {
  Property,
  User,
  Review,
  LoyaltyUser,
  Permissions,
} from "./types/index";
// header tags
const returningUserDisplay = document.getElementById("returning-user")!;
const userNameDisplay = document.getElementById("user")!;
// body tags
const reviewContainer = document.querySelector(".reviews")!;
const container = document.querySelector(".container")!;
const button = document.querySelector("button")!;

const reviewTotalDisplay = document.getElementById("reviews")!;
const propertiesTag = document.getElementById("properties")!;
// footer tags
const footerTag = document.getElementById("footer")!;

// Reviews
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,

    date: "27-03-2021",
    description: "Great hosts, location was a bit further than said",
  },
];

// User
const you: User = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  permissions: Permissions.ADMIN,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: Property[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
];

// Functions
showReviewTotal(
  reviewTotalDisplay,
  reviews.length,
  reviews[0].name,
  reviews[0].loyaltyUser
);

populateUser(
  returningUserDisplay,
  userNameDisplay,
  you.isReturning,
  you.firstName
);

mapPropertyToDom(propertiesTag, properties, you.permissions);

// event listeners
const unSubButton = bindEventListener(button, "click", () => {
  addReviews(reviewContainer, reviews);
  container.removeChild(button);
  // Unsubscribe the event listener
  unSubButton();
});

// footer function
populateFooter(footerTag);
