export enum RootLocale {
  EN = 'en',
  CS = 'cs',
}

export enum RootName {
  HOME = '/',
  ACCOUNT_PROFILE = 'account/profile',
  ARTICLES_INDEX = 'articles',
  ARTICLES_VIEW = 'articles/[id]',
}

export interface Author {
  id: number
  name: string
  username: string
}

export interface Article {
  id: number
  title: string
  slug: string
  authorId: string
}
