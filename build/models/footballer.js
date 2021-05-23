"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable consistent-return */
var mongoose_1 = __importDefault(require("mongoose"));
var footballerSchema = new mongoose_1.default.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    team: { type: String },
    number: { type: String },
    height: { type: Number },
    rating: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, {
    timestamps: true,
});
// userSchema.pre("save", function userSchemaPre(next) {
//   const user = this;
//   if (this.isModified('password') || this.isNew) {
//     // eslint-disable-next-line
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) {
//         return next(err);
//       } // eslint-disable-next-line
//       if(!isEmpty(user)){
//       bcrypt.hash(user.password, salt, (hashErr, hash) => {
//         //eslint-disable-line
//         if (hashErr) {
//           return next(hashErr);
//         }
//         user.password = hash;
//         next();
//       });
//     }
//     });
//   } else {
//     return next();
//   }
// });
/**
 * Statics
 */
// userSchema.statics = {
//   /**
//    * Get User
//    * @param {ObjectId} id - The objectId of user.
//    */
//   get(id) {
//     return this.findById(id)
//       .execAsync()
//       .then((user) => {
//         if (user) {
//           return user;
//         }
//       });
//   },
// };
exports.default = mongoose_1.default.model('Footballer', footballerSchema);
