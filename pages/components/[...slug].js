import { Grid, Text } from '@geist-ui/core'
import getServerSideShowcase from '../../lib/getServerSideShowcase'
import dynamic from 'next/dynamic'

const getDynamicComponent = (name) => dynamic(() => import(`../../showcase/${name}`), {
	ssr: false,
})

export const getServerSideProps = getServerSideShowcase

export default function ComponentPage ({ isLibraryVisible, currentComponent }) {
	const DynamicComponent = getDynamicComponent(currentComponent)

	return (
		<Grid.Container gap={1}>
			<Grid xs={24} lg={isLibraryVisible ? 20 : 24}>
				<Grid.Container gap={1}>
					<Grid xs={24}>
						<Text h2>{currentComponent?.split('.js')[0]}</Text>
					</Grid>
					<Grid xs={24}>
						<DynamicComponent/>
					</Grid>
				</Grid.Container>
			</Grid>
		</Grid.Container>
	)
}