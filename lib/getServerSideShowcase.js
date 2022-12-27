import dynamicURLFetch from './dynamicURLFetch'

export const getServerSideShowcase = async ({ req }) => {
	const res = await dynamicURLFetch({
		req,
		path: `/api/showcase`
	})
	const { showcase } = await res.json()

	return {
		props: {
			showcase
		}
	}
}

export default getServerSideShowcase

