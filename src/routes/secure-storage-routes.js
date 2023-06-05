import { Router } from 'express';
import { SecureStorage } from '@mondaycom/apps-sdk';

const secureStorage = new SecureStorage();

const router = Router();

router.get('/secure-storage/:key', async (req, res) => {
  const { key } = req.params;

  try {
    const result = await secureStorage.get(key);
    console.log('get result', JSON.stringify(result));
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

router.delete('/secure-storage/:key', async (req, res) => {
  const { key } = req.params;

  try {
    const result = await secureStorage.delete(key);
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

router.post('/secure-storage/:key', async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  try {
    const result = await secureStorage.set(key, value);
    res.json({ result });
  } catch (err) {
    res.status(err?.status || 500).json(err);
  }

  res.end();
});

export default router;
