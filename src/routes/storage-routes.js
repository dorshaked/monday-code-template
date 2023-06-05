import { Router } from 'express';
import { Storage } from '@mondaycom/apps-sdk';
import { tokenExtractionMiddleware } from '../middlewares/token-extraction-middleware.js';

const storage = new Storage();

const router = Router();

router.use('/storage/:key', tokenExtractionMiddleware);

router.get('/storage/:key', async (req, res) => {
  const token = req.token;
  const { key } = req.params;

  try {
    const result = await storage.get(key, { token });
    console.log('get result', JSON.stringify(result));
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

router.delete('/storage/:key', async (req, res) => {
  const token = req.token;
  const { key } = req.params;

  try {
    const result = await storage.delete(key, { token });
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

router.post('/storage/:key', async (req, res) => {
  const token = req.token;
  const { key } = req.params;
  const { value } = req.body;

  try {
    const result = await storage.set(key, value, { token });
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

export default router;
