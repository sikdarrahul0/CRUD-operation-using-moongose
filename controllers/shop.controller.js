const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}
module.exports.getAll = async (req, res, next) => {
    try {
        const shop = await shopService.find();
        return res.status(200).json(shop);
        // if (!shop) throw Error("No users exist");
        // res.json(shop);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
      }
}
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const shop = await shopService.findById({_id: id});
        return res.status(200).json(shop);
        // if (!shop) throw Error("No users exist");
        // res.json(shop);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
      }
}
module.exports.updateById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const name = req.body;
        const shop = await shopService.update(id, name);
        return res.status(200).json(shop);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}
module.exports.deleteById = async function (req, res, next) {
    try {
        const id = req.params.id;
        const shop = await shopService.delete(id);
        return res.status(200).json(shop);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}
