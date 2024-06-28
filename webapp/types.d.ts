export type PostLoginResponse = {
	key: string;
	rank: number;
	pageContext: {
		title: string;
		description: string;
		action: { label: string; url: string }
	};
};