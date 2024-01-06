import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class CreatePost extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

CreatePost.init(
    {
       blogPostId:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
       },
       title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT,
      },
      postedDate: {
        type: DataTypes.DATE,
      },
    
    },

    {
        modelName: 'createBlogPost',
        sequelize: db,
    }
)