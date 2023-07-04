import * as htmlToImage from "html-to-image";

export const handleDownloadClick = () => {
	const tierlistDomElement = document.querySelector(".TierList") as HTMLElement;
	if (!tierlistDomElement) {
		console.log("tierlistDomElement is null");
		return;
	}

	// Exclude elements inside the container with the class "pictureIgnore"
	const elementsToIgnore = tierlistDomElement.querySelectorAll(".pictureIgnore *");
	elementsToIgnore.forEach((element) => {
		(element as HTMLElement).style.display = "none"; // Cast to HTMLElement
	});

	htmlToImage
		.toJpeg(tierlistDomElement, { quality: 1 })
		.then(function (dataUrl) {
			var link = document.createElement("a");
			link.download = "mytierlist.jpeg";
			link.href = dataUrl;
			link.click();

			// Restore the display of ignored elements after capturing the image
			elementsToIgnore.forEach((element) => {
				(element as HTMLElement).style.display = ""; // Cast to HTMLElement
			});
		})
		.catch(function (error) {
			console.log("Error occurred while capturing the image:", error);
		});
};
