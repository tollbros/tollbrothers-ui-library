import { Card, Grid, Text } from '@geist-ui/core'
import Package from '@geist-ui/icons/package'
import styles from './index.module.scss'
import { useRouter } from 'next/router'

export default function Home () {
	const router = useRouter()

	return (
		<Grid.Container height="100vh" justify="center" gap={1}>
			<Grid xs={24}>
				<Grid.Container alignContent="flex-start">
					<Grid xs={24} justify="center"><Text h1>Toll Brothers</Text></Grid>
					<Grid xs={24} justify="center">
						<Text p b>Design system</Text>
					</Grid>
				</Grid.Container>
			</Grid>

			<Grid height='164px' xs={24} lg={4}>
				<Card type="secondary" className={styles.card} onClick={() => router.push('/components/fullscreengallery')}>
					<Grid.Container justify="start" gap={1}>
						<Grid>
							<Package/>
						</Grid>
						<Grid>
							<Text h4>Components</Text>
						</Grid>
						<Grid xs={24}>
							<Text p b>A React component library built on top of NextJs</Text>
						</Grid>
					</Grid.Container>
					<Grid.Container>
						<Grid>

						</Grid>
					</Grid.Container>
				</Card>
			</Grid>
		</Grid.Container>
	)
}