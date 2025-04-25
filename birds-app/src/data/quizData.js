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
    },
    {
      id: 6,
      audio: "/audio/Pigeon_quiz.mp3",
      correctAnswer: "Rock Pigeon",
    },
    {
      id: 3,
      audio: "/audio/Cardinal_quiz.mp3",
      correctAnswer: "Northern Cardinal",
    },
    {
      id: 7,
      audio: "/audio/Robin_quiz.wav",
      correctAnswer: "American Robin",
    },
    {
      id: 4,
      audio: "/audio/Crow_quiz.mp3",
      correctAnswer: "American Crow",
    },
    {
      id: 2,
      audio: "/audio/Sparrow_quiz.mp3",
      correctAnswer: "House Sparrow",
    },
    {
      id: 5,
      audio: "/audio/Dove_quiz.mp3",
      correctAnswer: "Mourning Dove",
    },
  ];
  
  export { quizData, birdOptions };
  