import { Breadcrumbs, Page } from '@geist-ui/core'

const Layout = ({ children, breadcrumbs = null }) => {
	return (
		<Page>
			<Page.Header>
				<Breadcrumbs>
					<Breadcrumbs.Item href='/'>Tollbrothers UI</Breadcrumbs.Item>
					{breadcrumbs && breadcrumbs.map((breadcrumb, index) => <Breadcrumbs.Item key={`breadcrumb-${index}`}>{breadcrumb}</Breadcrumbs.Item>)}
				</Breadcrumbs>
			</Page.Header>
			<Page.Content>
				{children}
			</Page.Content>
		</Page>
	)
}

export default Layout