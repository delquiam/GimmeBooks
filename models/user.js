module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        // isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.favoriteBook, {
      onDelete: "CASCADE"
    });
  };

  return User;
};
