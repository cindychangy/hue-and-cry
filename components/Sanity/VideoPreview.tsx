import type { PreviewProps } from 'sanity';

export const VideoPreview = (props: PreviewProps) => {
	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={`${props.title}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
};
