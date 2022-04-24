import { ReactNode } from 'react';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header links={[{ link: '/#hero', label: 'Top' }]} />
			{children}
		</div>
	);
};

export default Layout;
