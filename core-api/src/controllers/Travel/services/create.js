const TravelModel = require('../../../models/Travel');

module.exports = async (req, res) => {
  try {
    const travelData = req.body;

    console.log(travelData);

    /*  if (!(await locomotionIsAvaible(travelData.locomotion)))
      return res.status(401).end(); //locomocao nao esta livre no momento

    if (
      travelData.subLocomotion &&
      !(await locomotionIsAvaible(travelData.subLocomotion))
    )
      return res.status(401).end(); //locomocao nao esta livre no momento */

    /*  if (!(await driverIsAvaible(travelData.driver)))
      return res.status(401).end(); //motorista nao esta livre no momento
 */

    const travel = await TravelModel.create(travelData);

    return res
      .status(200)
      .json(travel)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
