module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre'; //Es así como se llama la tabla//
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false //Para cuando fué creado y actualizado//
    };
    const Genre = sequelize.define(alias, cols, config); //Método define, con el alias, que es lo que está declarado. Dentro del paréntesis configura todo lo que está arriba//

    Genre.associate = function(models) {
        Genre.hasMany(models.Movie, {
            as:"movie",
            foreignKey:"genre_id"
        })
    }

    return Genre
}