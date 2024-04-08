import { Anchor, Card, Group, Image, Stack, Title } from '@mantine/core';
import { Track as TrackType } from './types';
import { spotify } from '@/utils/brandColors';

export const Track = ({ track, imgSize }: { track: TrackType; imgSize?: number }) => {
	imgSize ??= 64;
	return (
		<Card withBorder shadow='md' p='xs'>
			<Group wrap='nowrap'>
				<Anchor href={track.url ?? undefined} target='_blank'>
					<Image
						w={imgSize}
						src={track.imageUrl ?? undefined}
						alt={`${track.name} album cover`}
					/>
				</Anchor>
				<Stack align='start' gap={0} style={{ flexGrow: 1 }}>
					<Anchor href={track.url ?? undefined} target='_blank'>
						<Title
							order={4}
							style={{
								textOverflow: 'ellipsis',
								overflow: 'hidden',
								whiteSpace: 'nowrap',
							}}
						>
							{track.name}
						</Title>
					</Anchor>
					<span>
						{track.artists.map((artist, i) => (
							<span key={artist.name + i}>
								<Anchor
									href={artist.url ?? undefined}
									target='_blank'
									style={{
										color: spotify,
									}}
								>
									{artist.name}
								</Anchor>
								{i === track.artists.length - 1 ? <></> : <>, </>}
							</span>
						))}
					</span>
				</Stack>
			</Group>
		</Card>
	);
};
