export default function Buttons({ onClick, value, disabled, hidden }) {

  return (
    <p className="input-group">
      <button
        className="button"
        onClick={onClick}
        hidden={hidden}
        disabled={disabled}
      >
        {value}
      </button>
    </p>
  );
}
