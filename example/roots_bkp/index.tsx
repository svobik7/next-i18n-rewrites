import styles from 'styles/home-root.module.scss'
import { RootName } from 'types'

function IndexRoot() {
  return <div className={styles.root}>INDEX Page</div>
}

IndexRoot.schemaRoot = {
  name: RootName.HOME,
  pages: [{ locale: '*', path: 'index', suffix: '' }],
  // metaData: [
  //   { locale: '*', data: { footer: true } },
  //   { locale: 'en', data: { section: 'Authorization' } },
  //   { locale: 'cs', data: { section: 'Ověření' } },
  //   { locale: 'es', data: { section: 'Autorización' } },
  // ],
}

export default IndexRoot
