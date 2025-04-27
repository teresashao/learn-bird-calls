const birdOptions = [
  {
    name: "Blue Jay",
    image: "/blue_jay2.jpg",
    scientific_name: "Cyanocitta cristata",
  },
  {
    name: "Northern Cardinal",
    image: "/northern_cardinal2.jpg",
    scientific_name: "Cardinalis cardinalis",
  },
  {
    name: "House Sparrow",
    image: "/sparrow2.jpg",
    scientific_name: "Passer domesticus",
  },
  {
    name: "Rock Pigeon",
    image: "/pigeon2.jpg",
    scientific_name: "Columba livia",
  },
  {
    name: "American Crow",
    image: "/crow2.jpg",
    scientific_name: "Corvus brachyrhynchos",
  },
  {
    name: "American Robin",
    image: "/robin2.jpg",
    scientific_name: "Turdus migratorius",
  },
  {
    name: "Mourning Dove",
    image: "/mourning_dove2.jpg",
    scientific_name: "Zenaida macroura",
  },
];
  
  const quizData = [
    {
      id: 1,
      audio: "/audio/Jay_quiz.mp3",
      correctAnswer: "Blue Jay",
      hint: "This bird often imitates Hawks to confuse predators.",
    },
    {
      id: 6,
      audio: "/audio/Pigeon_quiz.mp3",
      correctAnswer: "Rock Pigeon",
      hint: "This bird has lived among humans for a very long time.",
    },
    {
      id: 3,
      audio: "/audio/Cardinal_quiz.mp3",
      correctAnswer: "Northern Cardinal",
      hint: "This bird is associated with the deceased.",
    },
    {
      id: 7,
      audio: "/audio/Robin_quiz.wav",
      correctAnswer: "American Robin",
      hint: "This bird lays uniquely colored eggs.",
    },
    {
      id: 4,
      audio: "/audio/Crow_quiz.mp3",
      correctAnswer: "American Crow",
      hint: "This bird holds grudges for a long time.",
    },
    {
      id: 2,
      audio: "/audio/Sparrow_quiz.mp3",
      correctAnswer: "House Sparrow",
      hint: "This bird prefers urban or suburban areas.",
    },
    {
      id: 5,
      audio: "/audio/Dove_quiz.mp3",
      correctAnswer: "Mourning Dove",
      hint: "This bird is associated with nostalgia.",
    },
  ];
  
  export { quizData, birdOptions };
  