// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
import {
  showReviewTotal,
  populateUser,
  MapPropertyToDom,
  Property,
  User,
  Review,
  LoyaltyUser,
} from "./utils/index";
// header tags
const returningUserDisplay = document.getElementById("returning-user")!;
const userNameDisplay = document.getElementById("user")!;
// body tags
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
    price: 34,
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
    price: 23,
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

MapPropertyToDom(propertiesTag, properties);

(function (footer: HTMLElement) {
  let locationStats: [string, string, number] = ["cpt", "3:42", 21];
  footer.innerHTML =
    locationStats[0] + " " + locationStats[1] + " " + locationStats[2] + "°";
})(footerTag);
