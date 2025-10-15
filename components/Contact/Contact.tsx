import { Container, Text, Group, useMantineTheme } from '@mantine/core';
import { SiDiscord, SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { ContactButton } from './ContactButton';
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
					<ContactButton
						icon={<SiGithub size={24} />}
						href='https://github.com/tsar-boomba'
					>
						<Text component='h1' fw={700} ta='center'>
							GitHub
						</Text>
					</ContactButton>
					<ContactButton
						icon={<SiLinkedin size={24} />}
						href={'https://linkedin.com/in/igamble'}
					>
						<Text component='h1' fw={700} ta='center'>
							Linkedin
						</Text>
					</ContactButton>
					<ContactButton icon={<SiGmail size={24} />} href='mailto:itg.2048@gmail.com'>
						<Text component='h1' fw={700} ta='center'>
							E-Mail
						</Text>
					</ContactButton>
					<ContactButton icon={<SiDiscord size={24} />} text='iboomb'>
						<Text component='h1' fw={700} ta='center'>
							Discord
						</Text>
					</ContactButton>
					<ContactButton
						icon={<TbFile size={24} />}
						href={'https://tsar-boomba.github.io/resume/resume.pdf'}
					>
						<Text component='h1' fw={700} ta='center'>
							Resume
						</Text>
					</ContactButton>
				</Group>
			</Container>
		</div>
	);
};

export default Contact;
