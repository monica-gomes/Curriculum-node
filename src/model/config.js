import { Sequelize } from "sequelize"
import getResume from "./resume"

const sequelize = new Sequelize(process.env.DB_URL)

const models = {
    Resume: getResume(sequelize, Sequelize),
};

export default models;
export { sequelize }

