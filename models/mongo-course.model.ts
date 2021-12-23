import { Schema, model, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface MCourse extends Document {
  title: string;
  topics: Array<string>;
}

const mongoCourseSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  topics: { type: Array, required: true }
});

mongoCourseSchema.plugin(uniqueValidator);

export default model<MCourse>("MCourse", mongoCourseSchema);
