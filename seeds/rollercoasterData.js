const { rollerCoaster } = require('../models');

const rollercoasterData = [
  {
    name: 'The Kingda Ka from Six Flags Great Adventure',
    website:'https://www.sixflags.com/greatadventure/attractions/kingda-ka',
    address:'1 Six Flags Blvd, Jackson Township, NJ 08527',
    height: 456,
    description:'A top hat tower of 456 ft looms up menacingly as you board its trains, on the dual loading platform. And the first impulse experienced, being locked inside a loaded train, is undoubtedly one of anxious anticipation. Be on your guard, for the train takes off every few minutes as it plunges 418 ft to form a 270-degree spiral while going down a U-shaped track. If your adventurous heart craves for more, go for the 12 other coasters housed inside the park and finally to let off some steam, unwind at the wildlife park, “Safari Off Road Adventure”.',
  },
  {
    name: 'The Top Thrill Dragster from Cedar Point',
    website:'https://www.cedarpoint.com/rides-experiences/top-thrill-dragster',
    address:'1 Cedar Point Dr, Sandusky, OH 44870',
    height: 420,
    description:'Within just 3.8 seconds, this roller coaster, having steel accelerators reaches a speed of 120 mph before going up an unnerving 90-degree vertical slope. Soon, it would leave you gasping for air for dashing downward in a 270-degree twist. However, despite triumphing as the second loftiest roller coaster in the US, it is not counted among the best by reviewers. The other attractions of the park include 72 more rides with 16 roller coasters.',
  },
  {
    name: 'Superman: Escape from Krypton from Six FLags Magic Mountain',
    website:'https://www.sixflags.com/magicmountain/attractions/superman-escape-krypton',
    address:'26101 Magic Mountain Parkway, Valencia, CA 91355',
    height: 415,
    description:'Clinging to seats facing backward, you are going to soar up in this coaster vertically at 90 degrees and then dive into a misty underground tunnel at a speed of 77 mph. Be prepared next for going round-and-round through a double helix, a second dive into a tube, and many other breathtaking elements. Moreover, there are 19 different roller coasters, games, as well as 100 more rides.',
  },
  {
    name: 'Fury 325 from Carowinds',
    website:'https://www.carowinds.com/rides-experiences/fury-325',
    address:'300 Carowinds Blvd, Charlotte, NC 28273',
    height: 325,
    description:'Also called “Oscars of Roller Coasters” Fury 325, claims to be the longest one in America, going for more than 1.25 miles at a top speed of 95 mph. Climbing up a traditional lift hill, this steel roller coaster receives special recognition for crossing the state lines of both North and South Carolina as well as the communities of Fort Mill and Charlotte. The 398-acre Carowinds Park that houses it also features 64 rides with 12 other magnificent roller coasters.',
  },
  {
    name: 'Millennium Force from Cedar Points',
    website:'https://www.cedarpoint.com/rides-experiences/millennium-force',
    address:'1 Cedar Point Dr, Sandusky, OH 44870',
    height: 310,
    description:'The alluring fascinations of this Giga coaster are many: it offers a thrilling ride, lasts for about 2 minutes and attains a speed of 93mph while going through a host of unnerving drops. Naturally, after its first unveiling in 2000, it has achieved either the 1st or 2nd rank at the Golden Ticket Awards. Another plus point is that it endows a ravishing view of Lake Erie.',
  },
];

const seedRollerCoaster = () => rollerCoaster.bulkCreate(rollercoasterData);

module.exports = seedRollerCoaster;