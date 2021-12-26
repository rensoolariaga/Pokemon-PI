const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,  // para que sea obligatorio
    },

    id: {
      type: DataTypes.UUID,         // el tipo de dato es para diferenciar el id de la db del que trae la api
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,  // para que sea obligatorio
      primaryKey: true
    },

    life: { 
      type: DataTypes.STRING,
    },
    
    strength: {
      type: DataTypes.STRING,
    },

    defense: {
      type: DataTypes.STRING,
    },

    speed: {
      type: DataTypes.STRING,

    },

    height: {
      type: DataTypes.STRING,

    },

    weight: {
      type: DataTypes.STRING,

    }, 
    
    image: {
      type: DataTypes.STRING,
    }
    
  }, { timestamps: false }); 
  
};
