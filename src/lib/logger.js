/**
 * Logger utility for development and production environments
 * @module src/lib/logger
 * @author Chrislain AVOCEGAN <chrislainavocegan@gmail.com>
 * @copyright 2024 Chrislain AVOCEGAN
 * @license MIT
 */

/**
 * Logger object with environment-aware methods
 * Only logs in development mode to keep production clean
 */
export const logger = {
  /**
   * Log general information (development only)
   * @param {...any} args - Arguments to log
   */
  log: (...args) => {
    if (import.meta.env.DEV) {
      console.log('[INFO]', ...args)
    }
  },

  /**
   * Log errors (always logged, even in production)
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    console.error('[ERROR]', ...args)
  },

  /**
   * Log warnings (development only)
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    if (import.meta.env.DEV) {
      console.warn('[WARN]', ...args)
    }
  },

  /**
   * Log debug information (development only)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (import.meta.env.DEV) {
      console.debug('[DEBUG]', ...args)
    }
  }
}
