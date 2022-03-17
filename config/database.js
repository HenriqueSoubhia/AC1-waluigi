const mongoose = require('mongoose')

const conexao = async() =>{
    var atlas = mongoose.connect('mongodb+srv://admin:admin123456@fiap-tecnico.dsp0j.mongodb.net/test')
}

module.exports = conexao
