interface Props {
  text: string
  isFocused: boolean
  onFocusChange: () => void
}

const Buttons: React.FC<Props> = ({ text, isFocused, onFocusChange }) => {
  return (
    <button
      onClick={onFocusChange}
      className={`text-White-text px-3 py-2 rounded-lg ${
        isFocused ? "bg-gray-600" : ""
      }`}
    >
      {text}
    </button>
  )
}

export default Buttons
