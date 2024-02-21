import useSWR from 'swr';
import { FUNCTION_URL } from '.';
import { RecentlyPlayed } from './types';
import { Loader, Stack, Text } from '@mantine/core';
import { Track } from './Track';
import { spotify } from '@/utils/brandColors';
import { fetcher } from '@/utils/fetcher';

export const Recent = () => {
	const { data } = useSWR<RecentlyPlayed[]>(FUNCTION_URL + '/recent', fetcher);

	if (!data) {
		return (
			<Stack align='center' justify='center'>
				<Loader size='xl' color={spotify} />
				<Text align='center'>Loading my recently played.</Text>
			</Stack>
		);
	}

	return (
		<Stack>
			{data.map(({ track, playedAt }) => (
				<Track key={track.name + playedAt} track={track} />
			))}
		</Stack>
	);
};
