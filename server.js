const express = require("express")
const app = express()
const PORT = 8100

// CORS
const cors = require("cors")
app.use (cors())

const vitalSigns = {
    "neonate": {
        "heartRate": "110-170",
        "respiratoryRate": "40-70",
        "systolic": "55-75",
        "diastolic": "65-85",
    },

    "newborn": {
        "heartRate": "110-160",
        "respiratoryRate": "35-55",
        "systolic": "65-85",
        "diastolic": "45-55",
    },
    
    "infant": {
        "heartRate": "110-160",
        "respiratoryRate": "30-45",
        "systolic": "70-90",
        "diastolic": "50-65",
    },

    "toddler": {
        "heartRate": "90-160",
        "respiratoryRate": "22-38",
        "systolic": "80-100",
        "diastolic": "55-65",
    },

    "preschool": {
        "heartRate": "80-150",
        "respiratoryRate": "22-30",
        "systolic": "90-105",
        "diastolic": "60-75",
    },

    "schoolage": {
        "heartRate": "70-120",
        "respiratoryRate": "18-25",
        "systolic": "97-115",
        "diastolic": "57-76",
    },
    
    "preteen": {
        "heartRate": "60-110",
        "respiratoryRate": "16-22",
        "systolic": "100-120",
        "diastolic": "60-75",
    },

    "adolescent": {
        "heartRate": "60-100",
        "respiratoryRate": "12-20",
        "systolic": "110-135",
        "diastolic": "60-75",
    },

    "age group not found": {
        "heartRate": "unknown",
        "respiratoryRate": "unknown",
        "systolic": "unknown",
        "diastolic": "unknown",
    }
    
}




app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:age", (request, response) => {
    const ageGroup = request.params.age.toLowerCase()
    if(vitalSigns[ageGroup]){
        response.json(vitalSigns[ageGroup])
    } else{
        response.json(vitalSigns["age group not found"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = app;