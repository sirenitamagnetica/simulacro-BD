import mongoose from "mongoose";
import { env } from "./env.js";

// ── Schema of an Appointment con esta estructura si no cumple la estructura
//  lo que sea que vaya a guardar no deberia dejar guardarlo 
const appointmentSchema = new mongoose.Schema({
    appointmentId: {type: String, required: true},
    date: {type: Date, required: true},
    doctorName: {type: String, required: true}, 
    doctorEmail: {type: String, required: true},
    specialty: {type: String, required: true},
    treatmentCode: {type: String},
    treatmenDescription: {type: String},
    treatmentCost: {type: Number, required: true},
    insuranceProvider: {type: String, required: true},
    coveragePercentage: {type: Number, required: true},
    amountPaid: {type: Number, required: true}
    
}, {_id: false}); // para que no cree el id automatico 
// ── Schema of a Patient History
const patientHistorySchema = new mongoose.Schema({
    patientEmail: {type: String, 
    required: true, 
    unique: true, 
    match: /^\S+@\S+\.\S+$/}, // dice que cuabdo inicia que se pueden repetir y encierto punto va a tener un @ y luego un punto es para el correo
    patientName: {type: String, required: true},
    appointments: {
    type: [appointmentSchema],
    default: []
    }
}, {timestamps: true});

export const PatientHistory = 
    mongoose.model("PatientHistory", 
        patientHistorySchema);

export async function connectMongo(){
    try{
        await mongoose.connect(env.databaseMongoUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; 
    }
    
}
