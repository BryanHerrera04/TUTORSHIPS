import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Tutor from './Tutor';

const Student = sequelize.define('student', {
    st_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    st_name: {
        type: Sequelize.CHAR,
    },
    st_lastname: {
        type: Sequelize.CHAR,
    },
    st_email: {
        type: Sequelize.CHAR,
    },
    st_age: {
        type: Sequelize.INTEGER,
    },
    st_created_tm: {
        type: Sequelize.DATE,
    },
    st_country: {
        type: Sequelize.CHAR,
    },
    st_study: {
        type: Sequelize.CHAR,
    },
    st_institute: {
        type: Sequelize.CHAR,
    },
    st_phone: {
        type: Sequelize.INTEGER,
    },
    st_state: {
        type: Sequelize.CHAR,
    },
}, {
    freezeTableName: true,
    timestamps: false
})

// Student.hasMany(Tutor, { foreingKey: 'st_id'});
// Tutor.belongsTo(Student, { foreingKey: 'st_id'});

export default Student;
