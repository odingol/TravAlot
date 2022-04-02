const { themePark } = require('../models');

const themeparkData = [
  {
    name: 'Magic Kingdom Walt Disney World',
    website: 'https://disneyworld.disney.go.com/destinations/magic-kingdom/',
    address: 'Lake Buena Vista, FL 32836',
    yearlyVisits: 20.96,
    description: 'The world’s most famous theme park, Magic Kingdom Park at Walt Disney World® Resort in Orlando is the place where childhood dreams come true. With more than 40 unforgettable attractions, themed dining and shopping, and countless surprises, your imagination is the limit when you’re at “The Most Magical Place on Earth'
  },
  {
    name: 'Disney’s Animal Kingdom',
    website: 'https://disneyworld.disney.go.com/destinations/animal-kingdom/',
    address: '2901 Osceola Pkwy, Bay Lake, FL 34747',
    yearlyVisits: 13.89,
    description: 'At Disney’s Animal Kingdom Theme Park at Walt Disney World® Resort, you can explore throughout the day and into the night on an adventure into a world alive with magic. Visit a distant world with floating mountains or back on Earth view thousands of animals in their natural habitats — all without leaving Orlando.'
  },
  {
    name: 'Epcot Walt Disney World',
    website: 'https://disneyworld.disney.go.com/destinations/epcot/',
    address: '200 Epcot Center Dr, Lake Buena Vista, FL 32830',
    yearlyVisits: 12.44,
    description: 'Launched in 1982, EPCOT at Walt Disney World Resort invites you to explore global culture, space, the seas and Mother Nature — not to mention the future — all without leaving present-day Orlando.'
  },
  {
    name: 'Universal Studios Orlando',
    website: 'https://www.universalorlando.com/web/en/us',
    address: '6000 Universal Blvd, Orlando, FL 32819',
    yearlyVisits: 10.92,
    description: 'Play, scream and laugh with some of the biggest characters in movies, TV and pop culture at Universal Orlando Resort! In addition to three incredible theme parks, including a water theme park, Universal Orlando Resort offers entertainment, shopping and dining at Universal CityWalk, as well as onsite accommodations for every style and budget. It’s the only place in Orlando where you can soar over Hogwarts™ with Harry Potter™, swing through city streets with Spider-Man, and conquer the mighty Krakatau volcano — among other unforgettable adventures. Experience it for yourself during your next trip to Orlando!'
  },
  {
    name: 'Disneyland Anaheim',
    website: 'https://disneyland.disney.go.com/',
    address: '1313 Disneyland Dr, Anaheim, CA 92802',
    yearlyVisits: 18.66,
    description: 'Located in the heart of Anaheim, the Disneyland® Resort offers a memorable experience for visitors of all ages. With over 60 incredible attractions, magical parades, and world-renowned treats, it’s no wonder Disneyland Park holds the title, “The Happiest Place on Earth"'
  },
];

const seedThemePark = () => themePark.bulkCreate(themeparkData);

module.exports = seedThemePark;

