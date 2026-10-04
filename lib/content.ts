export const siteName = "Dogwise Guide";

export const siteDescription =
  "Clear, practical dog-care guides covering health, safety, nutrition, behavior, training, grooming, breeds, puppies, senior dogs and useful calculators.";

export const categories = [
  {
    slug: "health-safety",
    name: "Dog Health & Safety",
    description:
      "Practical information about dog health, warning signs, poisoning risks, prevention and everyday safety.",
  },
  {
    slug: "food-nutrition",
    name: "Food & Nutrition",
    description:
      "Straightforward guidance about dog food, treats, calories, feeding and food safety.",
  },
  {
    slug: "behavior-training",
    name: "Behavior & Training",
    description:
      "Practical guides to dog behavior, communication, training and common behavior problems.",
  },
  {
    slug: "care-grooming",
    name: "Care & Grooming",
    description:
      "Everyday guidance for brushing, bathing, nails, teeth, exercise and general dog care.",
  },
  {
    slug: "dog-breeds",
    name: "Dog Breeds",
    description:
      "Breed information, temperament, care needs and lifestyle considerations.",
  },
  {
    slug: "puppies",
    name: "Puppies",
    description:
      "Helpful puppy guides covering feeding, sleep, growth, training and settling into a new home.",
  },
  {
    slug: "senior-dogs",
    name: "Senior Dogs",
    description:
      "Practical information for caring for older dogs and recognizing age-related changes.",
  },
  {
    slug: "products-tools",
    name: "Products & Everyday Life",
    description:
      "Useful information about crates, beds, toys, walking equipment, grooming tools and everyday dog ownership.",
  },
];

export const tools = [
  {
    slug: "dog-age-calculator",
    name: "Dog Age Calculator",
    description:
      "Get an approximate human-age comparison based on your dog's age and life stage.",
  },
  {
    slug: "dog-calorie-calculator",
    name: "Dog Calorie Calculator",
    description:
      "Get an educational estimate of daily calorie needs based on weight and activity.",
  },
  {
    slug: "dog-feeding-calculator",
    name: "Dog Feeding Calculator",
    description:
      "Estimate how much food your dog may need when you know the food's calorie density.",
  },
  {
    slug: "puppy-growth-calculator",
    name: "Puppy Growth Calculator",
    description:
      "Track a puppy's current weight and compare it with a simple growth estimate.",
  },
  {
    slug: "dog-weight-guide",
    name: "Dog Weight Guide",
    description:
      "Learn how body condition and weight can help you assess whether your dog may need a diet review.",
  },
  {
    slug: "puppy-feeding-schedule",
    name: "Puppy Feeding Schedule",
    description:
      "A practical age-based framework for planning puppy meals.",
  },
];

const sources = {
  wsava: {
    name: "WSAVA Global Nutrition Guidelines",
    url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
  },
  avsab: {
    name: "American Veterinary Society of Animal Behavior",
    url: "https://avsab.org/resources/position-statements/",
  },
  aspca: {
    name: "ASPCA Animal Poison Control",
    url: "https://www.aspca.org/pet-care/animal-poison-control",
  },
  akc: {
    name: "American Kennel Club",
    url: "https://www.akc.org/",
  },
};

