import sequelize from 'sequelize';
import db from './db.js';

const Pergunta = db.define('pergunta',{
    titulo:{
        type:sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:sequelize.TEXT,
        allowNull:false
    }

});

Pergunta.sync({force:false}).then(()=>{
    
});

export default  Pergunta