import { Schema } from "mongoose";


// NOTE once a schema is finished it needs to be registerd with the db in DBcontext
export const carSchema = new Schema(
  {
    make: {type:String, required: true, minlength: 3, maxlength: 15},
    model: {type:String, required: true, minlength: 3, maxlength: 55},
    year: {type:Number, required: true, min: 1995, max: new Date().getFullYear() + 1},
    price: {type: Number, required: true, min: 1, max: 10000000},
    imgUrl: {type: String, required: true, maxlength: 1000, default: 'https://images.unsplash.com/photo-1511125357779-27038c647d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'},
    description: {type: String, maxlength: 5000},
    color: {type: String, minlength: 7, maxlength: 7, default: '#ffffff'},
    isNew: {type: Boolean, required: true, default: false}
  }
)
