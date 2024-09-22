export default function TextBox({
  children,
  margin = "",
  width = 20,
  fontSize = 16,
  fontWeight = 400,
  fontFamily = "Sentient-Variable",
  className = "",
}) {
  return (
    <div className={className} style={{ width: `${width}rem`, margin }}>
      <p
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}px`,
          fontFamily,
        }}
      >
        {children}
      </p>
    </div>
  );
}
