import { Breadcrumbs, Button, GeistProvider, CssBaseline, Grid, Page } from '@geist-ui/core'
import Sun from '@geist-ui/icons/sun'
import Moon from '@geist-ui/icons/moon'
import useLocalStorage from '../hooks/useLocalStorage'
import styles from './Layout.module.scss'
import { useEffect, useState } from 'react'

const Layout = ({ children, breadcrumbs = null }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [themeType, setThemeType] = useLocalStorage('themeType', 'light')
	const switchThemes = () => {
		setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
	}
	useEffect(() => {
		setTimeout(() => setIsLoading(false), 300)
	}, [])

	return (
		<GeistProvider themeType={themeType}>
			<CssBaseline/>
			<Page dotBackdrop className={`${styles.layout} ${isLoading ? '' : styles.visible}`}>
				<Page.Header>
					<Grid.Container justify="space-between">
						<Breadcrumbs>
							<Breadcrumbs.Item href="/">Tollbrothers UI Library</Breadcrumbs.Item>
							{breadcrumbs && breadcrumbs.map((breadcrumb, index) => <Breadcrumbs.Item
								key={`breadcrumb-${index}`}>{breadcrumb}</Breadcrumbs.Item>)}
						</Breadcrumbs>
						<Button ghost scale={2 / 3} onClick={switchThemes} width="auto"
										icon={themeType === 'dark' ? <Sun/> : <Moon/>}/>
					</Grid.Container>
				</Page.Header>
				<Page.Content>
					{children}
				</Page.Content>
			</Page>
		</GeistProvider>
	)
}

export default Layout