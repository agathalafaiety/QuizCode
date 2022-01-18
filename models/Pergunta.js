module.exports = (sequelize, dataTypes) => {

    const Pergunta = sequelize.define('Pergunta', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        titulo_pergunta: dataTypes.INTEGER,
    }, {
        timestamps: false,
        tableName: 'respostas'
    });

    Pergunta.associate = (Models) => {
        Pergunta.belongsTo(Models.Categoria, {
            foreignKey: 'categoria_id',
            as: 'categoria'
        })
    }

    return Pergunta;
}