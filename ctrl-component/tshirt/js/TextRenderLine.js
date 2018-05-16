const TextRenderLine = ({value, onChange}) => {
	const onTextChange = (event) => {
		const phraseEx = /[^a-z\s]/gi;

    let correctedPhrase = event.currentTarget.value.replace(phraseEx, '');
		event.currentTarget.value = correctedPhrase;
		
		onChange(correctedPhrase);
	}

	return (
		<div className="type-text">
			<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" defaultValue={value} onChange={onTextChange}></textarea>
		</div>
	);
};

TextRenderLine.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
