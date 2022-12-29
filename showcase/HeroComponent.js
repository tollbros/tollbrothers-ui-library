import { useState } from 'react'
import { Grid, Text, Slider } from '@geist-ui/core'
import { HeroComponent } from '@tollbrothers/tollbrothers-ui'

export default function HeroComponentTest () {
	const [opacity, setOpacity] = useState(false)
	const handler = (val) => setOpacity(val)
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
		<Grid.Container gap={1}>
			<Grid xs={24}>
				<Text h4>Overlay Opacity</Text>
			</Grid>
			<Grid xs={24}>
				<Slider onChange={handler} step={0.1} max={1} min={0} value={opacity} showMarkers type="default" />
			</Grid>
			<Grid xs={24}>
				<HeroComponent slides={slides} overlayOpacity={opacity}/>
			</Grid>
		</Grid.Container>
	)
}
