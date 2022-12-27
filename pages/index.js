import { Button, Grid, Text } from '@geist-ui/core'
import dynamicURLFetch from '../lib/dynamicURLFetch'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import styles from './index.module.scss'

async function getShowcase (req) {
	const res = await dynamicURLFetch({
		req,
		path: `/api/showcase`
	})
	return res.json()
}

export const getServerSideProps = async ({ req }) => {
	const { showcase } = await getShowcase(req)
	return {
		props: {
			showcase
		}
	}
}

const getDynamicComponent = (name) => dynamic(() => import(`../showcase/${name}`), {
	ssr: false,
})

export default function Home ({ showcase = [], isLibraryVisible }) {
	const [currentComponentIndex, setCurrentComponentIndex] = useState(0)
	const DynamicComponent = useMemo(() => {
		return getDynamicComponent(showcase[currentComponentIndex])
	}, [currentComponentIndex, showcase])

	return (
		<Grid.Container gap={1}>
			{isLibraryVisible && <Grid className={`${isLibraryVisible ? styles.visible : styles.library}`} xs={24} lg={4}>
				<aside>
					<div content={styles.content}>
						<Grid.Container gap={1}>
							{showcase.map((component, index) => {
								return (
									<Grid xs={24} key={`button-${index}`}>
										<Button
											className={styles.button}
											type={currentComponentIndex === index ? 'secondary-light': 'abort'}
											scale={1 / 2}
											onClick={() => setCurrentComponentIndex(index)}>
											{component.split('.js')[0]}
										</Button>
									</Grid>)
							})}
						</Grid.Container>
					</div>
				</aside>
			</Grid>}
			<Grid xs={24} lg={isLibraryVisible ? 20 : 24}>
				<Grid.Container gap={1}>
					<Grid xs={24}>
				<Text h2>{showcase[currentComponentIndex].split('.js')[0]}</Text>
					</Grid>
						<Grid xs={24}>
				<DynamicComponent/>
						</Grid>
				</Grid.Container>
			</Grid>
		</Grid.Container>
	)
}