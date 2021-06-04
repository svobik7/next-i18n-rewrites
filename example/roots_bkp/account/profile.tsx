import AccountProfile from 'domains/account-profile'
import { RootName, RootLocale } from 'types'

function AccountProfileRoot() {
  return <AccountProfile />
}

AccountProfileRoot.schemaRoot = {
  name: RootName.ACCOUNT_PROFILE,
  pages: [
    {
      locale: RootLocale.EN,
      path: 'account/profile-{{token}}',
    },
    {
      locale: RootLocale.CS,
      path: 'ucet/profil-{{token}}',
    },
    {
      locale: RootLocale.EN,
      path: 'cuenta/perfil-{{token}}',
    },
  ],
  metaData: [
    { locale: '*', data: { background: 'orange' } },
    { locale: 'cs', data: { title: 'Profil' } },
    { locale: 'en', data: { title: 'Profile' } },
    { locale: 'es', data: { title: 'Perfil' } },
  ],
  params: { token: 'b1' },
}
export default AccountProfileRoot
