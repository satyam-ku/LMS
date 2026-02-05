db.courses.aggregate(
    [
        {
            $lookup: {
                from: "modules",
                localField: "_id",
                foreignField: "courseId",
                as: "modules"
            }
        },
        {
            $project: {
                _id: 0,
                title: 1,
                "modules.title": 1
            }
        }
    ]
) // This aggregation query retrieves all courses along with their associated module titles.

db.enrollments.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "studentId",
      foreignField: "_id",
      as: "student"
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "course"
    }
  },
  {
    $project: {
      _id: 0,
      studentName: "$student.name",
      courseName: "$course.title"
    }
  }
]) // This aggregation query retrieves all enrollments with student names and enrolled course titles.

db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { c_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$courseId", "$$c_id"] },
          },
        },
      ],
      as: "modules",
    },
  },
//   { $unwind: "$modules" },
  {
    $project: {
        _id: 0,
        courseTitle: "$title",
        moduleTitle: "$modules.title",
    },
  },
]); // This aggregation query retrieves all courses along with their module titles, without unwinding the modules array.

db.enrollments.aggregate([
  {
    $group: {
      _id: "$courseId",
      studentCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "_id",
      foreignField: "_id",
      as: "course"
    }
  },
  {
    $project: {
        _id: 0,
      courseName: "$course.title",
      studentCount: 1
    }
  }
]) // This aggregation query retrieves the number of students enrolled in each course along with the course titles.

//login user with email and password
db.users.find(
    {email:"suresh@example.com", password: "1234"}
)

////////////////////////////user interface ///////////////////////
//show all courses
db.courses.find()

//show all modules of a course
db.modules.find({courseId: "c1"})

//show all lessons of a module
db.lessons.find({moduleId: "m1"})

//enrol u1 to c1
db.enrollments.insertOne({
  studentId: "u1",
  courseId: "c1",
});

//markcomplete when user hit complete lesson l1 for user u1
db.lessonProgress.insertOne({
  studentId: "u1",
  lessonId: "l1",
  isCompleted: true
})

//check wheather l1 is completed by u1 or not
db.lessonProgress.findOne({
  studentId: "u1",
  lessonId: "l1",
  isCompleted: true
})

//change password for user u1
db.users.updateOne(
  { _id: "u1" },
  { $set: { password: "newpassword123" } }
)

//show profile details of user u1
db.users.find({ _id: "u1" })

//////////////////////////////admin interface///////////////////////

//users crud(management)
//courses crud(management)
//modules crud(management)
