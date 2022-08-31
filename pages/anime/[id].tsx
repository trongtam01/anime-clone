import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllAnime } from '../../services/animeServices'
import { Anime } from '../../interfaces'
import Layout from '../../components/Layout'
import AnimeDetail from '../../components/AnimeDetail'

type Props = {
  item?: Anime
  errors?: string
}

const AnimePropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'Anime Detail'
      } | Anime`}
    >
      {item && <AnimeDetail item={item} />}
    </Layout>
  )
}

export default AnimePropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const res = await getAllAnime()
  const paths = res.anime.map((user) => ({
    params: { id: user.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const res = await getAllAnime()
    const item = res.anime.find((data) => data.id === Number(id))
    // By returning { props: item }, the AnimePropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}