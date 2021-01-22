const Award = require("./../models/award.model");
const CustomError = require("./../utils/custom-error");

class AwardService {

  async create(data) {
    return await new Award(data).save();
  }

  async getAll() {
    return await Award.find({});
  }

  async getOne(awardId) {
    const award = await Award.findOne({ _id: awardId });
    if (!award) throw new CustomError("Award does not exists");

    return award
  }

  async update(awardId, data) {
    const award = await Award.findByIdAndUpdate(
    { _id: awardId },
    { $set: data },
    { new: true }
    );

    if (!award) throw new CustomError("Award dosen't exist", 404);

    return award;
  }

  async delete(awardId) {
    const award = await Award.findOne({ _id: awardId });
    award.remove()
    return award
  }

}

module.exports = new AwardService();