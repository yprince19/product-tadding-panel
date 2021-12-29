const ACTIVE_HOST =
     'https://betacontent.zaamo.co';

export const ServiceEnum = {
     getContentFilters: 'streaming/api/get/content/filters/',
     getTagContent: 'streaming/api/tag/content/',
     getContentList: 'streaming/api/content/',
     getProducts: 'streaming/api/get/products',
     getCollections: 'streaming/api/get/collections',

     postTagContent: 'streaming/api/tag/content/',
     postUnTagContent: 'streaming/api/untag/content/',
     userList: (id) => `user/list/${id}`,

};

export const urlFor = (service) => {
     if (service) {
          return `${ACTIVE_HOST}/${service}`;
     }
     return undefined;
};