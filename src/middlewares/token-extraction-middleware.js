export async function tokenExtractionMiddleware(req, res, next) {
  try {
    let { authorization } = req.headers;
    if (!authorization && req.query) {
      authorization = req.query.token;
    }

    if (!authorization) {
      throw new Error('Missing access token');
    }

    req.token = authorization;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'not authenticated' });
  }
}
