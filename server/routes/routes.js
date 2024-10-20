import express from 'express';
import { uploadFiles , downloadFile} from '../controllers/file-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFiles);

router.post('/file/:id', downloadFile);

export default router;