import { ReactNode } from 'react';
import Header from './Header';
import { NowPlaying } from './Spotify';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header
				links={[
					{ link: '#skills', label: 'Skills' },
					{ link: '#projects', label: 'Projects' },
					{ link: '#contact', label: 'Contact' },
					{ link: 'https://blog.igamble.dev', label: 'Blog' },
				]}
			/>
			{children}
			<NowPlaying />
		</div>
	);
};

export default Layout;
