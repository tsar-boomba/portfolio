'use client';

import { Button, Card, Center, Loader, Stack, Text, Textarea } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { TbCopy } from 'react-icons/tb';

const MarkdownRenderer = () => {
	const [mdPresent, setMdPresent] = useState(true);
	const [html, setHtml] = useState<TrustedHTML | null>(null);
	const [inputMd, setInputMd] = useState('');
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const query = new URL(location.href).searchParams;
		const hasMd = query.has('md');
		setMdPresent(hasMd);

		if (hasMd) {
			const md = decodeURIComponent(query.get('md')!);
			setTimeout(async () => {
				const domPurifyPromise = import('dompurify');
				const markedPromise = import('marked');

				try {
					// Lazy load these libraries since they are not needed on the main site
					const [domPurifyModule, markedModule] = await Promise.all([
						domPurifyPromise,
						markedPromise,
					]);

					const rawHtml = await markedModule.marked(md);
					const sanitized = domPurifyModule.default.sanitize(rawHtml, {
						RETURN_TRUSTED_TYPE: true,
					});

					setHtml(sanitized);
				} catch (e) {
					console.error(e);
					setError(e?.toString() || 'Unknown error! Check console.');
				}
			}, 0);
		}
	}, []);

	if (mdPresent && html === null) {
		return (
			<Center pt={128} mx='xl' mb={64}>
				<Stack w='100%' align='center'>
					<Loader size='xl' />
					<Text size='xl' ta='center'>
						Parsing MarkDown...
					</Text>
				</Stack>
			</Center>
		);
	}

	if (error) {
		<Center mb={64}>
			<Text c='red' fw={700}>
				{error}
			</Text>
		</Center>;
	}

	if (mdPresent && html !== null) {
		return (
			<Stack w='100%' align='center' mb={64}>
				<Card withBorder shadow='sm' mt={128} mx='md' px='md'>
					<div dangerouslySetInnerHTML={{ __html: html }}></div>
				</Card>
				<Button pos='sticky' bottom='1rem' component='a' href='/md-render'>
					Generate Link
				</Button>
			</Stack>
		);
	}

	// Input markdown and produce a link that can decode it.
	return (
		<Center pt={72} mx='xl' mb={64}>
			<Stack w='100%' align='center'>
				<Textarea
					label='Input MD'
					autosize
					value={inputMd}
					onChange={(e) => setInputMd(e.target.value)}
					maw={700}
					w='100%'
				/>
				<Button
					pos='sticky'
					bottom='1rem'
					leftSection={<TbCopy size={16} />}
					onClick={() => {
						const encoded = encodeURIComponent(inputMd);
						navigator.clipboard.writeText(
							process.env.NODE_ENV === 'development'
								? `http://localhost:3000/md-render?md=${encoded}`
								: `https://igamble.dev/md-render?md=${encoded}`,
						);

						modals.openConfirmModal({
							title: 'Copied! 😁',
							children: <Text>Copied link to your clipboard!</Text>,
							confirmProps: {
								children: 'Ok',
							},
							cancelProps: {
								style: {
									display: 'none',
								},
							},
							closeOnConfirm: true,
							closeOnCancel: true,
							withCloseButton: true,
						});
					}}
				>
					Copy Link To Clipboard
				</Button>
			</Stack>
		</Center>
	);
};

export default MarkdownRenderer;
