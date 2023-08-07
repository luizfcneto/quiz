import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('quiz', 'quiz', 'quiz', {
    dialect: 'postgres',
    logging: console.log,
    define: {
        charset: 'utf-8',
        collate: 'utf8_general_ci'
    }
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
