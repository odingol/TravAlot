const { resort } = require('../models');

const resortData = [
  {
    name: 'Montage Kapalua Bay',
    website:'https://www.montagehotels.com/kapaluabay/',
    address:'1 Bay Dr, Lahaina, HI 96761',
    description:'Travelers are hard-pressed to find much to complain about at the Montage Kapalua Bay. Located on the northwest corner of Maui, this 24-acre property offers panoramic views of the beach and ocean. Visitors can spend their time on the water with activities that range from sport fishing to snorkeling. The resort also offers more adventurous pursuits like zip lining and helicopter tours, as well as traditional Hawaiian luau shows. Other activity options include shopping, golfing on two award-winning courses or playing a round of tennis at the hotel\'s courts. If you\'re looking to relax, you can enjoy the complimentary beach towels and chairs, take advantage of the poolside Hana Hou Bar & Sunset Patio or indulge in a spa treatment. Accommodations here are one-, two-, three- or four-bedroom suites and each come equipped with separate living and sleeping areas, and furnished lanais. Additional amenities include flat-screen TVs, in-room laundry facilities and bathrooms with separate tubs and showers. To top off their great experiences, recent guests said all staff members, from the pool attendants to the restaurant servers, went above and beyond to ensure they had a pleasurable stay. Plus, since it\'s part of the Preferred Hotels & Resorts family, it allows I Prefer members to earn or redeem points for stays.',
    description_source: 'https://travel.usnews.com/hotels/Best-Resorts-in-USA/',
    image: '/img/resort1.jpeg',
  },
  {
    name: 'Acqualina Resort & Residences on the Beach',
    website:'https://www.acqualinaresort.com/?utm_source=local&utm_medium=organic&utm_campaign=website_link',
    address:'17875 Collins Ave, Sunny Isles Beach, FL 33160',
    description:'This spa resort doesn\'t take any of its five stars for granted, particularly when it comes to delivering first-rate customer service. Guests can\'t help but keep the compliments coming: Travelers say the resort staff takes extra care to personalize each experience. However, one problem you might face is exclusivity. Acqualina Resort & Residences on the Beach only has 98 guest rooms and suites, so be sure to book early for an upcoming trip to Sunny Isles Beach, Florida. The rooms come with flat-screen TVs and private balconies, as well as double sinks and glass-enclosed showers. Meanwhile, the property also features three in-house eateries (including a Japanese fusion restaurant opened in January 2021), a grab-and-go market, four pools, a spa and beach amenities. What\'s more, the hotel is part of The Leading Hotels of the World, meaning Leaders Club members have access to perks here. You\'ll find Acqualina Resort & Residences on the Beach about 10 miles north of Miami Beach.',
  },
  {
    name: 'Rancho Valencia Resort and Spa',
    website:'https://ranchovalencia.com/',
    address:'5921 Valencia Cir, Rancho Santa Fe, CA 92067',
    description:'About a 30-minute drive north of San Diego, Rancho Valencia is a little off the beaten path. But that\'s why people love it. This Relais & Châteaux property features carefully manicured greenery, and brims with plenty of amenities and activities to woo any type of traveler. Visitors are complimentary of the respectful, thoughtful staff and heap praise on the guest room aesthetic. Accommodations here exude a Mediterranean ambiance with hacienda-style architecture, hardwood furnishings and colorful design accents, as well as deep-soaking tubs and private balconies or patios. For pampering, Rancho Valencia\'s spa offers indulgences such as herb-infused body wraps and a variety of massage therapies. The delicious cuisine served at The Pony Room – a full-service restaurant that serves breakfast, lunch and dinner as well as handcrafted cocktails.',
  },
  {
    name: 'Encore at Wynn Las Vegas',
    website:'https://www.wynnlasvegas.com/rooms-and-suites/encore-rooms/encore-deluxe-resort',
    address:'3131 Las Vegas Blvd S, Las Vegas, NV 89109',
    description:'Recent travelers gave the Encore\'s casino high marks for style, especially in the lobby and common areas. The rooms feature similar yet more understated design elements, earning high praise for its floor-to-ceiling windows, spacious setups and overall cleanliness and maintenance. Rooms here start at 745 square feet and feature amenities such as Wynn Dream Beds and bathrooms with separate showers and tubs and flat-screen TVs. The Encore also impresses guests with its accommodating staff. Be forewarned: Recent travelers mentioned the hefty fees for partaking in the minibar\'s treats. But this is the Encore, after all, where most of the guests are high rollers prepared to splurge. If you\'re having trouble getting a vacancy at the Encore, consider its sister hotel and neighbor, the Wynn Las Vegas.',
  },
  {
    name: 'The Inn & Club at Harbour Town - The Sea Pines Resort',
    website:'https://www.seapines.com/accommodations/inn-at-harbour.aspx',
    address:'7 Lighthouse Ln, Hilton Head Island, SC 29928',
    description:'The stunning Harbour Town area is a great place to station yourself during a Hilton Head trip. And its standout accommodations, The Inn & Club at Harbour Town (part of The Sea Pines Resort), is certainly one of the most popular resorts on the island. Guests who choose to make the (somewhat long) trek here delight in the lush scenery, the luxurious rooms and the professional, approachable and welcoming staff. Rooms come with large flat-screen TVs, blackout-lined window treatments and spacious bathrooms with soaking tubs and luxury toiletries. Visitors also appreciate the numerous on-site dining options. Harbour Town rests in the bottom boot of Hilton Head Island.',
  }
];

const seedResort = () => resort.bulkCreate(resortData);

module.exports = seedResort;

