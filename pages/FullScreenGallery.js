import { useState } from 'react'
import { Button, Text } from '@geist-ui/core'
import { FullScreenGallery } from '@tollbrothers/tollbrothers-ui'

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
	return (
		<>
			<Text h1>FullScreenGallery</Text>
			<Button onClick={() => setIsOpen(true)}>Open</Button>
			<FullScreenGallery onClose={() => setIsOpen(false)} show={isOpen} mediaList={mediaList}/>
		</>
	)
}
