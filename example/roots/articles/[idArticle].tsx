import styles from 'styles/articles-detail.module.scss'
import { RootName } from 'types'

function ArticlesDetailRoot() {
  return <div className={styles.root}>Articles Detail</div>
}

ArticlesDetailRoot.schemaRoot = {
  name: RootName.ARTICLES_VIEW,
  parentName: RootName.ARTICLES_INDEX,
  pages: [
    {
      locale: '*',
      path: '{{parent}}/[idArticle]',
    },
  ],
  metaData: [{ locale: '*', data: { background: 'orange' } }],
}

export default ArticlesDetailRoot
