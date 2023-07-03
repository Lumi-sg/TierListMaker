import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Tierlist, tierColors } from "../../../Classes/TierlistClass";
import { convertFirestoreDataToTierlist } from "../../../Helpers/convertFirestoreDataToTierlist";
import { handleDownloadClick } from "../../../Helpers/handleDownloadClick";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useUserStore } from "../../../Stores/userStore";
import { firestoreDB } from "../../../main";
import "../styles/YourTierlists.css";

const YourTierlists = () => {
	const { currentUserData } = useUserStore();
	const [tierlistData, setTierlistData] = useState<any[]>([]);
	const { displayingTierlist, setDisplayingTierlist } = useUiNavigationStore();

	const [tierlistToView, settierlistToView] = useState<Tierlist | null>(null);

	const retrieveData = async () => {
		try {
			const q = query(
				collection(firestoreDB, "tierlistData"),
				where("userID", "==", currentUserData?.uid)
			);
			const querySnapshot = await getDocs(q);
			const data = querySnapshot.docs.map((doc) => {
				const firestoreData = doc.data();
				const tierlist = convertFirestoreDataToTierlist(firestoreData.tierlist);
				return {
					docId: doc.id,
					tierlist,
					userID: firestoreData.userID,
					displayName: firestoreData.displayName,
					email: firestoreData.email,
				};
			});
			setTierlistData(data);
		} catch (error) {
			console.log("Error retrieving tierlist data:", error);
		}
	};

	const handleViewTierlistClick = (uniqueId: string) => {
		console.log("Viewing tierlist: ", uniqueId);
		const viewingTierlist = tierlistData.find((item) => item.tierlist.uniqueId === uniqueId);
		if (viewingTierlist) {
			settierlistToView(viewingTierlist.tierlist);
			setDisplayingTierlist(true);
		} else {
			console.log("No tierlist found");
		}
	};

	const handleDeleteClick = async (uniqueId: string | undefined) => {
		if (!uniqueId) return; // Exit early if uniqueId is undefined

		try {
			setDisplayingTierlist(false);
			const tierlistQuery = query(
				collection(firestoreDB, "tierlistData"),
				where("tierlist.uniqueID", "==", uniqueId)
			);
			const querySnapshot = await getDocs(tierlistQuery);

			querySnapshot.forEach((doc) => {
				deleteDoc(doc.ref);
			});
			console.log("Deleted tierlist: ", uniqueId);
			retrieveData();
		} catch (error) {
			console.error("Error deleting document: ", error);
		}
	};

	useEffect(() => {
		setDisplayingTierlist(false);
		retrieveData();
	}, []);

	useEffect(() => {}, [tierlistData]);

	return !displayingTierlist ? (
		<div className="YourTierlists">
			{tierlistData.length === 0 ? (
				<div className="noTierlists">
					<p className="noTierlistsText">No tierlists available!</p>
					<p className="noTierlistsText"> Click "Create Tierlist" to get started!</p>
				</div>
			) : (
				tierlistData.map((item) => (
					<div
						className="ListCard"
						key={item.docId}
					>
						<div className="topOfListCard">
							<h2 className="yourTierlistName">{item.tierlist.name}</h2>
						</div>
						<img
							src={item.tierlist.logoImageURL}
							alt="List Logo"
							className="yourTierListLogo"
						></img>
						<div className="bottomOfListCard">
							<button
								className="YourTierlistButton"
								onClick={() => handleViewTierlistClick(item.tierlist.uniqueId)}
							>
								View
							</button>
							<button
								className="YourTierlistButtonDelete"
								onClick={() => handleDeleteClick(item.tierlist.uniqueId)}
							>
								Delete
							</button>
						</div>
					</div>
				))
			)}
		</div>
	) : (
		tierlistToView && (
			<div className="TierlistContainer">
				<div className="TopOfTierlistContainer">
					<div className="listLogoContainer">
						<img
							className="listLogo"
							src={tierlistToView.logoImageURL}
							alt="List Logo"
						/>
					</div>
					<div className="TierListTextInfo">
						<h1>{tierlistToView.game}</h1>
						<p>{tierlistToView.description}</p>
					</div>
				</div>
				<div className="tierlistButtonContainer">
					<button
						className="tierListButton"
						onClick={handleDownloadClick}
					>
						Download Tierlist
					</button>
					<button
						className="YourTierlistButtonDelete"
						onClick={() => handleDeleteClick(tierlistToView.uniqueId)}
					>
						Delete
					</button>
				</div>
				<div className="TierList">
					{tierlistToView.tiers.map((tier, index) => (
						<div
							className="rowContainer"
							key={index}
						>
							<div
								className={`tier-name ${tier.tierName}-tier`}
								style={{ backgroundColor: tierColors[index] }}
								key={tier.tierName + index}
							>
								{tier.tierName}
							</div>
							<div
								key={tier.tierName}
								className={`tier-row ${tier.tierName}`}
							>
								<div className="characterImages">
									{tier.characters.map((character) => (
										<img
											className="characterImage noDrag"
											src={character.imageURL}
											alt={character.name}
											key={character.name}
											draggable={false}
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	);
};

export default YourTierlists;
