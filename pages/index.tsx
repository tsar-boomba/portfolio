import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { PuzzleGame } from '../components/PuzzleGame';

const Home = () => {
	return (
		<div>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<PuzzleGame />
		</div>
	);
};

export default Home;
