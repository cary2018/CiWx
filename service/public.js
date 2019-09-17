import request from './network.js';
export function getData(serUrl,ar_id='',pg=''){
  return request({
    url: serUrl,
    data:{
      ar_id,
      pg
    }
  })
}