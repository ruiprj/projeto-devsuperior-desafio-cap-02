import './styles.css';

import ResultCard from 'components/ResultCard';
import ImageCard from 'components/ImageCard';

const GitHubSearch = () => {
  return (
    <div className="github-search-container">
      <div className="container  search-container">
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
      </div>

      <div className="container  github-info-card">

        <div className="github-image-container">
          <ImageCard />
        </div>

        <div className="container  github-all-info-container">
          <div className="info-title">
            <h3>Informações</h3>
          </div>

          <div className="github-info-card-detail">
            <ResultCard title="Perfil" description="https://github.com/chapolim" link={true} />
            <ResultCard title="Seguidores" description="234" link={false} />
            <ResultCard title="Localidade" description="rua q sobe e desce" link={false} />
            <ResultCard title="Nome" description="Chapolim Colorado" link={false} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default GitHubSearch;
