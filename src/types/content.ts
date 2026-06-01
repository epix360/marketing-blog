export interface ContentData {
	title?: string;
	heroImage?: string;
	body?: string;
}

export interface ImageData {
	src: import('astro').ImageMetadata | string | null;
	alt?: string;
	width?: number;
	height?: number;
}
