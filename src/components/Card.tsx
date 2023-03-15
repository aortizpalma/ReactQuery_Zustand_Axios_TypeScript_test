import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteRepos'

type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

function Card({ repository, isFavorite }: CardProps) {
    const addFavoriteRepo = useFavoriteReposStore( state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavoriteReposStore( state => state.removeFavoriteRepo)

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavoriteRepo(repository.id)
            let el = document.getElementById(repository.id.toString());
            el?.classList.remove("fave");
            return
        }

        addFavoriteRepo(repository.id);
        let el = document.getElementById(repository.id.toString());
        el?.classList.add("fave");
    }

  return (
    <div>
        <ul>
            <li key={repository.id}>{repository.name}</li>
            <button
                id={repository.id.toString()}
                onClick={toggleFavorite}
                className=""
                >
                    {
                        isFavorite ? "⭐⭐⭐⭐⭐" : "Add to Favorites"
                    }
            </button>
        </ul>
    </div>
  )
}

export default Card