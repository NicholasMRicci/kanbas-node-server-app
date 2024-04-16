import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserByCredentials = (username, password) => {
    const val = model.findOne({ username, password });
    return val;
};
export const updateUser = (username, user) => model.updateOne({ username: username }, { $set: user });
export const deleteUser = (username) => model.deleteOne({ username: username });