/**
 *
 * Required external Modules
 *
 */

import { Schema, Types, model } from "mongoose";

/**
 *
 * interfaces and enums
 *
 */

export interface IUser {
  username: string;
  organization: string;
  country: string;
  bio?: string;
  profileImg?: string;
  banner?: string;
  email: string;
}

/**
 *
 * Schemas
 *
 */

const schema = {
  user: new Schema<IUser>({
    username: { type: String, required: true },
    bio: { type: String, required: false },
    country: { type: String, required: true },
    organization: { type: String, required: true },
    banner: { type: String, required: false },
    profileImg: { type: String, required: false },
    email: { type: String, required: true },
  }),
};

/**
 *
 * Models
 *
 */

export const userModel = model("User", schema.user);
