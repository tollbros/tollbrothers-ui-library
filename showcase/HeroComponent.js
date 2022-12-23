import { useState } from 'react'
import { Grid, Button, Text } from '@geist-ui/core'
import { HeroComponent } from '@tollbrothers/tollbrothers-ui'

export default function HeroComponentTest () {
	const [isDarkness, setIsDarkness] = useState(false)
	const slides = [
		{
			image: 'https://cdn.tollbrothers.com/communities/14365/images-resized/5486-Enchanted-Rose-Street-Las-large-008-005-Kitchen-1500x1000-72dpi_1920.jpg',
			title: 'Nottingham Crossing',
			URL: '/Nottingham-Crossing'
		},
		{
			image: 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-2-HI-RES--8_1920.jpg',
			title: 'Boulder Hills Estates',
			URL: '/Boulder-Hills-Estates'
		},
		{
			image: 'https://cdn.tollbrothers.com/communities/14473/images-resized/318-Zenith-Crest-St-Henderson-large-025-023-Back-Yard-1500_1000-72dpi_1920.jpg',
			title: 'Serenade at Cadence',
			URL: '/Serenade-at-Cadence'
		}
	]
	return (
		<Grid.Container direction="column" gap={1}>
			<Grid>
				<Text h1>HeroComponent</Text>
				<Button scale={2/3} width="auto" onClick={() => setIsDarkness((prevState) => !prevState)}>Turn
					darkness {isDarkness ? 'off' : 'on'}</Button>
			</Grid>
			<Grid>
				<HeroComponent slides={slides} darkness={isDarkness}/>
			</Grid>
		</Grid.Container>
	)
}
