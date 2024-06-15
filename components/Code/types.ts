export type Language = {
	name: string;
	code: number;
	blanks: number;
	comments: number;
};

export type RepoStats = {
	name: string;
	href: string;
	description: string | null;
	/** Sorted from most to least used */
	languages: Language[];
};
