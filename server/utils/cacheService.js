//TRY TO INCAPSULATE CACHECLEANING
//MAYBE WILL BE USED IN FUTURE
//MAYBE WILL BE USED IN FUTURE
//MAYBE WILL BE USED IN FUTURE

export default class CacheService {
  constructor(cache) {
    this.cache = new Map()
  }

  async clearCache(key) {
    switch (key) {
      case 'all':
        this.cache.delete('all');
        break;
      default:
        if (typeof key === 'number' && Number.isInteger(key)) {
          this.cache.delete(key);
        } else {
          console.log('clearCache: unexpected key value');
        }
        break;
    }

  }

  getCache(key) {
    return this.cache.get(key);
  }

  setCache(key, value) {
    this.cache.set(key, value);
  }

}