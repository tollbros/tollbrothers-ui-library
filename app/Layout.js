import { Breadcrumbs, Button, GeistProvider, CssBaseline, Grid, Page, Spacer } from '@geist-ui/core'
import Sun from '@geist-ui/icons/sun'
import Moon from '@geist-ui/icons/moon'
import useLocalStorage from '../hooks/useLocalStorage'
import styles from './Layout.module.scss'
import { useEffect, useState } from 'react'
import Github from '@geist-ui/icons/github'
import Menu from '@geist-ui/icons/menu'
import { useRouter } from 'next/router'

const Layout = ({
	currentComponentIndex = 0,
	currentShowcase = [],
	children,
	breadcrumbs = null,
	isLibraryVisible,
	setIsLibraryVisible
}) => {
	const router = useRouter()
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
						<Grid xs={24}><Spacer/></Grid>
						<Grid>
							<Breadcrumbs>
								<Breadcrumbs.Item href="/">Toll Brothers</Breadcrumbs.Item>
								{breadcrumbs.length > 0 && breadcrumbs.map((breadcrumb, index) => <Breadcrumbs.Item
									key={`breadcrumb-${index}`}>{breadcrumb}</Breadcrumbs.Item>)}
							</Breadcrumbs>
							<Spacer/>
						</Grid>
						<Grid xs={24}>
							<Grid.Container gap={1} justify={breadcrumbs.length > 0 ? "space-between" : "flex-end"}>
								{breadcrumbs.length > 0 && (
									<Grid>
										<Button type={isLibraryVisible ? 'secondary-light' : 'default'}
																													onClick={() => setIsLibraryVisible((prevLibNav) => !prevLibNav)}
																													scale={2 / 3} width="auto"
																													icon={<Menu/>}/>
									</Grid>
								)}
								<Grid>
									<Grid.Container gap={1}>
										<Grid><Button onClick={() => window.open('https://github.com/tollbros/tollbrothers-ui', '_ blank')}
																	scale={2 / 3} width="auto"
																	icon={<Github/>}/></Grid>
										<Grid>
											<Button scale={2 / 3} onClick={switchThemes} width="auto"
															icon={themeType === 'dark' ? <Sun/> : <Moon/>}/>
										</Grid>
									</Grid.Container>
								</Grid>
							</Grid.Container>
						</Grid>
					</Grid.Container>
				</Page.Header>
				<Page.Content>
					<Grid.Container>
						{isLibraryVisible &&
							<Grid className={`${isLibraryVisible ? styles.visible : styles.library}`} xs={24} lg={4}>
								<aside>
									<div content={styles.content}>
										<Grid.Container gap={1}>
											{currentShowcase.map((item, index) => {
												const itemComponent = item.toLowerCase()
												return (
													<Grid xs={24} key={`button-${index}`}>
														<Button
															className={styles.button}
															type={currentComponentIndex === index ? 'secondary-light' : 'abort'}
															scale={2 / 3}
															onClick={() => router.push(`/components/${itemComponent}`)}>
															{item.split('.js')[0]}
														</Button>
													</Grid>)
											})}
										</Grid.Container>
									</div>
								</aside>
							</Grid>}
						<Grid xs={24} lg={isLibraryVisible ? 20 : 24}>
							{children}
						</Grid>
					</Grid.Container>
				</Page.Content>
			</Page>
		</GeistProvider>
	)
}

export default Layout