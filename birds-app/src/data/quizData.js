const birdOptions = [
  {
    name: "House Sparrow",
    image: "/sparrow.png",
  },
  {
    name: "Blue Jay",
    image: "/blue_jay.png",
  },
  {
    name: "Northern Cardinal",
    image: "/cardinal2.png",
  },
  {
    name: "American Crow",
    image: "/crow.png",
  },
  {
    name: "Mourning Dove",
    image: "/mourning_dove.webp",
  },
  {
    name: "Rock Pigeon",
    image: "/pigeon2.png",
  },
  {
    name: "American Robin",
    image: "/robin.webp",
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
  