export type Artist = {
	name: string;
	url: string | null;
};

export type Track = {
	name: string;
	artists: Artist[];
	imageUrl: string | null;
	url: string | null;
	duration: number;
};

export type Device = {
	id: string | null;
	is_active: boolean;
	is_private_session: boolean;
	is_restricted: boolean;
	name: string;
	type:
		| 'Computer'
		| 'Tablet'
		| 'Smartphone'
		| 'Speaker'
		| 'Tv'
		| 'Avr'
		| 'Stb'
		| 'AudioDongle'
		| 'GameConsole'
		| 'CastVideo'
		| 'CastAudio'
		| 'Automobile'
		| 'Unknown';
	volume_percent: number | null;
};

export type Context = {
	uri: string;
	href: string;
	external_urls: { spotify?: string };
	type:
		| 'artist'
		| 'album'
		| 'track'
		| 'playlist'
		| 'user'
		| 'show'
		| 'episode'
		| 'collection'
		| 'collectionyourepisodes';
};

export type Playing = {
	device: Device;
	context: Context | null;
	repeat: 'off' | 'track' | 'context';
	shuffled: boolean;
	playing: Track;
	progressSecs: number;
};

export type Data = {
	shortTermTop: Track[];
	midTermTop: Track[];
	longTermTop: Track[];
};

export type RecentlyPlayed = {
	track: Track;
	context: Context | null;
	playedAt: string;
};
