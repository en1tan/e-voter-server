const AwardServ = require('./../services/award.service');

const response = require('./../utils/response');

class AwardContoller {
  async create(req, res) {
    const result = await AwardServ.create(req.body);
    res.status(201).send(response('award created', result));
  }

  async getAll(req, res) {
    const result = await AwardServ.getAll();
    res.status(200).send(response('All award', result));
  }

  async getOne(req, res) {
    const result = await AwardServ.getOne(req.params.awardId);
    res.status(200).send(response('award data', result));
  }
}

module.exports = new AwardContoller();
