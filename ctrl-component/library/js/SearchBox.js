const SearchBox = (props) => {
    const { value, filterBooks } = props;

    function handleSearchBoxChange(event) {
        filterBooks(event.currentTarget.value);
    }

    return (
        <input type="text" placeholder="Поиск по названию или автору" defaultValue={value} onChange={handleSearchBoxChange} />
    );
};