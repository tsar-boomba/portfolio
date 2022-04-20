import { NextMiddleware, NextResponse } from 'next/server';

export const middleware: NextMiddleware = (req, ev) => {
	return NextResponse.next();
};
