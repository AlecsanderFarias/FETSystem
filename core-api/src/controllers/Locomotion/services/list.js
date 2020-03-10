const LocomotionModel = require('../../../models/Locomotion');

module.exports = async (req, res) => {
  try {
    const { page, perPage, nickname, board, double, cart } = req.query;

    const customOptions = {
      docs: 'locomotions',
      totalDocs: 'total'
    };

    const options = {
      limit: parseInt(perPage) || 10,
      page: parseInt(page) || 1,
      customLabels: customOptions
    };

    let query = {};

    if (nickname) {
      query.nickname = { $regex: nickname, $options: 'i' };
    }

    if (board) {
      query.board = { $regex: board, $options: 'i' };
    }

    if (double) {
      query.double = double; // dupla ou nao

      if (cart) {
        query.cart = cart; //carreta ou caminhao
      }
    }

    const locomotions = await LocomotionModel.paginate(query, options);

    return res
      .status(200)
      .json(locomotions)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
