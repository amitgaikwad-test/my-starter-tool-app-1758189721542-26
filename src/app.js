import express from 'express';
import routes from './routes/index.js';
import logger from './middleware/logger.js';

const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger());

// Routes
app.use('/', routes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const payload = {
    error: {
      message: err.message || 'Internal Server Error',
      status
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    payload.error.stack = err.stack;
  }

  res.status(status).json(payload);
});

export default app;
