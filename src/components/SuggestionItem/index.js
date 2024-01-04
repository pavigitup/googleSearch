const SuggestionItem = props => {
  const {itemsList} = props
  const {id, suggestion} = itemsList
  return (
    <li key={id}>
      <p>{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
