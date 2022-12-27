import '@tollbrothers/tollbrothers-ui/dist/index.modern.css'
import 'blaze-slider/dist/blaze.css'
import Layout from '../app/Layout'
import { useState } from 'react'
import getServerSideShowcase from '../lib/getServerSideShowcase'

export const getServerSideProps = getServerSideShowcase

export default function App ({ Component, pageProps, router }) {
	const { slug } = router.query
	const { showcase = [] } = pageProps
	const component = slug?.[0]
	const currentShowcase = showcase.map(item => item.split('.js')[0])
	const currentComponentIndex = currentShowcase.findIndex((value) => value.toLowerCase() === component)
	const currentComponent = currentShowcase[currentComponentIndex]
	const breadcrumbs = slug?.filter(slug => slug !== '') || []
	const [isLibraryVisible, setIsLibraryVisible] = useState(breadcrumbs.length > 0)
	return (
		<Layout currentShowcase={currentShowcase} currentComponentIndex={currentComponentIndex} breadcrumbs={breadcrumbs}
						isLibraryVisible={isLibraryVisible} setIsLibraryVisible={setIsLibraryVisible}>
			<Component currentComponent={currentComponent} isLibraryVisible={isLibraryVisible} {...pageProps} />
		</Layout>
	)
}
