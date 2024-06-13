// src/data/aircraft.js
export const aircraft = [
  {
    "id": 1,
    "name": "F-22 Raptor",
    "image": "/images/f22.jpg",
    "flag": "/images/flags/usa.png",
    "description": "A fifth-generation fighter aircraft developed by Lockheed Martin for the United States Air Force. Known for its stealth capabilities, advanced avionics, and unmatched maneuverability.",
    "specifications": {
      "Speed": "1,500 mph",
      "Range": "1,839 miles",
      "Engine": "2x Pratt & Whitney F119-PW-100",
      "Crew": "1",
      "Length": "62 ft 1 in",
      "Wingspan": "44 ft 6 in",
      "Height": "16 ft 8 in",
      "Max takeoff weight": "83,500 lb",
      "Country of origin": "United States",
      "First flight": "September 7, 1997",
      "Introduced": "December 15, 2005",
      "Number built": "195"
    },
    "armament": {
      "Guns": "1x M61A2 Vulcan 20mm rotary cannon",
      "Air-to-air missiles": [
        "6x AIM-120 AMRAAM",
        "2x AIM-9 Sidewinder"
      ],
      "Air-to-ground weapons": [
        "2x 1,000 lb JDAM",
        "8x GBU-39 Small Diameter Bombs"
      ],
      "External hardpoints": "4, can carry up to 5,000 lb of ordnance"
    },
    "avionics": {
      "Radar": "AN/APG-77 AESA",
      "Sensor suite": "AN/ALR-94 radar warning receiver, AN/AAR-56 missile launch detector",
      "Communications": "INTRA-flight data link, Link-16"
    },
    "stealth features": {
      "Radar cross-section": "Extremely low",
      "Infrared signature": "Minimized through design and materials"
    },
    "maneuverability": {
      "Thrust vectoring": "Yes, pitch only",
      "Supercruise": "Yes, Mach 1.5 without afterburners"
    },
    "role": "Air superiority, multi-role fighter",
    "development history": {
      "Program origin": "Advanced Tactical Fighter (ATF) program",
      "Contract awarded": "April 1991 to Lockheed Martin",
      "Cost per unit": "Approximately $150 million (flyaway cost)"
    },
    "deployment": {
      "First operational squadron": "27th Fighter Squadron, Langley Air Force Base",
      "Notable deployments": [
        "Operation Noble Eagle",
        "Operation Inherent Resolve"
      ],
      "international exercises": [
        "Red Flag",
        "Northern Edge"
      ]
    },
    "additionalInfo": "The F-22 Raptor is considered one of the most advanced fighter jets in the world. Developed by Lockheed Martin, it is known for its stealth capabilities, supercruise, and advanced avionics. The F-22 was introduced in 2005 and has since been a critical component of the United States Air Force. Its design incorporates stealth technology to reduce its radar cross-section and infrared signature, making it less detectable to enemy forces. The F-22 also features highly integrated avionics systems, allowing for superior situational awareness and combat effectiveness. Its ability to engage in both air-to-air and air-to-ground missions makes it a versatile and powerful asset in modern warfare. Additionally, the F-22 can perform supersonic flight without afterburners, known as supercruise, which allows it to maintain high speeds with lower fuel consumption. Despite its advanced capabilities, the F-22 program faced several challenges, including high production costs and limited production numbers, with only 195 units built. However, it remains a crucial element of the US air superiority strategy. The F-22's participation in international exercises like Red Flag and Northern Edge showcases its capabilities and fosters interoperability with allied nations. Its deployments in operations such as Noble Eagle and Inherent Resolve highlight its operational significance in both defensive and offensive roles."
  },
  {
    "id": 2,
    "name": "B-2 Spirit",
    "image": "/images/b2.jpg",
    "flag": "/images/flags/usa.png",
    "description": "An American heavy strategic bomber...",
    "specifications": {
      "Speed": "628 mph",
      "Range": "6,000 miles",
      // more specs...
    },
    "additionalInfo": "The B-2 Spirit, also known as the Stealth Bomber, is a heavy strategic bomber known for its low observable stealth technology. Developed by Northrop Grumman, it is capable of carrying both conventional and nuclear weapons. The B-2 was first introduced in 1997 and has been an integral part of the U.S. strategic bomber fleet.",
  },
  {
    "id": 3,
    "name": "Jas 39C Gripen",
    "image": "/images/gripen.jpg",
    "flag": "/images/flags/sweden.jpg",
    "description": "A Swedish multi-role fighter aircraft...",
    "specifications": {
      "Speed": "1,372 mph",
      "Range": "1,200 miles",
      // more specs...
    },
    "additionalInfo": "The Gripen is a versatile and cost-effective fighter aircraft developed by Saab. It is known for its agility, advanced avionics, and ease of maintenance. The Gripen has been exported to several countries and has seen combat in various conflicts.",
  }
];