export const articles = [
  {
    slug: "dog-age-guide",
    title: "How Old Is My Dog in Human Years?",
    category: "care-grooming",
    description:
      "Learn why the old 7-to-1 dog-age rule is too simple and how to think about your dog's age using life stages.",
    intro:
      "If you've ever wondered how old your dog would be if they were human, you're not alone. The familiar idea that one dog year equals seven human years is easy to remember, but it does not accurately describe how dogs develop.",
    sections: [
      {
        h: "Why the 7-to-1 rule does not work very well",
        p:
          "Dogs do not age at the same rate throughout their lives. A puppy can mature dramatically during its first year, while the pace of aging later in life is different. Size and breed can also affect how quickly a dog reaches adulthood and senior years.",
      },
      {
        h: "Think about life stages instead",
        p:
          "For everyday care, life stage is often more useful than trying to convert every birthday into an exact human equivalent. Puppies have different feeding, exercise and training needs from adults, while senior dogs may need changes to exercise, nutrition and veterinary monitoring.",
      },
      {
        h: "Why size and breed matter",
        p:
          "Small, medium and large dogs can have different aging patterns. Breed-related differences also mean that two dogs of the same chronological age may not have exactly the same health or care needs.",
      },
      {
        h: "What should dog owners actually use age for?",
        p:
          "Use age as one piece of the bigger picture. Your dog's body condition, behavior, activity level, medical history and veterinary assessments are more useful for making individual care decisions than a human-year conversion alone.",
      },
    ],
    sources: [sources.akc],
  },

  {
    slug: "dog-calorie-needs",
    title: "How Many Calories Does a Dog Need Each Day?",
    category: "food-nutrition",
    description:
      "Understand what affects a dog's daily calorie needs and why calorie estimates should be treated as a starting point.",
    intro:
      "There is no single calorie number that is correct for every dog. A dog's energy requirement can change with body size, age, activity, growth, reproductive status, health and even individual metabolism.",
    sections: [
      {
        h: "What affects a dog's calorie needs?",
        p:
          "Puppies are growing, working dogs may use considerably more energy, and less-active adult dogs may need fewer calories. Pregnancy and nursing can also change nutritional requirements. Medical conditions may affect energy needs as well.",
      },
      {
        h: "Why body weight alone is not enough",
        p:
          "Two dogs can weigh the same but have different body compositions and activity levels. Looking at body condition alongside weight gives a more useful picture of whether the current feeding amount is appropriate.",
      },
      {
        h: "Calorie calculators are estimates",
        p:
          "A calculator can provide a useful starting estimate, but it should not be treated as a prescription. If your dog is gaining or losing weight unexpectedly, talk with your veterinarian rather than simply changing food based on an online calculation.",
      },
      {
        h: "Check the food label too",
        p:
          "Commercial dog foods vary in calorie density. The amount of food a dog needs depends not only on the dog's energy requirement but also on how many calories are contained in the particular food.",
      },
    ],
    sources: [sources.wsava],
  },

  {
    slug: "can-dogs-eat-bananas",
    title: "Can Dogs Eat Bananas?",
    category: "food-nutrition",
    description:
      "A practical guide to giving bananas to dogs, including portions, preparation and important precautions.",
    intro:
      "Banana can be an occasional treat for many dogs, but that does not mean a dog should eat large amounts of it. Portion size and the rest of the dog's diet still matter.",
    sections: [
      {
        h: "Can dogs eat banana?",
        p:
          "Plain banana flesh is commonly used as an occasional dog treat. It should not replace a complete and balanced diet, and individual dogs may react differently to new foods.",
      },
      {
        h: "How much banana should a dog have?",
        p:
          "Think of banana as a treat rather than a meal. Start with a small amount, particularly if your dog has not eaten banana before, and watch for digestive upset.",
      },
      {
        h: "Remove the peel",
        p:
          "Banana peel is difficult to digest and is not a useful part of the treat. Offer small pieces of the peeled fruit instead.",
      },
      {
        h: "Remember the calories",
        p:
          "Bananas contain natural carbohydrates and calories. Large portions can add more calories than you may realize, especially for small dogs or dogs that are already trying to lose weight.",
      },
      {
        h: "When to be more cautious",
        p:
          "If your dog has a medical condition requiring a specific diet, ask your veterinarian before adding treats or new foods regularly.",
      },
    ],
    sources: [sources.wsava],
  },

  {
    slug: "can-dogs-eat-grapes",
    title: "Can Dogs Eat Grapes or Raisins?",
    category: "health-safety",
    description:
      "Why grapes and raisins should not be fed to dogs and what to do if your dog may have eaten them.",
    intro:
      "Grapes and raisins are foods dog owners should take seriously. They should not be intentionally fed to dogs, and suspected ingestion warrants prompt professional advice.",
    sections: [
      {
        h: "Keep grapes and raisins away from dogs",
        p:
          "Do not use grapes or raisins as treats. They can be associated with serious illness in dogs, and there is no reliable way for an owner to predict which dog will become seriously affected.",
      },
      {
        h: "What if my dog ate a grape or raisin?",
        p:
          "Contact your veterinarian or an appropriate animal poison-control service promptly. Tell them what was eaten, approximately how much may have been consumed, when it happened and your dog's size if you know it.",
      },
      {
        h: "Do not wait for symptoms",
        p:
          "A dog may initially appear normal after ingesting a potentially toxic food. Waiting for obvious symptoms can delay professional assessment.",
      },
      {
        h: "Do not try random home remedies",
        p:
          "Do not give household substances or attempt to make your dog vomit unless a veterinary professional or poison-control expert specifically instructs you to do so.",
      },
      {
        h: "Keep the packaging",
        p:
          "If the grapes or raisins came from a package or food product, keep the packaging available. It can help a veterinary professional understand what was consumed.",
      },
    ],
    sources: [sources.aspca],
  },

  {
    slug: "dog-body-language",
    title: "Dog Body Language: Common Signals Explained",
    category: "behavior-training",
    description:
      "Learn how to read common dog body-language signals by looking at the whole dog and the surrounding situation.",
    intro:
      "Understanding dog body language can help owners notice when a dog is relaxed, uncertain, frightened or asking for space. The important thing is not to treat one gesture as having only one meaning.",
    sections: [
      {
        h: "Look at the whole dog",
        p:
          "Ears, eyes, mouth, tail, posture, movement and vocalizations all provide information. The environment matters too. A dog that turns away during a noisy interaction may be communicating something very different from a dog that turns away while calmly sniffing outside.",
      },
      {
        h: "Signs a dog may be uncomfortable",
        p:
          "Lip licking, yawning, turning away, lowering the body, avoiding eye contact or trying to increase distance can occur in stressful situations. These signals should be considered together rather than interpreted in isolation.",
      },
      {
        h: "A wagging tail does not always mean happiness",
        p:
          "Tail movement can occur in many emotional states. Pay attention to the dog's entire posture and the situation rather than assuming every wag means the dog wants interaction.",
      },
      {
        h: "Give a dog space when needed",
        p:
          "If a dog is showing repeated signs of discomfort, increasing distance is often safer than forcing an interaction. Children should also be taught to respect a dog's space.",
      },
    ],
    sources: [sources.avsab],
  },

  {
    slug: "reward-based-dog-training",
    title: "Reward-Based Dog Training: What It Means",
    category: "behavior-training",
    description:
      "Learn what reward-based training means and how to use rewards to teach everyday dog behaviors.",
    intro:
      "Reward-based training focuses on reinforcing behaviors you want to see. Rewards can include food, play, access to something the dog enjoys or social attention.",
    sections: [
      {
        h: "What is reward-based training?",
        p:
          "When a dog performs a behavior you want, you provide something valuable to the dog. With repetition, the dog becomes more likely to offer that behavior in the appropriate situation.",
      },
      {
        h: "Start with easy situations",
        p:
          "Teaching a new behavior in a quiet room is usually easier than immediately practicing in a crowded park. Start where your dog can succeed and gradually introduce distractions.",
      },
      {
        h: "Reward timing matters",
        p:
          "The reward should follow the behavior you want to reinforce. Clear timing helps the dog understand which action earned the reward.",
      },
      {
        h: "Keep training sessions manageable",
        p:
          "Short, successful sessions are often easier for both the dog and owner. End while things are going well rather than continuing until the dog becomes frustrated.",
      },
      {
        h: "When professional help is appropriate",
        p:
          "Serious fear, aggression, resource guarding or other difficult behavior may require help from a qualified behavior professional or veterinarian.",
      },
    ],
    sources: [sources.avsab],
  },

  {
    slug: "dog-grooming-schedule",
    title: "Dog Grooming Schedule: A Practical Guide",
    category: "care-grooming",
    description:
      "Build a practical grooming routine covering brushing, bathing, nails, ears and dental care.",
    intro:
      "Dogs do not all need the same grooming routine. Coat type, lifestyle, activity, skin condition and individual needs all influence how often grooming should happen.",
    sections: [
      {
        h: "Brushing",
        p:
          "Dogs with long, thick or curly coats may need frequent brushing to prevent mats. Short-coated dogs often need less frequent brushing, although regular brushing can still remove loose hair and help owners notice skin changes.",
      },
      {
        h: "Bathing",
        p:
          "Bathing frequency depends on the dog's coat, lifestyle and skin condition. Over-bathing or using inappropriate products can irritate some dogs, so use products intended for dogs and follow veterinary advice when skin problems are present.",
      },
      {
        h: "Nails",
        p:
          "Nails should be checked regularly. If they become too long, they can affect comfort and movement. Dogs that are uncomfortable having their nails handled may benefit from gradual training or professional grooming assistance.",
      },
      {
        h: "Ears and teeth",
        p:
          "Check ears for changes such as unusual odor, discharge or persistent irritation. Dental care is also an important part of routine dog care, and persistent mouth problems should be discussed with a veterinarian.",
      },
    ],
  },

  {
    slug: "dog-house-training",
    title: "How to House Train a Puppy",
    category: "puppies",
    description:
      "A practical puppy house-training approach based on routine, supervision, timely trips outside and reinforcement.",
    intro:
      "House training takes time. Puppies need frequent opportunities to go outside, close supervision indoors and consistent feedback when they eliminate in the correct place.",
    sections: [
      {
        h: "Create a predictable routine",
        p:
          "Take the puppy to the appropriate toilet area after waking, eating, drinking, playing and sleeping. Young puppies generally need more frequent opportunities than adult dogs.",
      },
      {
        h: "Watch for signs",
        p:
          "Sniffing the floor, circling, restlessness or suddenly moving away from play can be signs that a puppy needs to eliminate. Take the puppy outside before an accident occurs when possible.",
      },
      {
        h: "Reward successful trips",
        p:
          "When the puppy eliminates in the correct location, reward promptly. The goal is to make the desired behavior clear and worthwhile.",
      },
      {
        h: "Handle accidents calmly",
        p:
          "Accidents are part of the learning process. Clean the area thoroughly and avoid punishment. Punishment can make some puppies anxious without teaching them where they should go.",
      },
      {
        h: "When a previously trained dog starts having accidents",
        p:
          "A sudden change in toilet habits in a previously reliable dog can have a medical or behavioral cause. A veterinarian can help determine whether an underlying problem needs attention.",
      },
    ],
    sources: [sources.avsab],
  },

  {
    slug: "dog-separation-anxiety-basics",
    title: "Dog Separation Anxiety: What Owners Should Know",
    category: "behavior-training",
    description:
      "Understand common signs of separation-related distress and why punishment is not an appropriate solution.",
    intro:
      "Some dogs become highly distressed when they are separated from their owners. The behavior can range from mild difficulty settling to severe distress that requires professional help.",
    sections: [
      {
        h: "Possible signs",
        p:
          "Vocalization, pacing, destructive behavior, escape attempts, house-soiling or intense distress around departures can occur in dogs with separation-related problems.",
      },
      {
        h: "Do not punish the behavior",
        p:
          "A distressed dog is not necessarily being deliberately destructive or disobedient. Punishment after the owner returns does not address the underlying distress and can make the situation worse.",
      },
      {
        h: "Look for patterns",
        p:
          "Note when the behavior occurs, how quickly it starts, what the dog does and whether the behavior changes with different departure routines. This information can be useful when discussing the problem with a professional.",
      },
      {
        h: "When to get professional help",
        p:
          "If a dog is injuring itself, attempting to escape, becoming extremely distressed or repeatedly damaging property when alone, seek help from a veterinarian or qualified behavior professional.",
      },
    ],
    sources: [sources.avsab],
  },

  {
    slug: "dog-proof-your-home",
    title: "How to Dog-Proof Your Home",
    category: "health-safety",
    description:
      "A practical room-by-room checklist for reducing common household hazards for dogs.",
    intro:
      "Dog-proofing is easier before an accident happens. The goal is to think about what a curious dog can reach, chew, swallow or knock over.",
    sections: [
      {
        h: "Kitchen",
        p:
          "Keep potentially harmful foods, medications, cleaning products and trash out of reach. Remember that dogs may be able to open cabinets or push containers off counters.",
      },
      {
        h: "Bathroom and laundry",
        p:
          "Store medicines, detergents, cosmetics and small objects securely. Keep toilet and laundry areas free from items a curious dog could chew or swallow.",
      },
      {
        h: "Living areas",
        p:
          "Secure electrical cords, small objects, medications and anything that could be swallowed. Check plants before bringing them into areas your dog can access.",
      },
      {
        h: "Garage and garden",
        p:
          "Store automotive fluids, chemicals, fertilizers, pesticides and other hazardous products securely. Check outdoor areas for objects or substances a dog could ingest.",
      },
      {
        h: "Think from the dog's point of view",
        p:
          "Get down to your dog's level and look around. Items that seem safely out of reach from a standing human position may be accessible to a curious dog.",
      },
    ],
    sources: [sources.aspca],
  },
];

