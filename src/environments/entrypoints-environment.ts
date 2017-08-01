export const server = {
    pos_endpoint: 'http://172.20.1.173:8080/pos-endpoint'
};

export const product_resource = {
    list : '/product/list',
    addOrUpdate : '/product/addOrUpdate'

};

export const product_api = {
    list : server.pos_endpoint + product_resource.list,
    addOrUpdate : server.pos_endpoint + product_resource.addOrUpdate
} ;
