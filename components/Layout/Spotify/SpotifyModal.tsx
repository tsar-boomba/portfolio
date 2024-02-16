import { fetcher } from '@/utils/fetcher';
import { Loader, ScrollArea, Stack, Tabs } from '@mantine/core';
import useSWRImmutable from 'swr/immutable';
import { Data, Playing } from './types';
import { SiSpotify } from 'react-icons/si';
import { spotify } from '@/utils/brandColors';
import useSWR from 'swr';
import { Track } from './Track';
import { useState } from 'react';
import { FUNCTION_URL } from '.';

export const SpotifyModal = () => {
	const { data: topTracks } = useSWRImmutable<Data>(FUNCTION_URL, fetcher);
	const { data: playing } = useSWR<Playing | null>(FUNCTION_URL + '/playing', fetcher);
	const [term, setTerm] = useState<'shortTerm' | 'midTerm' | 'longTerm'>('shortTerm');

	return (
		<>
			{!topTracks ? (
				<Stack align='center' justify='cetner'>
					<Loader size='md' />
					Loading my Spotify data...
				</Stack>
			) : (
				<Tabs
					value={term}
					onTabChange={(t: typeof term | null) => setTerm(t ?? 'shortTerm')}
				>
					<Tabs.List grow>
						<Tabs.Tab
							value='shortTerm'
							style={{ borderColor: term === 'shortTerm' ? spotify : undefined }}
						>
							Past Month
						</Tabs.Tab>
						<Tabs.Tab
							value='midTerm'
							style={{ borderColor: term === 'midTerm' ? spotify : undefined }}
						>
							6 Months
						</Tabs.Tab>
						<Tabs.Tab
							value='longTerm'
							style={{ borderColor: term === 'longTerm' ? spotify : undefined }}
						>
							All Time
						</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value='shortTerm' pt='xs' style={{ overflowY: 'scroll' }}>
						<Stack>
							{topTracks.shortTermTop.map((track) => (
								<Track key={track.name} track={track} />
							))}
						</Stack>
					</Tabs.Panel>

					<Tabs.Panel value='midTerm' pt='xs'>
						<Stack>
							{topTracks.midTermTop.map((track) => (
								<Track key={track.name} track={track} />
							))}
						</Stack>
					</Tabs.Panel>

					<Tabs.Panel value='longTerm' pt='xs'>
						<Stack>
							{topTracks.longTermTop.map((track) => (
								<Track key={track.name} track={track} />
							))}
						</Stack>
					</Tabs.Panel>
				</Tabs>
			)}
		</>
	);
};
