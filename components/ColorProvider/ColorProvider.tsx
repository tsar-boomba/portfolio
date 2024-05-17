import { DefaultMantineColor } from '@mantine/core';
import React, { createContext, ReactNode, useContext } from 'react';

const ColorContext = createContext<{
	primaryColor: DefaultMantineColor;
	setPrimaryColor: (color: DefaultMantineColor) => void;
}>({
	primaryColor: 'violet',
	setPrimaryColor: () => {},
});

const ColorProvider: React.FC<{
	children: ReactNode;
	primaryColor: DefaultMantineColor;
	setPrimaryColor: (color: DefaultMantineColor) => void;
}> = ({ children, primaryColor, setPrimaryColor }) => {
	return (
		<ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
			{children}
		</ColorContext.Provider>
	);
};

export const usePrimaryColor = () => useContext(ColorContext);

export default ColorProvider;
