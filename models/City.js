import { Schema, model } from "mongoose"; 

let collection = "cities"

let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true }, 
    description: { type: String, required: true }, 
    
});

let City = model(collection, schema)
export default City;