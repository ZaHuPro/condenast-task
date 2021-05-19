import log from './utils/logger';
import serverInit from './providers/express';

log.info('Server :: Booting...');
serverInit();
