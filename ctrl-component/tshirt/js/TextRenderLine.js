const TextRenderLine = ({value, onChange}) => {
	return (
		<div class="type-text">
			<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" defaultValue={value} onChange={onChange}></textarea>
		</div>
	);
};
