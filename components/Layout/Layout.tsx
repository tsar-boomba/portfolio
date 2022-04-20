import { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div>
			<ThemeToggle />
		</div>
	);
};

export default Layout;
