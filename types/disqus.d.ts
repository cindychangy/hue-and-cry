declare global {
	interface Window {
		DISQUSWIDGETS?: {
			getCount: (options: { reset: boolean }) => void;
		};
	}
}

export {};
