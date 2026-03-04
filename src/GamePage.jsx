import { useEffect, useRef } from "react";
import { createGame } from "./createGame";

export default function GamePage({ onBack }) {
  const containerRef = useRef(null);

  const [toast, setToast] = useState(null);

  const gameRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !gameRef.current) {
      gameRef.current = createGame(containerRef.current);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: 16 }}>
      <button onClick={onBack} style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <div
        ref={containerRef}
        id="game-container"
        style={{ width: 800, height: 600, margin: "0 auto" }}
      />
    </div>
  );
}
