const express = require("express")
const app = express()
const PORT = 8100

// CORS
const cors = require("cors")
app.use (cors())

const vitalSigns = {
    'neonate': {
        'heartRate': '70-170',
        'respiratoryRate':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    },

    'infant': {
        'heartRate': '80-160',
        'respiratoryRate':'26-40',
        'systolic': '60-90',
        'diastolic': '20-60'
    },
    
    'toddler': {
        'heartRate': '80-130',
        'respiratoryRate':'20-30',
        'systolic': '75-100',
        'diastolic': '50-70'
    },

    'preschool': {
        'heartRate': '80-110',
        'respiratoryRate':'20-30',
        'systolic': '80-110',
        'diastolic': '50-80'
    },

    'schoolage': {
        'heartRate': '75-100',
        'respiratoryRate':'20-24',
        'systolic': '82-120',
        'diastolic': '50-80'
    },

    'adolescent': {
        'heartRate': '60-90',
        'respiratoryRate':'16-20',
        'systolic': '85-130',
        'diastolic': '55-80'
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