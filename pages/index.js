import { Text, Grid } from '@geist-ui/core'
import Link from 'next/link'

const Home = () => (
	<Grid.Container>
		<Grid xs={24}>
		<Text h1>Components</Text>
		</Grid>
		<Grid xs={24}>
		<Link href='/FullScreenGallery?component=FullScreenGallery'>
			FullScreenGallery
		</Link>
		</Grid>
		<Grid xs={24}>
		<Link href='/HeroComponent?component=HeroComponent'>
			HeroComponent
		</Link>
		</Grid>
	</Grid.Container>
)

export default Home