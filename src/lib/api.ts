/** Base URL for the API endpoints */
const API_BASE_URL = 'your-api-base-url';

/**
 * Custom error class for API-related errors
 * @class APIError
 * @extends Error
 */
export class APIError extends Error {
  /**
   * Creates an instance of APIError
   * @param {number} status - HTTP status code of the error
   * @param {string} message - Error message
   */
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Handles the API response and throws an error if the response is not ok
 * @template T - The expected type of the response data
 * @param {Response} response - The fetch Response object
 * @returns {Promise<T>} The parsed response data
 * @throws {APIError} When the response is not ok
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }
  return response.json();
}

/**
 * API client for making HTTP requests
 */
export const api = {
  /**
   * Makes a GET request to the specified endpoint
   * @template T - The expected type of the response data
   * @param {string} endpoint - The API endpoint to make the request to
   * @returns {Promise<T>} The response data
   * @throws {APIError} When the request fails
   */
  get: async <T>(
    endpoint: string,
    query?: Record<string, string>,
  ): Promise<T> => {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        url.searchParams.append(key, value);
      }
    }
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse<T>(response);
  },

  /**
   * Makes a POST request to the specified endpoint
   * @template T - The expected type of the response data
   * @param {string} endpoint - The API endpoint to make the request to
   * @param {unknown} data - The data to send in the request body
   * @returns {Promise<T>} The response data
   * @throws {APIError} When the request fails
   */
  post: async <T>(endpoint: string, data: unknown): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse<T>(response);
  },

  /**
   * Makes a PUT request to the specified endpoint
   * @template T - The expected type of the response data
   * @param {string} endpoint - The API endpoint to make the request to
   * @param {unknown} data - The data to send in the request body
   * @returns {Promise<T>} The response data
   * @throws {APIError} When the request fails
   */
  put: async <T>(endpoint: string, data: unknown): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse<T>(response);
  },

  /**
   * Makes a DELETE request to the specified endpoint
   * @template T - The expected type of the response data
   * @param {string} endpoint - The API endpoint to make the request to
   * @returns {Promise<T>} The response data
   * @throws {APIError} When the request fails
   */
  delete: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse<T>(response);
  },
};
