import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export default function TestFirebase() {
  const [status, setStatus] = useState("Writing to Firestore...");

  useEffect(() => {
    async function run() {
      try {
        await addDoc(collection(db, "test"), {
          message: "Hello from Vite 8 beta",
          createdAt: serverTimestamp()
        });
        setStatus("✅ Firestore write succeeded. Check Firebase console → Firestore.");
      } catch (e) {
        console.error(e);
        setStatus("❌ Firestore write failed. Check console error + rules.");
      }
    }
    run();
  }, []);

  return <h2>{status}</h2>;
}
