const router = require('express').Router();
const AwardCtrl = require('./../controllers/award.controller');

router.post('/', AwardCtrl.create);
router.get('/', AwardCtrl.getAll);
router.get('/:awardId', AwardCtrl.getOne);

module.exports = router;
