import React from 'react'
import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {
  const { data, isLoading } = useFetchRepositories()
  const { favoriteReposIds, addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore()
  
  if (isLoading) return <div>Loading...</div>

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <div>
      <h1>List of GitHub Repositores</h1>
      {data?.map(repository => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        />
      ))}
    </div>
  )
}

export default App