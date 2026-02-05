//modules collection
db.modules.insertOne({
  _id: "m1",
  courseId: "c1",
  title: "Introduction to MongoDB",
  order: 1,
});

db.modules.insertOne({
  _id: "m2",
  courseId: "c1",
  title: "CRUD Operation",
  order: 2,
});

db.modules.insertOne({
  _id: "m3",
  courseId: "c1",
  title: "Aggregate Pipelines",
  order: 3,
});

db.modules.insertOne({
  _id: "m4",
  courseId: "c2",
  title: "Introduction to Nodejs",
  order: 1,
});

db.modules.insertOne({
  _id: "m5",
  courseId: "c2",
  title: "Express Framework",
  order: 2,
});

db.modules.insertOne({
  _id: "m6",
  courseId: "c2",
  title: "Building REST APIs",
  order: 3,
});
