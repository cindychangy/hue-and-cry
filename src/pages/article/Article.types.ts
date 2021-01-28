import { Article } from 'api/types'

export type ArticleProps = {
  article: Record<string, string>;
  articles: Article[];
}