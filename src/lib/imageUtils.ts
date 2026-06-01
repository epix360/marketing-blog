import type { ImageMetadata } from 'astro';
import heroHomeImage from '../assets/images/hero-home.jpg';
import heroAboutImage from '../assets/images/hero-about.jpg';
import batGeorgiaImage from '../assets/images/Bat-Georgia.jpg';
import angelc3poImage from '../assets/images/angelc3po.jpg';

const bundledImages: Record<string, ImageMetadata> = {
	'hero-home.jpg': heroHomeImage,
	'hero-about.jpg': heroAboutImage,
	'Bat-Georgia.jpg': batGeorgiaImage,
	'angelc3po.jpg': angelc3poImage,
};

export type ImageInfo =
	| { isPublic: true; src: string }
	| { isPublic: false; src: ImageMetadata | null };

export function getImageInfo(imagePath: string | undefined): ImageInfo {
	if (!imagePath) return { isPublic: false, src: null };

	const filename = imagePath.replace(/^.*\//, '');
	const bundled = bundledImages[filename] ?? null;
	if (bundled) return { isPublic: false, src: bundled };

	if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(imagePath)) {
		const base = import.meta.env.BASE_URL.replace(/\/$/, '');
		const normalized = imagePath.startsWith('/') ? imagePath : '/' + imagePath;
		return { isPublic: true, src: base + normalized };
	}

	return { isPublic: false, src: null };
}

export function getBundledImage(imagePath: string, fallback: ImageMetadata = heroHomeImage): ImageMetadata {
	const filename = imagePath.replace(/^.*\//, '');
	return bundledImages[filename] ?? fallback;
}
