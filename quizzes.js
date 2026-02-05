//quizzes collection
db.quizzes.insertOne({
  _id: ObjectId,
  lessonId: "l1",
  questions: [
    {
      question: "MongoDB is?",
      options: ["SQL DB", "NoSQL DB", "File System"],
      correctAnswer: "NoSQL DB",
    },
  ],
});