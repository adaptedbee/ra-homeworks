const FontSelector = ({fonts, selectedFont, onSelect}) => {
    return (
        <div className="font-picker">
            Выберите шрифт
            {fonts.map((font) => {
                return (
                    <div className="grid center font-item" key={font.name}>
                        <input 
                            type="radio" name="font" 
                            value={font.name} id={font.name}
                            defaultChecked={font === selectedFont}
                            onChange={() => onSelect(font)}
                        />
                        <label htmlFor={font.name} className="grid-1">
                            <PictureFont text="abc" path={font.path} />
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

FontSelector.propTypes = {
  fonts: PropTypes.array,
  selectedFont: PropTypes.object,
  onSelect: PropTypes.func
};
