import { Container, Text, Group, useMantineTheme, Card, Title, Box } from '@mantine/core';
import { evenWrapper, inner, title } from '../Section.css';

export const AwardsOther = () => {
	const theme = useMantineTheme();

	return (
		<div id='contact' className={evenWrapper}>
			<Container size={900} className={inner}>
				<Text
					component='h1'
					variant='gradient'
					className={title}
					gradient={{
						from: theme.colors[theme.primaryColor][7],
						to: theme.colors[theme.primaryColor][4],
						deg: 75,
					}}
					ta='center'
				>
					Awards & Other
				</Text>
				<Group mt={24} align='center' justify='center'>
					<Card miw={240} withBorder shadow='md'>
						<Title order={2}>Provost Scholar</Title>
						<Box component='ul' maw={300} m={0}>
							<li>
								A highly prestigious merit scholarship awarded to{' '}
								<strong>60</strong> out-of-state students, from a pool of thousands.
							</li>
						</Box>
					</Card>
					<Card miw={240} withBorder shadow='md'>
						<Title order={2}>Hacklytics 2024</Title>
						<Box component='ul' maw={300} m={0}>
							<li>
								Placed <strong>2nd</strong> in the sports track and{' '}
								<strong>3rd</strong> in the healthcare track
							</li>
							<li>Against over 190 other submissions.</li>
						</Box>
					</Card>
				</Group>
			</Container>
		</div>
	);
};
