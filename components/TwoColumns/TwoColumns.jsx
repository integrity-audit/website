const TwoColumns = ({ containerClass = '', col1Class = '', col2Class = '', content }) => {
  return (
    <div className={`container ${containerClass}`}>
      <div className={`${col1Class}`}>
        {content.col1Content}
      </div>
      <div className={`${col2Class}`}>
        {content.col2Content}
      </div>
    </div>
  )
}

export default TwoColumns