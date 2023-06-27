import React from "react";
import { TierlistArray } from "../../../Tierlists/TierlistArray";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { Tierlist } from "../../../Classes/TierlistClass";

const Templates = () => {
	const { setSelectedGame, setDisplayTemplates } = useUiNavigationStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		setSelectedGame(tierlist);
		setDisplayTemplates(false);
	};

	return (
		<div className="TemplatesContainer">
			{TierlistArray.map((tierlist) => (
				<button
					onClick={() => handleTemplateChoiceClick(tierlist)}
					key={tierlist.name}
				>
					{tierlist.name}
				</button>
			))}
		</div>
	);
};

export default Templates;
