export default function Divider() {
  return (
    <hr
      className="border-none h-px mx-12"
      style={{
        background:
          "linear-gradient(90deg, transparent, var(--border), transparent)",
      }}
    />
  );
}
