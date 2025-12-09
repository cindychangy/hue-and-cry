declare global {
	interface Window {
		DISQUS: any;
		DISQUSWIDGETS: {
			getCount: (config?: { reset?: boolean }) => void;
		};
	}
}

export {};
