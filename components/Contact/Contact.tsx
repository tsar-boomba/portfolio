import { Container, Text, Group, useMantineTheme } from '@mantine/core';
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import ContactCard from './ContactCard';
import { TbFile } from 'react-icons/tb';
import { inner, oddWrapper, title } from '../Section.css';

const Contact = () => {
	const theme = useMantineTheme();

	return (
		<div id='contact' className={oddWrapper}>
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
				>
					Contact
				</Text>
				<Group align='start' justify='center' style={{ marginTop: 24 }}>
					<ContactCard
						icon={<SiGithub size={20} />}
						href='https://github.com/tsar-boomba'
					>
						<Text component='h1' fw={700} ta='center'>
							GitHub
						</Text>
					</ContactCard>
					<ContactCard icon={<SiGmail size={20} />} href='mailto:itg.2048@gmail.com'>
						<Text component='h1' fw={700} ta='center'>
							E-Mail
						</Text>
					</ContactCard>
					<ContactCard icon={<SiDiscord size={20} />} text='Ibomb#0221'>
						<Text component='h1' fw={700} ta='center'>
							Discord
						</Text>
					</ContactCard>
					<ContactCard
						icon={<SiLinkedin size={20} />}
						href='https://www.linkedin.com/in/igamble/'
					>
						<Text component='h1' fw={700} ta='center'>
							Linkedin
						</Text>
					</ContactCard>
					<ContactCard
						icon={<TbFile size={20} />}
						href={
							'https://docs.google.com/document/d/1WAgMu51cO2KIKjmv9Z4uf-WnF_XtYkld/export?format=pdf&attachment=false'
						}
					>
						<Text component='h1' fw={700} ta='center'>
							Resume
						</Text>
					</ContactCard>
				</Group>
			</Container>
		</div>
	);
};

export default Contact;
