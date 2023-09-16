import { Router } from 'express';
import * as pharmacyController from '../controllers/pharmacyController.js';

const router = Router();

router.route('/create').post(pharmacyController.createPharmacy);
router.route('/update').post(pharmacyController.updatePharmacy);
router.route('/all').get(pharmacyController.allPharmacy);
router.route('/delete/:id').get(pharmacyController.deletePharmacy);
router.route('/view/:id').get(pharmacyController.viewPharmacy);

export default router;
