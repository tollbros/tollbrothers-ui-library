import { Breadcrumbs, Button, GeistProvider, CssBaseline, Grid, Page, Spacer } from '@geist-ui/core'
import Sun from '@geist-ui/icons/sun'
import Moon from '@geist-ui/icons/moon'
import useLocalStorage from '../hooks/useLocalStorage'
import styles from './Layout.module.scss'
import { useEffect, useState } from 'react'
import Github from '@geist-ui/icons/github'

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
			<Page dotBackdrop className={`${styles.layout} ${isLoading ? '' : styles.visible} margin`}>
				<Page.Header>
					<Grid.Container justify="space-between">
						<Grid xs={24}><Spacer/></Grid>
						<Grid>
							<Breadcrumbs>
								<Breadcrumbs.Item href="/">Tollbrothers UI Library</Breadcrumbs.Item>
								{breadcrumbs && breadcrumbs.map((breadcrumb, index) => <Breadcrumbs.Item
									key={`breadcrumb-${index}`}>{breadcrumb}</Breadcrumbs.Item>)}
							</Breadcrumbs>
						</Grid>
						<Grid>
							<Grid.Container gap={1}>
								<Grid>
									<Button onClick={() => window.open('https://github.com/tollbros/tollbrothers-ui', '_ blank')}
													scale={2 / 3} width="auto"
													icon={<Github/>}/>
								</Grid>
								<Grid>
									<Button scale={2 / 3} onClick={switchThemes} width="auto"
													icon={themeType === 'dark' ? <Sun/> : <Moon/>}/>
								</Grid>
							</Grid.Container>
						</Grid>
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