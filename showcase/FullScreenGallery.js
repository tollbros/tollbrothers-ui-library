import { useState } from 'react'
import { Button, Grid, Radio, Text } from '@geist-ui/core'
import { FullScreenGallery } from '@tollbrothers/tollbrothers-ui'
import useLocalStorage from '../hooks/useLocalStorage'

export default function FullScreenGalleryTest () {
	const [isOpen, setIsOpen] = useState(false)
	const mediaList = [
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-2-HI-RES--15_1920.jpg'
		},
		{
			'description': 'Luxurious Bathroom',
			'link': null,
			'title': 'Main Bath',
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-2-HI-RES--8_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--16_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--18_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--22_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--23_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--26_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/House-4-HI-RES--3_1920.jpg'
		},
		{
			'description': null,
			'link': null,
			'title': null,
			'type': 'image',
			'url': 'https://cdn.tollbrothers.com/communities/14341/images-resized/iStock-641316176_1920.jpg'
		}
	]
	const [initialSlide, setInitialSlide] = useLocalStorage('FullScreenGallery-initialSlide', 0)

	return (
		<Grid.Container direction="column" gap={1}>
			<Grid>
				<Text h1>FullScreenGallery</Text>
				<Button scale={2/3} width="auto" onClick={() => setIsOpen(true)}>Show</Button>
				<Text h2>Initial slide</Text>
				<Radio.Group initialValue={initialSlide} onChange={(value) => setInitialSlide(value)} placeholder="Initial index">
					{mediaList.map((item, index) => {
						return <Radio key={`option-${index}`} value={index}>Slide {1 + index}</Radio>
					})}
				</Radio.Group>
			</Grid>
			<Grid>
				<FullScreenGallery initialSlide={initialSlide} onClose={() => setIsOpen(false)} show={isOpen}
													 mediaList={mediaList}/>
			</Grid>
		</Grid.Container>
	)
}
