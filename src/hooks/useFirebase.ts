import { query, SnapshotListenOptions, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { constants } from "@/constants";
import { getFirebaseCollection } from "@/utils/firebase";

export const useToDoCollection = (
  email: string,
  options?: {
    snapshotListenOptions?: SnapshotListenOptions;
  }
) => {
  const collectionQuery = query(
    getFirebaseCollection(constants.TODOS),
    where("email", "==", email)
  );

  return useCollectionData(collectionQuery, options);
};
