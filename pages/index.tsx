import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { PuzzleGame } from '../components/PuzzleGame';
import { Box, Container, Text } from '@mantine/core';
import { Experience } from '@/components/Experience';
import { AwardsOther } from '@/components/AwardsOther';

const Home = () => {
	return (
		<div>
			<Hero />
			<Experience />
			<Skills />
			<Projects />
			<AwardsOther />
			<Contact />
			<PuzzleGame />

			<Box
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === 'dark' ? undefined : theme.colors.gray[0],
				})}
			>
				<Container pt={40} pb={140}>
					<Text align='center'>
						This website, like everything I program is dedicated to Hank. Without you, I
						wouldn't be where I am today. Thank you.
					</Text>
				</Container>
			</Box>
		</div>
	);
};

export default Home;
