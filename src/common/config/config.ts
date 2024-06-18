import { ConfigProps } from '../interfaces/config.interface';

export const config = (): ConfigProps => ({
  port: parseInt(process.env.APP_LISTEN_PORT, 10) || 3001,
  api: {
    apiUrl: process.env.APP_API_URL,
    httpTimeout: parseInt(process.env.APP_HTTP_TIMEOUT, 10),
  },
});
