import { ReactNode } from 'react';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header
				links={[
					{ link: '#hero', label: 'Top' },
					{ link: '#skills', label: 'Skills' },
				]}
			/>
			{children}
		</div>
	);
};

export default Layout;
