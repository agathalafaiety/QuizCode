module.exports = (sequelize, dataTypes) => {

    const Categoria = sequelize.define('Categoria', {
        id: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria: dataTypes.STRING
    },  {
        timestamps: false,
        tableName: 'categorias'
    });
    
    return Categoria;
}