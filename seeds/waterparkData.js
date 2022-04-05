const { waterPark } = require('../models');

const waterparkData = [
  {
    name: 'Typhoon Lagoon at Walt Disney World Resort',
    website:'https://disneyworld.disney.go.com/destinations/typhoon-lagoon/',
    address:'1145 E Buena Vista Dr, Orlando, FL 32830',
    yearlyVisits: 2.25,
    description:'Surf’s up at Disney\'s Typhoon Lagoon Water Park at Walt Disney World® Resort, where legend tells the tale of a whirlwind storm. Hurling surfboards into palm trees, propelling small boats ont rooftops, and impaling a shrimp boat to the top of volcanic Mount Mayday, the tempest finally calmed and left behind a tropical paradise where you’ll experience peaceful bliss and pulse-pounding adventure alike!',
    description_source: 'https://www.visitorlando.com/things-to-do/theme-parks/walt-disney-world-resort/disneys-typhoon-lagoon-water-park/',
    image: '/img/water-park-bg.jpg',
  },
  {
    name: 'Blizzard Beach',
    website:'https://disneyworld.disney.go.com/destinations/blizzard-beach/',
    address:'1534 Blizzard Beach Drive, Orlando, FL 32836',
    yearlyVisits: 1.98,
    description:'Plunge into the absolute coolest water park that pummels the pools for awesome fun in a fantastic setting. Disney\'s Blizzard Beach Water Park, one of 2 Water Parks at Walt Disney World Resort, features one of the world\'s tallest and fastest free-falling waterslides, as well as slides and rides for the whole family—like a kid-sized, snow-castle fountain play area with scaled-down versions of the thrilling attractions.',
    description_source: 'https://www.officialticketcenter.com/Blizzard-Beach-Rides.aspx',
    image: '/img/blizzard-beach-img.jpg',
  },
  {
    name: 'Universal\'s Volvano Bay',
    website:'https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay',
    address:'6000 Universal Blvd, Orlando, FL 32819',
    yearlyVisits:1.81,
    description:'This imaginative water theme park is equal parts vibrant and serene, and resort-like amenities and creative menu offerings only add to the South Pacific island appeal. Sip a specialty  cocktail or sample Polynesian delights as you plunge into island life! Excitement awaits in Rainforest Village, including Kala & Tai Nui Serpentine Body Slides, Maku Puihi Round Raft Rides, Punga Racers, Taniwha Tubes — Tonga & Raki, TeAwa the Fearless River and Ohyah & Ohno Drop Slides. Or, take a relaxing dip in the Puka Uli Lagoon. Universal’s Volcano Bay further benefits from the innovative TapuTapu wearable technology.',
    description_source: 'https://www.visitorlando.com/things-to-do/theme-parks/universal-orlando-resort/universals-volcano-bay/',
    image: '/img/universal-volcano-img.jpg',
  },
  {
    name: 'Atlantis Aquaventure',
    website:'https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay',
    address:'One Casino Drive, Suite 42, Paradise Island, Bahamas',
    yearlyVisits: 1.81,
    description:'Aquaventure is our one-of-a-kind, 141-acre water park overlooking some of Nassau’s best beaches. This non-stop aquatic playground features over twenty million gallons of water, magnificent Atlantean-themed towers housing high-speed water slides, a mile-long river ride with rolling rapids and wave surges, a spectacular kids’ water-play fort and 11 refreshing swimming pools. Aquaventure is a lush, tropical environment that is immersive, interconnected and perfect for all vacationers, both young and old. The water park offers an extreme level of excitement and delivers an "aqua" adventure unlike any other.',
    description_source: 'https://www.atlantisbahamas.com/things-to-do/aquaventure-water-park',
    image: '/img/atlantis-img.jpg',
  },
  {
    name: 'Aquatica',
    website:'https://aquatica.com/orlando/',
    address:'5800 Water Play Way, Orlando, FL 32821',
    yearlyVisits: 1.53,
    description:'Aquatica Orlando combines the sort of up-close animal encounters that made SeaWorld Orlando famous with thrilling rides, sandy beaches and a serene lazy river for optimal water-themed entertainment. And thanks to heated water in the cooler months, it’s open for your enjoyment all year long!',
    description_source: 'https://www.visitorlando.com/things-to-do/theme-parks/seaworld-orlando/aquatica-orlando/',
    image: '/img/aquatica-img.jpg',
  },

];

const seedWaterPark = () => waterPark.bulkCreate(waterparkData);

module.exports = seedWaterPark;