const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainerDetails = sequelize.define(
    'TrainerDetails',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        specialties: {
            type: DataTypes.STRING(255),
        },
        available_slots: {
            type: DataTypes.TEXT,
        },
    },
    {
        timestamps: true,
        tableName: 'TrainerDetails',
    }
);

module.exports = TrainerDetails;
