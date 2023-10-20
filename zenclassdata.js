//use zenClassDB

db.users.insertMany(
    [
        {
            "user_id": "1102",
            "name" : "Anbu",
            "batch":"b43WE",
            "task":80,
            
        },
        {
            "user_id": "1103",
            "name" : "Aravinth",
            "batch":"b43WE",
            "task":70,

        },
        {
            "user_id": "1104",
            "name" : "Chandru",
            "batch":"b47WD",
            "task":65,

        },
        {
            "user_id": "1105",
            "name" : "Dinesh",
            "batch":"b47WD",
            "task":0,

        },
        {
            "user_id": "1106",
            "name" : "Kalaivani",
            "batch":"b43WD",
            "task":95,
            "experience":1
        },
    ]
)

db.codekata.insertMany(
    [
        {
            "user_id": "1102",
            "Problemsolved":500            
        },
        {
            "user_id": "1103",
            "Problemsolved":800
        },
        {
            "user_id": "1104",
            "Problemsolved":400
        },
        {
            "user_id": "1105",
            "Problemsolved":10
        },
        {
            "user_id": "1106",
            "Problemsolved":850
        },
       
    ]
)

db.attendance.insertMany(
    [
        {
            "user_id": "1102",
            "date": "01-Oct-2020",
            "abscent": "No",
            "task_submit": "yes"  
        },
        {
            "user_id": "1103",
            "date": "10-Oct-2020",
            "abscent": "No",
            "task_submit": "yes"
        },
        {
            "user_id": "1104",
            "date": "15-Oct-2020",
            "abscent": "No",
            "task_submit": "yes"
        },
        {
            "user_id": "1105",
            "date": "20-Oct-2020",
            "abscent": "Yes",
            "task_submit": "no"
        },
        {
            "user_id": "1106",
            "date": "31-Oct-2020",
            "abscent": "No",
            "task_submit": "yes"
        },
       
           
    ]
)

db.topics.insertMany(
    [
        {
            
            "topic_id": "101",
            "topic-name":"Introduction to Browser & web",
            "month": "october",
            "date": "01-Oct-2020"
        },
        {
            
            "topic_id": "102",
            "topic-name":"JS array & objects",
            "month": "october",
            "date": "10-Oct-2020"
        },
        {
            
            "topic_id": "103",
            "topic-name":"Functions",
            "month": "october",
            "date": "15-Oct-2020"
        },
        {
            
            "topic_id": "104",
            "topic-name":"Bootstrap design demo",
            "month": "october",
            "date": "20-Oct-2020"
        },
        {
            
            "topic_id": "105",
            "topic-name":"React components",
            "month": "october",
            "date": "31-Oct-2020"
        },
        
    ]
)

db.tasks.insertMany(
    [
        {
            
            "task_id": "101",
            "task":"https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJcJrmVVLjMqN_TmmsHkL41AoIc/preview",
            "month": "october",
            "date": "01-Oct-2020"
        },
        {
            
            "task_id": "102",
            "task":"https://docs.google.com/document/d/11URBvZUsXT4Sr3YtCuv-5gcOHmkOmX976h-QKcXbWqs/edit",
            "month": "october",
            "date": "10-Oct-2020"
        },
        {
            
            "task_id": "103",
            "task":"The rating according to value given * Disable add to cart button when added to card * Remove item from cart & enable add to cart",
            "month": "october",
            "date": "15-Oct-2020"
        },
        {
            
            "task_id": "104",
            "task":"Design an UI to implement the CRUD",
            "month": "october",
            "date": "20-Oct-2020"
        },
        {
            
            "task_id": "105",
            "task":"https://github.com/rvsp/database/tree/master/mongodb",
            "month": "october",
            "date": "31-Oct-2020"
        },
        
    ]
)

db.companyDrives.insertMany(
    [
        {
         "Company" : "Wibro",
         "date": "15-Oct-2020",
         "user_id": "1102",
         "name" : "Anbu"
         
        },
        {
            "Company" : "Amazon",
            "date": "18-Oct-2020",
            "user_id": "1103",
            "name" : "Aravinth"
        },
        {
            "Company" : "Infosys",
            "date": "25-Oct-2020",
            "user_id": "1102",
            "name" : "Anbu"
        },
        {
            "Company" : "Mahendra",
            "date": "15-Oct-2020",
            "user_id": "1104",
            "name" : "Chandru"
        }
     ]
)

db.mentors.insertMany(
    [
        {
        "mentor_id": "5001",
         "name" : "Sanjay",
         "batch" : "b47WD",
         "stack" :  "MERN",
         "mentees" :  40
        },
        {
        "mentor_id": "5002",
         "name" : "Ragav",
         "batch" : "b45WD",
         "stack" :  "MERN",
         "mentees" :  10
        },
        {
         "mentor_id": "5003",
         "name" : "Sangeetha",
         "batch" : "b43WD",
         "stack" :  "MERN",
         "mentees" :  30
        },
        {
         "mentor_id": "5004",
         "name" : "Nagaraj",
         "batch" : "b42WD",
         "stack" :  "MERN",
         "mentees" :  12
        }
     ]
)

//topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
     $lookup:{
         from: "tasks",
         localField:"month",
         foreignField:"month",
         as : "October_Month"
     }
    }
 ])

 //company drives which appeared between 15 oct-2020 and 31-oct-2020
 db.companyDrives.find({date: {$gte: "15-Oct-2020", $lte: "31-oct-2020"}})

 //company drives and students who are appeared for the placement.
 db.companyDrives.find().forEach(function(placement){
    print("user_id: "+ placement.user_id)
    print("student name: "+ placement.name)
    print("Company name: "+ placement.Company)
    print("-----------------------")})

//number of problems solved by the user in codekata
db.codekata.find().forEach(function(codekprb){ print("User id:", codekprb.user_id)
 print("SolvedCount:", codekprb.Problemsolved)})

 //mentors with who has the mentee's count more than 15
 db.mentors.find({mentees:{$gt:15}})

 //number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
 
 db.attendance.find({$or:[{abscent:"yes"}, {task_submit : "no"}]})