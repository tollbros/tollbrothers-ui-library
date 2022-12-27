import '@tollbrothers/tollbrothers-ui/dist/index.modern.css'
import 'blaze-slider/dist/blaze.css'
import Layout from '../app/Layout'
import { useState } from 'react'

export default function App ({ Component, pageProps, router }) {
	const [isLibraryVisible, setIsLibraryVisible] = useState(false)
	const breadcrumbs = router.pathname.split('/').filter(slug => slug !== '')
	return (
		<Layout breadcrumbs={breadcrumbs} isLibraryVisible={isLibraryVisible} setIsLibraryVisible={setIsLibraryVisible}>
			<Component isLibraryVisible={isLibraryVisible} {...pageProps} />
		</Layout>
	)
}
