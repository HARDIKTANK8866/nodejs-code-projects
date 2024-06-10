module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,  // Ensures name is required
            validate: {
                notEmpty: true   // Ensures name is not empty
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,  // Ensures email is required
            validate: {
                isEmail: true,  // Ensures email format is correct
                notEmpty: true  // Ensures email is not empty
            },
            unique: true        // Ensures email is unique
        }
    }, {
        timestamps: true  // Adds createdAt and updatedAt fields
    });

    return Customer;
};
