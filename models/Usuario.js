module.exports = (sequelize, dataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: dataTypes.STRING,
        email: dataTypes.STRING,
        senha: dataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'usuarios'
    });

    return Usuario;
}