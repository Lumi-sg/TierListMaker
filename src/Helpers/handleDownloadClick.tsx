import html2canvas from "html2canvas";
export const handleDownloadClick = () => {
	const tierlistDomElement = document.querySelector(".TierList") as HTMLElement;
	if (!tierlistDomElement) {
		console.log("tierlistDomElement is null");
		return;
	}
	html2canvas(tierlistDomElement).then((canvas) => {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png"); // Set the canvas data URL as the link's source
		link.download = "tierlist.png"; // Specify the download filename

		// Programmatically trigger the download
		link.click();
		console.log(canvas);
	});
};
