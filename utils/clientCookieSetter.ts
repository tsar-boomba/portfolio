interface CookieOptions {
	/** Time in secs till expiration */
	maxAge?: number;
	/** Paths this cookie will be sent to, defaults to "/" (All paths) */
	path?: string;
}

export const clientCookieSetter = (key: string, value: string, opts?: CookieOptions) => {
	if (typeof window === 'undefined') return;

	const expires = opts?.maxAge ? `; expires=${new Date(Date.now() + opts.maxAge * 1000).toUTCString()}` : '';
	const path = opts?.path ? `; path=${opts.path}` : '; path=/';

	document.cookie = `${key}=${value}${expires}${path}`;
};
