import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { initializeFirebase } from "../firebase"; // ✅ correct import path

export const useRealtimeData = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    try {
      // ✅ Initialize Firebase app
      const { app } = initializeFirebase();
      const db = getDatabase(app);

      // ✅ Your correct path from Firebase
      const dataRef = ref(db, "floatixData/floatix");

      console.log("🔗 Connecting to Firebase Realtime DB...");

      // ✅ Listen for live updates
      const unsubscribe = onValue(
        dataRef,
        (snapshot) => {
          if (!isMounted) return;
          const val = snapshot.val();

          if (val) {
            console.log("🔥 Live Firebase data:", val);
            setData(val);
          } else {
            console.warn("⚠ No data found at floatixData/floatix");
          }

          setLoading(false);
        },
        (err) => {
          console.error("❌ Firebase onValue error:", err);
          if (isMounted) {
            setError(err.message);
            setLoading(false);
          }
        }
      );

      // ✅ Cleanup listener on unmount
      return () => {
        isMounted = false;
        off(dataRef); // stop listening to avoid memory leaks
        unsubscribe();
      };
    } catch (err: any) {
      console.error("Realtime data error:", err);
      if (isMounted) {
        setError(err.message);
        setLoading(false);
      }
    }
  }, []);

  return { data, loading, error };
};// Trigger redeploy - no code changes
