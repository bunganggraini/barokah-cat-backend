module.exports = (sequelize, DataTypes) => {

    const Color = sequelize.define("Color",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        category_id:{
            type: DataTypes.STRING,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        category_cat:{
            type: DataTypes.STRING,
            allowNull:false
        },
        brand:{
            type: DataTypes.STRING,
            allowNull:false
        },
        hex_code:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName: "colors", 
        timestamps: false
    }) 
    return Color
}
