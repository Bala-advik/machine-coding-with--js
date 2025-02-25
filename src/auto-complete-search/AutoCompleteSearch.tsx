import { useEffect, useState } from "react";
import "./auto-complete-search.css";

const AutoCompleteSearch = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState<any>({});
  const [selectedResult, setSelectedResult] = useState<any>({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    const parsedResponse = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    ).then((res) => res.json());
    setResults(parsedResponse.recipes);
    setCache((prev: any) => ({ ...prev, [input]: parsedResponse.recipes }));
  };

  const handleClick = (result: any) => {
    setShowResults(false);
    setSelectedResult(result);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="search-container">
      <h2>Auto Complete</h2>
      <input
        type="text"
        className="search-input"
        value={input}
        onFocus={() => setShowResults(true)}
        // onBlur={() => setShowResults(false)}
        onChange={(e) => setInput(e.target.value)}
      />
      {showResults && results.length > 0 && (
        <div className="search-data-list">
          {results.map((result: any) => (
            <span key={result.id} onClick={() => handleClick(result)}>
              {result.name}
            </span>
          ))}
        </div>
      )}
      {selectedResult?.id && (
        <div className="search-selected-result-card">
          <img src={selectedResult.image} alt="search-selected-result-card" />
          <p>
            {selectedResult.name} - {selectedResult.prepTimeMinutes} Minutes
          </p>
          {selectedResult.instructions.length > 0 &&
            selectedResult.instructions.map((instruction: any, index: any) => (
              <p key={index}>•{instruction}</p>
            ))}
          {selectedResult.tags.length > 0 &&
            selectedResult.tags.map((tag: any, index: any) => (
              <span key={index} className="selected-result-card-tag">
                #{tag}
              </span>
            ))}
          <p></p>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
