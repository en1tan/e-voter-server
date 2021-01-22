const router = require('express').Router();
const CandidateCtrl = require('./../controllers/candidate.controller');

router.post('/', CandidateCtrl.create);
router.get('/', CandidateCtrl.getAll);
router.get('/:candidateId', CandidateCtrl.getOne);
router.get('/award/:awardId', CandidateCtrl.getCandidates);
router.put('/:candidateId', CandidateCtrl.update);
router.delete('/:candidateId', CandidateCtrl.delete);

module.exports = router;
