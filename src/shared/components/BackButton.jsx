export function BackButton({ children, onClick }) {
  return (
    <button className="back-button" type="button" onClick={onClick}>
      {children}
    </button>
  )
}
