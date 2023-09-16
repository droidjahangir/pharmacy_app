import express from 'express';
import pharmacyRouter from './pharmacy.js';

const router = express.Router();

router.use('/pharmacy', pharmacyRouter);

export default router;
