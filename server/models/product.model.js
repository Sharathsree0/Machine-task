const mongoose= require("mongoose");


const variationSchema = new mongoose.Schema({
    size:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:0,
        required:true
    }
})

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        default:"LubriMax"
    },
     image: {
      type: String,
      required: true,
    },
    variations:[variationSchema]
},
    {
        timestamps:true
    }
);


module.exports = mongoose.model("Product", productSchema);