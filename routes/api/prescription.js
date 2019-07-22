const express = require('express');
const router = express.Router();

const Prescriptions = require('../../models/Prescription');

//@route GET api/prescription
//@desc GET ALL Prescriptions
//@access Public

router.get('/', (req, res) => {
    Prescriptions.find()
        .then(prescriptions => res.json(prescriptions))
});

//@route POST api/prescription
//@desc Create a Prescription
//@access Public

router.post('/', (req,res) => {
    console.log(req.body)
    const newPrescriptions = new Prescriptions({
        Prescription: req.body.Prescription,
    })
    newPrescriptions
        .save()
        .then(prescription => res.json(prescription));
});

//@route DELETE api/prescription/:id
//@desc Delete A Prescription
//@access public

router.delete('/:id', (req,res) => {
    Prescriptions.findById(req.params.id)
        .then(prescriptions => prescriptions.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;