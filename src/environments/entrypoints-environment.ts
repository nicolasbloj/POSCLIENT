import { serv } from './server-environment';

export const server = {
  pos_endpoint: `${serv.address}:${serv.port}/pos-endpoint`
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


export const client_resource = {
  list: '/client/list',
  add: '/client/add',
  update: '/client/update',
  delete: '/client/delete'


};

export const client_api = {
  list: server.pos_endpoint + client_resource.list
};

