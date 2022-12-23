/**
 * Fetch using relative paths or absolute paths.
 * @param path - if this starts with a forward slash then it is relative
 * @param req - request
 * @returns {Promise<Response>}
 */
const dynamicURLFetch = async ({ path, req }) => {
	const protocol = req.headers['x-forwarded-proto'] || 'http'
	const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

	return fetch(path.startsWith('/') ? `${baseUrl}${path}` : path)
}

export default dynamicURLFetch