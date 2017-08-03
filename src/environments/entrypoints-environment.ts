export const server = {
  pos_endpoint: 'http://172.20.1.173:8080/pos-endpoint'
};

export const product_resource = {
  list: '/product/list',
  add: '/product/add',
  update: '/product/update',
  delete: '/product/delete'


};

export const product_api = {
  list: server.pos_endpoint + product_resource.list,
  add: server.pos_endpoint + product_resource.add,
  update: server.pos_endpoint + product_resource.update,
  delete: server.pos_endpoint + product_resource.delete
};
