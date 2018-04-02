const TextRenderLine = ({value, onChange}) => {
	const onTextChange = (event) => {
		onChange(event.target.value);
	}

	return (
		<div class="type-text">
			<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" defaultValue={value} onChange={onTextChange}></textarea>
		</div>
	);
};
