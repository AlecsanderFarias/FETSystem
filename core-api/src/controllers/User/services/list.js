const UserModel = require('../../../models/User');

module.exports = async (req, res) => {
  try {
    const { page, perPage, name, cpf, email, driver, status } = req.query;

    const customOptions = {
      docs: 'users',
      totalDocs: 'total'
    };

    const options = {
      limit: parseInt(perPage) || 10,
      page: parseInt(page) || 1,
      customLabels: customOptions
    };

    let query = {};

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    if (cpf) {
      query.cpf = { $regex: cpf, $options: 'i' };
    }

    if (email) {
      query.email = { $regex: email, $options: 'i' };
    }

    if (driver) {
      query.driver = true;
    }

    if (status) {
      query.driver = status;
    }

    const users = await UserModel.paginate(query, options);

    return res
      .status(200)
      .json(users)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
