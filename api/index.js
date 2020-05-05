// need to fake some data here, otherwise there's nth to show
import __articles from './articles.json'
const TIMEOUT = 100
export default {
    getArticles: (cb, timeout) => setTimeout(() => cb(__articles), timeout || TIMEOUT)
}