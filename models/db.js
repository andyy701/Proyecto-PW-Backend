import Sequelize from "sequelize";
import config from '../config/config.json' assert {type: "json"};
const config=require('../config/config.json')

const env=process.env.NODE_ENV || 'development';
const parameters = config[env];

const sequelize=new Sequelize(parameters);
export default sequelize;