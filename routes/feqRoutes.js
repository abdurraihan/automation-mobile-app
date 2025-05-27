import express from 'express';
import { submitFeq, getFeq, sendFeqEmail } from '../controllers/feqController.js';

const router = express.Router();

router.post('/', submitFeq);
router.get('/:id', getFeq);
router.post('/send-mail', sendFeqEmail);

export default router;
