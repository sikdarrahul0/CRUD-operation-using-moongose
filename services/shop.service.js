const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}
module.exports.find = () => {
    return Shop.find();
}
module.exports.findById = id => {
    return Shop.find(id);
}
module.exports.update = (id, name) => {
    return Shop.findByIdAndUpdate(id, name);
}
module.exports.delete = id => {
    return Shop.findByIdAndRemove(id);
}