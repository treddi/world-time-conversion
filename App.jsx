export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "40px"
      }}
    >
      <h1>World Time Conversion Tool</h1>
      <p>React is rendering correctly.</p>
      <button
        onClick={() => alert("Button works")}
        style={{
          padding: "12px 18px",
          border: "none",
          borderRadius: "10px",
          background: "#111827",
          color: "white",
          cursor: "pointer"
        }}
      >
        Test Button
      </button>
    </div>
  );
}
