//use lms

//users collection
db.users.insertOne({
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});

db.users.insertOne({
  _id: "u2",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", // student | instructor | admin
});

db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});

db.users.insertOne({
  _id: "u4",
  name: "Rakesh Sharma",
  email: "rakesh@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});