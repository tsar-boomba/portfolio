import { ReactNode } from 'react';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header
				links={[
					{ link: '#hero', label: 'Top' },
					{ link: '#skills', label: 'Skills' },
					{ link: '#projects', label: 'Projects' },
					{ link: '#contact', label: 'Contact' },
				]}
			/>
			{children}
		</div>
	);
};

export default Layout;
