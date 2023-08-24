import mongoose from "mongoose";
const esquema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Invalid name"],
        trim: true,
        minlength: 5,
        maxlength: [55, 'length is too long']
    },
    edad: {
        type: Number,
        required:[true, "Invalid age"],
        min: [1, "Must be over years old "],
        max: [99, "Must be maximum 99 years old"],
        trim: true,
    },
    familia: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

let modeloUsuario;

try {
    modeloUsuario = mongoose.model('Usuario');
} catch (error) {
    modeloUsuario = mongoose.model('Usuario', esquema);
}

export default modeloUsuario;

