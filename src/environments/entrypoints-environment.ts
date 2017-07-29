export const server = {
    pos_endpoint: 'http://localhost:8080/pos-endpoint'
};

export const product_resource = {
    list : '/product/list',
    addOrUpdate : '/product/addOrUpdate'
    
};

export const product_api = {
    list : server.pos_endpoint + product_resource.list,
    addOrUpdate : server.pos_endpoint + product_resource.addOrUpdate
} ;
