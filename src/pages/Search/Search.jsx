import React from 'react'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

const Search = () => {

    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div>
        <h2>Search</h2>
        <div>
          {posts && posts.length === 0 && (
            <>
              <p>Não foram encontrados posts a partir da busca...</p>
              <Link to="/" className='btn btn-dark'>Falar</Link>
            </>
          )}

          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
        </div>
    </div>
  )
}

export default Search
