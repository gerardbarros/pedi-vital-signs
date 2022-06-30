const express = require("express")
const app = express()
const PORT = 8100

// CORS
const cors = require("cors")
app.use (cors())

const vitalSigns = {
    "neonate": {
        "heart rate": "110-170",
        "respiratory rate": "40-70",
        "systolic": "55-75",
        "diastolic": "65-85",
    },

    "newborn": {
        "heart rate": "110-160",
        "respiratory rate": "35-55",
        "systolic": "65-85",
        "diastolic": "45-55",
    },
    
    "infant": {
        "heart rate": "110-160",
        "respiratory rate": "30-45",
        "systolic": "70-90",
        "diastolic": "50-65",
    },

    "toddler": {
        "heart rate": "90-160",
        "respiratory rate": "22-38",
        "systolic": "80-100",
        "diastolic": "55-65",
    },

    "preSchool": {
        "heart rate": "80-150",
        "respiratory rate": "22-30",
        "systolic": "90-105",
        "diastolic": "60-75",
    },

    "schoolAge": {
        "heart rate": "70-120",
        "respiratory rate": "18-25",
        "systolic": "97-115",
        "diastolic": "57-76",
    },
    
    "preTeen": {
        "heart rate": "60-110",
        "respiratory rate": "16-22",
        "systolic": "100-120",
        "diastolic": "60-75",
    },

    "adolescent": {
        "heart rate": "60-100",
        "respiratory rate": "12-20",
        "systolic": "110-135",
        "diastolic": "60-75",
    },

    "age group not found": {
        "heart rate": "unknown",
        "respiratory rate": "unknown",
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