module.exports = (sequelize, dataTypes) => {

    const Resposta = sequelize.define('Resposta', {
        id: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        titulo_resposta: dataTypes.INTEGER,
        resposta_certa: dataTypes.INTEGER
    },  {
        timestamps: false,
        tableName: 'respostas'
    });

    Resposta.associate = (Models) => {
        Resposta.belongsTo(Models.Pergunta, {
            foreignKey: 'pergunta_id',
            as: 'pergunta'
        })
    }
    
    return Resposta;
    }