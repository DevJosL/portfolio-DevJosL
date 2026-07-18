export function SearchBar({ value, onChange, placeholder, label }) {
  return (
    <label className="search-bar">
      <span className="sr-only">{label}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  )
}
