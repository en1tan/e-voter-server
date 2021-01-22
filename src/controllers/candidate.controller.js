const CandidateServ = require('./../services/candidate.service');

const response = require('./../utils/response');

class CandidateContoller {
  async create(req, res) {
    const result = await CandidateServ.create(req.body);
    res.status(201).send(response('candidate created', result));
  }

  async getAll(req, res) {
    const result = await CandidateServ.getAll();
    res.status(200).send(response('All candidate', result));
  }

  async getOne(req, res) {
    const result = await CandidateServ.getOne(req.params.candidateId);
    res.status(200).send(response('candidate data', result));
  }

  async update(req, res) {
    var { votes } = await CandidateServ.getOne(req.params.candidateId);
    req.body.votes += votes;
    if (req.body.votes < votes) {
      res.status(400).send(response('invalid request', 'Wrong vote count', false));
    } else {
      const result = await CandidateServ.update(req.params.candidateId, req.body);
      res.status(200).send(response('candidate updated', result));
    }
  }

  async delete(req, res) {
    const result = await CandidateServ.delete(req.params.candidateId);
    res.status(200).send(response('candidate deleted', result));
  }

  // Cross Requests
  async getCandidates(req, res) {
    const candidates = await CandidateServ.getCandidates(req.params.awardId);
    res.status(200).send(response('All candidates of award', candidates));
  }
}

module.exports = new CandidateContoller();
