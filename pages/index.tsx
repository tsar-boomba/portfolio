import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { PuzzleGame } from '../components/PuzzleGame';
import { Container, Text } from '@mantine/core';

const Home = () => {
	return (
		<div>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<PuzzleGame />
			<Container pt={60} pb={140}>
				<Text align='center'>
					This website, like everything I program is dedicated to Hank. Without you, I
					wouldn't be where I am today. Thank you.
				</Text>
			</Container>
		</div>
	);
};

export default Home;
