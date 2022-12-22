import { GeistProvider, CssBaseline } from '@geist-ui/core'
import '@tollbrothers/tollbrothers-ui/dist/index.modern.css'
import 'blaze-slider/dist/blaze.css'
import Layout from './Layout'

export default function App({ Component, pageProps, router }) {
  const breadcrumbs = router.pathname.split('/').filter(slug => slug !== '')
  return (
    <GeistProvider>
      <CssBaseline />
      <Layout breadcrumbs={breadcrumbs}>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  )
}
