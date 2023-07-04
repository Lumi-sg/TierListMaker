export const importAll = async (files: Record<string, () => Promise<{ default: string }>>) => {
	const images: Record<string, string> = {};
	for (const path in files) {
		const { default: image } = await files[path]();
		const matches = path.match(/\/([^/]+)\.\w+$/);
		if (matches) {
			const filename = matches[1];
			images[filename] = image;
		}
	}
	return images;
};
