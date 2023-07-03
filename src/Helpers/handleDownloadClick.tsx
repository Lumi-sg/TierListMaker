import * as htmlToImage from "html-to-image";

export const handleDownloadClick = () => {
	const tierlistDomElement = document.querySelector(".TierList") as HTMLElement;
	if (!tierlistDomElement) {
		console.log("tierlistDomElement is null");
		return;
	}

	htmlToImage
		.toJpeg(tierlistDomElement, { quality: 1 })
		.then(function (dataUrl) {
			var link = document.createElement("a");
			link.download = "my-image-name.jpeg";
			link.href = dataUrl;
			link.click();
		})
		.catch(function (error) {
			console.log("Error occurred while capturing the image:", error);
		});
};
