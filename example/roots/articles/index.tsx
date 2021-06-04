import { RootLocale, RootName } from 'types'
import styles from 'styles/articles-index.module.scss'

function ArticlesRoot() {
  return <div className={styles.root}>Articles Index</div>
}

ArticlesRoot.schemaRoot = {
  name: RootName.ARTICLES_INDEX,
  pages: [
    {
      locale: RootLocale.EN,
      path: 'articles',
    },
    {
      locale: RootLocale.CS,
      path: 'clanky',
    },
  ],
  metaData: [
    { locale: '*', data: { background: 'orange' } },
    { locale: 'cs', data: { title: 'Články' } },
    { locale: 'en', data: { title: 'Articles' } },
  ],
}

export default ArticlesRoot