export const topicLists = {
  "health-safety": [
    "Dog poisoning",
    "Toxic foods",
    "Toxic plants",
    "Household chemicals",
    "Heat safety",
    "Cold-weather safety",
    "Emergency warning signs",
    "Vomiting",
    "Diarrhea",
    "Dehydration",
    "Allergies",
    "Skin problems",
    "Ear problems",
    "Dental health",
    "Fleas and ticks",
    "Heartworm basics",
    "Medication safety",
    "Fireworks safety",
    "Holiday hazards",
  ],

  "food-nutrition": [
    "Dog nutrition basics",
    "How much should my dog eat?",
    "Dog calories",
    "Treat calories",
    "Reading dog food labels",
    "Dry food",
    "Wet food",
    "Food allergies",
    "Food intolerance",
    "Puppy nutrition",
    "Adult nutrition",
    "Senior nutrition",
    "Weight management",
    "Can dogs eat bananas?",
    "Can dogs eat strawberries?",
    "Can dogs eat apples?",
    "Can dogs eat blueberries?",
    "Can dogs eat watermelon?",
    "Can dogs eat eggs?",
    "Can dogs eat rice?",
    "Can dogs eat cheese?",
    "Can dogs eat peanut butter?",
    "Can dogs eat chocolate?",
    "Can dogs eat grapes?",
    "Can dogs eat onions?",
    "Can dogs eat garlic?",
  ],

  "behavior-training": [
    "Puppy training",
    "House training",
    "Crate training",
    "Leash training",
    "Recall training",
    "Barking",
    "Chewing",
    "Digging",
    "Jumping",
    "Puppy biting",
    "Growling",
    "Resource guarding",
    "Separation-related behavior",
    "Dog body language",
    "Signs of stress",
    "Signs of fear",
    "Why does my dog lick me?",
    "Why does my dog stare at me?",
    "Why does my dog follow me?",
    "Why does my dog paw me?",
    "Why does my dog tilt its head?",
    "Why does my dog howl?",
    "Why does my dog whine?",
    "Why does my dog eat grass?",
    "Reward-based training",
  ],

  "care-grooming": [
    "Dog grooming schedule",
    "Bathing",
    "Brushing",
    "Shedding",
    "Nail trimming",
    "Paw care",
    "Ear cleaning",
    "Eye care",
    "Dental care",
    "Teeth brushing",
    "Coat care",
    "Mats and tangles",
    "Exercise",
    "Walking",
    "Mental stimulation",
    "Dog sleep",
    "Dog beds",
    "Dog toys",
    "Microchipping",
    "Routine veterinary care",
  ],

  "dog-breeds": [
    "Labrador Retriever",
    "Golden Retriever",
    "German Shepherd",
    "French Bulldog",
    "Poodle",
    "Dachshund",
    "Beagle",
    "Rottweiler",
    "Chihuahua",
    "Shih Tzu",
    "Yorkshire Terrier",
    "Boxer",
    "Doberman",
    "Great Dane",
    "Siberian Husky",
    "Australian Shepherd",
    "Border Collie",
    "Corgi",
    "Pomeranian",
    "Best dogs for apartments",
    "Best family dogs",
    "Best dogs for first-time owners",
    "Low-shedding dogs",
    "Small dog breeds",
    "Large dog breeds",
    "Quiet dog breeds",
  ],

  puppies: [
    "New puppy checklist",
    "First day with a puppy",
    "Puppy sleep",
    "Puppy feeding",
    "Puppy growth",
    "Puppy socialization",
    "Puppy vaccinations",
    "Puppy grooming",
    "Puppy exercise",
    "Puppy-proofing",
    "Puppy biting",
    "Puppy house training",
    "Puppy crate training",
  ],

  "senior-dogs": [
    "Senior dog care",
    "Senior dog nutrition",
    "Senior dog exercise",
    "Senior dog mobility",
    "Senior dog grooming",
    "Senior dog sleep",
    "Age-related changes",
    "Weight management for senior dogs",
  ],

  "products-tools": [
    "Dog toys",
    "Chew toys",
    "Puzzle toys",
    "Dog beds",
    "Dog crates",
    "Harnesses",
    "Collars",
    "Leashes",
    "Grooming tools",
    "Toothbrushes",
    "Nail clippers",
    "Food bowls",
    "Slow feeders",
    "Travel gear",
    "Dog identification",
    "GPS trackers",
  ],
};
