import '@tollbrothers/tollbrothers-ui/dist/index.modern.css'
import 'blaze-slider/dist/blaze.css'
import Layout from '../app/Layout'

export default function App ({ Component, pageProps, router }) {
	const breadcrumbs = router.pathname.split('/').filter(slug => slug !== '')
	return (
		<Layout breadcrumbs={breadcrumbs}>
			<Component {...pageProps} />
		</Layout>
	)
}
