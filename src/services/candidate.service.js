const Candidate = require('./../models/candidate.model');
const CustomError = require('./../utils/custom-error');

class CandidateService {
  async create(data) {
    return await new Candidate(data).save();
  }

  async getAll() {
    return await Candidate.find({});
  }

  async getOne(candidateId) {
    const candidate = await Candidate.findOne({ _id: candidateId });
    if (!candidate) throw new CustomError('Candidate does not exists');

    return candidate;
  }

  async update(candidateId, data) {
    const candidate = await Candidate.findByIdAndUpdate(
      { _id: candidateId },
      { $set: data },
      { new: true }
    );

    if (!candidate) throw new CustomError("Candidate dosen't exist", 404);

    return candidate;
  }

  async delete(candidateId) {
    const candidate = await Candidate.findOne({ _id: candidateId });
    candidate.remove();
    return candidate;
  }

  async getCandidates(awardId) {
    const candidates = await Candidate.find({ awardId: awardId });
    return candidates;
  }
}

module.exports = new CandidateService();
