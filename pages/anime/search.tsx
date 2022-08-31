import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Anime } from '../../interfaces';
import { getAllAnime } from '../../services/animeServices'
import _ , { debounce } from 'lodash';
import { GetStaticProps } from 'next'
import AnimeDetail from '../../components/AnimeDetail';

interface Props {
    items: Anime[]
}

const Search = ({items} : Props) => {

    const [listAnime, setListAnime] = useState<Anime[]>([])

    const fetchAllAnime = () => {
        setListAnime(items)
    }

    useEffect(() => {
        fetchAllAnime()
    }, [])

    const handleSearch = debounce((e) => {
        let term = e.target.value
        if(term) {
            let cloneListUsers = _.cloneDeep(items)
            cloneListUsers = cloneListUsers.filter((item: Anime) => item.name.includes(term))
            setListAnime(cloneListUsers);
        } else {
            fetchAllAnime()
        }
    }, 200)

    return (
        <Layout title="Search">
            <section className="search">
                <div className="grid wide">
                    <div className="search__container">
                        <div className="search__input">
                            <input 
                                type="text" 
                                placeholder='Search anime...'
                                onChange={(e) => handleSearch(e)}
                                />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="row">
                        {
                            listAnime.map((item, index) => (
                                <div key={item.id} className="col l-4" style={{margin: "20px 0"}}>
                                    <AnimeDetail item={item} />
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Search;

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const res = await getAllAnime()
  const items: Anime[] = res.anime
  return { props: { items } }
}