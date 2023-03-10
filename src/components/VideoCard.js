import React from "react";

const VideoCard = ({ data }) => {
	const { snippet, statistics } = data;
	const { thumbnails, title, channelTitle } = snippet;
	return (
		<div className="w-[300px] w max-w-fit h-auto cursor-pointer mb-4">
			<div>
				<img
					className="rounded-3xl w-full"
					src={thumbnails?.medium?.url}
					alt="thumbnail"
				/>
			</div>
			<h2 className="font-bold text-sm">{title}</h2>
			<h3 className="text-sm">{channelTitle}</h3>
			<h4 className="text-sm">{statistics?.viewCount} views</h4>
		</div>
	);
};

export default VideoCard;
