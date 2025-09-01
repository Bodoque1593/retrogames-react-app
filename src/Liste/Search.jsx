function Search({ onSearch }) {
    const handleChange = (e) => {
      const value = e.target.value;
      onSearch(value);
    };
  
    return (
      <input
        type="text"
        placeholder="Buscar un video..."
        onChange={handleChange}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    );
  }
  
  export default Search;
  