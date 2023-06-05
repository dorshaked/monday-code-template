import mondayRoutes from './monday.js';
import secureStorageRoutes from './secure-storage-routes.js'
import storageRoutes from './storage-routes.js'
import { Router } from 'express';

const router = Router()

router.use(storageRoutes)
router.use(secureStorageRoutes);
router.use(mondayRoutes);

router.get('/', function (req, res) {
  res.json(getHealth());
  res.end();
});

router.get('/health', function (req, res) {
  res.json(getHealth());
  res.end();
});

function getHealth() {
  return {
    ok: true,
    message: 'Healthy',
  };
}

export default router;
