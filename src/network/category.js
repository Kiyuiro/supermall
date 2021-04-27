import {request} from "@/network/request";

export function getCategoryList() {
  return request({
    url: '/category'
  })
}

export function getCategoryInfo(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
