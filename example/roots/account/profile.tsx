import styles from 'styles/account-profile.module.scss'
import { RootLocale, RootName } from 'types'

function AccountProfileRoot() {
  return <div className={styles.root}>Account Profile Domain</div>
}

AccountProfileRoot.schemaRoot = {
  name: RootName.ACCOUNT_PROFILE,
  pages: [
    {
      locale: RootLocale.EN,
      path: 'account/profile',
    },
    {
      locale: RootLocale.CS,
      path: 'ucet/profil',
    },
  ],
  metaData: [
    { locale: '*', data: { background: 'orange' } },
    { locale: 'cs', data: { title: 'Profil' } },
    { locale: 'en', data: { title: 'Profile' } },
  ],
}

export default AccountProfileRoot
