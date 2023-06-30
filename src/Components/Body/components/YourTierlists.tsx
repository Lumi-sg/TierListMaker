import { useEffect, useState } from "react";
import { useUserStore } from "../../../Stores/userStore";
import { firestoreDB } from "../../../main";
import { collection, getDocs, query, where } from "firebase/firestore";
import { convertFirestoreDataToTierlist } from "../../../Helpers/convertFirestoreDataToTierlist";
import { uniqueId } from "lodash";

const YourTierlists = () => {
	const { currentUserData } = useUserStore();
	const [tierlistData, setTierlistData] = useState<any[]>([]);

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

	useEffect(() => {
		retrieveData();
	}, []);
	//TODO ADD DELETE FUNCTION FOR EACH TIERLIST
	return (
		<div>
			{tierlistData.map((item) => (
				<div key={item.docId}>
					<h2>Name: {item.tierlist.name}</h2>
					<img
						src={item.tierlist.logoImageURL}
						alt="List Logo"
						className="TemplateLogo"
					></img>
					<p>ID: {item.tierlist.uniqueId}</p>
				</div>
			))}
		</div>
	);
};

export default YourTierlists;
