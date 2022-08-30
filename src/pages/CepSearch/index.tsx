import './styles.css';

import ResultCard from 'components/ResultCard';

const GitHubSearch = () => {
  return (
    <div className="github-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil GitHub</h1>

        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário GitHub"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />

      </div>
    </div>
  );
};

export default GitHubSearch;
