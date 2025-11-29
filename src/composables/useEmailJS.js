/**
 * EmailJS composable for professional email handling
 * @module src/composables/useEmailJS
 * @author Chrislain AVOCEGAN <chrislainavocegan@gmail.com>
 * @copyright 2024 Chrislain AVOCEGAN
 * @license MIT
 */

import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { logger } from '../lib/logger'

/**
 * Composable for handling EmailJS operations
 * @returns {Object} EmailJS utilities and state
 */
export function useEmailJS() {
  const isLoading = ref(false)
  const error = ref(null)
  const success = ref(false)

  /**
   * Validate environment variables
   * @private
   */
  const validateConfig = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    if (!serviceId || !templateId || !userId) {
      throw new Error(
        'EmailJS configuration is missing. Please check your .env file.'
      )
    }

    return { serviceId, templateId, userId }
  }

  /**
   * Send email using EmailJS
   * @param {Object} formData - Form data to send
   * @param {string} formData.name - Sender name
   * @param {string} formData.email - Sender email
   * @param {string} formData.message - Message content
   * @returns {Promise<boolean>} Success status
   */
  const sendEmail = async (formData) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      // Validate configuration
      const { serviceId, templateId, userId } = validateConfig()

      // Send email
      await emailjs.send(serviceId, templateId, formData, userId)

      success.value = true
      logger.log('Email sent successfully')

      // Auto-reset success message after 5 seconds
      setTimeout(() => {
        success.value = false
      }, 5000)

      return true
    } catch (err) {
      logger.error('Failed to send email:', err)
      
      // User-friendly error messages
      if (err.message.includes('configuration')) {
        error.value = 'Configuration error. Please contact the administrator.'
      } else if (err.status === 400) {
        error.value = 'Invalid form data. Please check your inputs.'
      } else if (err.status === 401) {
        error.value = 'Authentication failed. Please contact the administrator.'
      } else {
        error.value = 'Failed to send email. Please try again later.'
      }

      return false
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Reset all states
   */
  const reset = () => {
    isLoading.value = false
    error.value = null
    success.value = false
  }

  return {
    sendEmail,
    reset,
    isLoading,
    error,
    success
  }
}
