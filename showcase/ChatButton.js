import { ChatButton } from '@tollbrothers/tollbrothers-ui'
import { Grid, useInput, Input, Text, Button, Spacer, Badge, useToasts } from '@geist-ui/core'
import { useMemo } from 'react'

export default function ChatButtonTest () {
	const DEFAULT_JDE = '3895'
	const DEFAULT_ID = '5733q000000Na1q'
	const { state: id, setState: setID, reset: resetID, bindings: bindingsID } = useInput(DEFAULT_ID)
	const {
		state: jde,
		setState: setJDE,
		reset: resetJde,
		bindings: bindingsJde
	} = useInput(DEFAULT_JDE)
	const isChatReady = useMemo(() => {
		return !!jde.length && !!id.length
	}, [id, jde])
	const { setToast } = useToasts()

	const handleOffline = () => {
		setToast({ text: 'Chat is offline.', delay: 2000 })
	}
	const handleEvent = (eventType) => {
		console.log('handleEvent', eventType)
	}
	const handleReset = () => {
		resetID()
		resetJde()
	}
	const handleClear = () => {
		setID('')
		setJDE('')
	}

	return (
		<Grid.Container gap={1}>
			<Grid xs={12}>
				<Grid.Container gap={2}>
					<Grid xs={24}>
						<Grid.Container>
							<Grid xs={24}>
								<Text h4>ID</Text>
							</Grid>
							<Grid xs={24}>
								<Input {...bindingsID} width="100%" placeholder="Set id"/>
							</Grid>
						</Grid.Container>
					</Grid>
					<Grid xs={24}>
						<Grid.Container>
							<Grid xs={24}>
								<Text h4>JDE</Text>
							</Grid>
							<Grid xs={24}>
								<Input {...bindingsJde} width="100%" placeholder="Set jde"/>
							</Grid>
						</Grid.Container>
					</Grid>
					<Grid xs={24}>
						<Spacer h={1}/>
					</Grid>
					<Grid xs={24}>
						<Badge type={isChatReady ? 'success' : 'error'}>
							Chat is {isChatReady ? '' : 'not'} ready
						</Badge>
					</Grid>
					<Grid xs={24}>
						<Button onClick={handleClear} type="secondary-light">
							Clear
						</Button>
					</Grid>
					<Grid xs={24}>
						<Button onClick={handleReset} type="secondary-light">
							Reset
						</Button>
					</Grid>
				</Grid.Container>
			</Grid>
			<Grid xs={12}>
				{isChatReady &&
					<ChatButton id={id} jde={jde} handleOffline={handleOffline} handleEvent={handleEvent}/>}
			</Grid>
		</Grid.Container>
	)
}
