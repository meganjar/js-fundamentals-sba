
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    //omit

// create new array of unique learners
 let uniqueLearners = LearnerSubmissions.filter((eachSubmission, index, array) =>
 array.findIndex(learner => learner.learner_id === eachSubmission.learner_id
   ) === index);
 

// i want to add a new property to LearnerSubmissions, points possible, 
// LearnerSubmissions.forEach(submission => {
//   // Find the matching assignment from AssignmentGroup.assignments
//   let assignment = AssignmentGroup.assignments.find(
//     phAss => phAss.id === submission.assignment_id
//     );
//   }
// );

 // Here I tried to add a new property to each submission object in the learnerSubmissions array
 // I wanted to have this number where the score is so that the calculation (score/points_possible) could happen as a new property value.
LearnerSubmissions.forEach( phsub2 => {

phsub2.submission.points_possible = 50
phsub2.submission.ppercentage = 50

  if (phsub2.assignment_id == 1){
    phsub2.submission.points_possible = 50
    // this line below should access 2 other property values in the object to calculate the percentage score for the submission
    // phsub2.submission.percentage = phsub2.submission.score / points_possible ;
  } else if (phsub2.assignment_id == 2){
    phsub2.submission.points_possible = 150
  } else if
  (phsub2.assignment_id == 3){
    phsub2.submission.points_possible = 500
  }
  
  console.log(phsub2.submission);
})

//   if (phsub2.assignment_id == 1) {
//     phsub2.submission.points_possible = 50
//   } else if (LearnerSubmissions.points_possible == 2) {
//     phsub2.submission.points_possible = 150
//   } else if (LearnerSubmissions.points_possible == 3) {
//     console.log(3)
//   }
    
   
//   if (AssignmentGroup.id === 2) {
   
//   }
// })

// //Testing if assigment_id values are numbers
// LearnerSubmissions.forEach( phsub2 => {
//   console.log(phsub2.assignment_id)})



   //format learner data by adding and removing properties from each object
   uniqueLearners.forEach(learner => {
    delete learner.assignment_id;
    delete learner.submission;
    learner.avg = 0;
    learner.assignment1 = 0;
    learner.assignment2 = 0;
   
  });
  console.log(uniqueLearners)
return uniqueLearners



  
}
  
getLearnerData()


// make sure the submission time  was before the due date
// ph = placeholder to identify and keep track of the placeholder variables
// for (const phSub of LearnerSubmissions) {
//   i=0
//   let SubmittedAt = phSub.submission.submitted_at

//   for (const phDue in AssignmentGroup.assignments) {
//     let DueAt = [phDue].due_at
//     console.log(DueAt)
//   }
//   let DueAt = AssignmentGroup.assignments[i].due_at
//   console.log(DueAt)

//   if(SubmittedAt<DueAt) {
//     console.log("deduction")}
//     //deduct 10% grade
//     else {
//       console.log("on_time")
//     }
//   }
  


// // create an array of objects with:
// // learner Id
// let studentID = LearnerSubmissions[i].id ;

// // score for assignment ID 1 where LearnerSumbissions[i].assignment_id = 1
// let Assigment1Score = LearnerSubmissions.submission.score[1]
// // score for assignment ID 2
// Assigment2Score = LearnerSubmissions.submission.score[1]  
// // new key pair values for new objects where LearnerSubmissions.ID = key AND LearnerSubmissions.submissions.score =

// // Weighted average:
// //  -Find score for assignment_id 1 WHERE assignment_id = 1
// let learnerArray1 = LearnerSubmissions[i].assignment_id.filter(assignment_id=> assignment_id === 1)
// //  -Find score for assignment_id 2 WHERE assignment_id = 2
// let learnerArray2 = LearnerSubmissions[i].assignment_id.filter(assignment_id=> assignment_id === 2)
// //  -Find total points for assignment 1
// let totalPoints1 = LearnerSubmissions[i].submissions.score.filter(assignment_id=>assignment_id === 1)
// //  -Finde total possible points for assignment 2
// let totalPoints2 = LearnerSubmissions[i].submissions.score.filter(assignment_id=>assignment_id === 2)
// // create new student avg variable that = (1:score + 2:score) / (1:possible + 2:possible)


// // I want to loop through each learnerSubmission and filter out the 1's, 2, and 3s
// // switch (LearnerSubmissions) {
// //  case (assignment_id=>assignment_id === 1):{

// //  }
// // }


 
// //  let weightedAvg = LearnerSubmissions
// //  console.log(studentID)
// //  console.log(4)
  
