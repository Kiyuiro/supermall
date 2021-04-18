<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"/>
    <scroll ref="scroll" :probe-type="3" class="content" @scroll="currentIndexChange">
      <detail-swiper :imgs="SwiperImages"/>
      <detail-base-info :data="goods"/>
      <detail-shop-info :data="shop"/>
      <detail-image-info :data="imageInfo"/>
      <detail-params ref="params" :data="params"/>
      <detail-comment ref="comment" :data="comment"/>
      <goods-list ref="list" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" :is-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/DetailNavBar";
import DetailSwiper from "@/views/detail/DetailSwiper";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailImageInfo from "@/views/detail/DetailImageInfo";
import DetailParams from "@/views/detail/DetailParams";
import DetailComment from "@/views/detail/DetailComment";
import DetailBottomBar from "@/views/detail/DetailBottomBar";

import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/content/scroll/Scroll";

import {getDetail, getRecommend, GoodsInfo, Shop} from "@/network/detail";
import {debounce} from "@/common/utils";
import {backTopMixin} from "@/common/mixin";

export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      id: null,
      SwiperImages: [],
      goods: null,
      shop: null,
      imageInfo: null,
      params: null,
      comment: null,
      recommends: []
    }
  },
  components: {
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    Scroll
  },
  methods: {
    // 点击标题滚动
    titleClick(index) {
      const scrollToY = [
        0, this.$refs.params.$el.offsetTop,
        this.$refs.comment.$el.offsetTop, this.$refs.list.$el.offsetTop
      ];
      this.$refs.scroll.scrollTo(0, -scrollToY[index], 100);
    },
    // 根据滚动条改变标题
    currentIndexChange(position) {
      // console.log(position);
      let positionY = -position.y;
      if (positionY >= this.$refs.list.$el.offsetTop) {
        this.currentIndex = 3;
      } else if (positionY >= this.$refs.comment.$el.offsetTop) {
        this.currentIndex = 2;
      } else if (positionY >= this.$refs.params.$el.offsetTop) {
        this.currentIndex = 1;
      } else if (positionY >= 0) {
        this.currentIndex = 0;
      }
      this.$refs.nav.currentIndex = this.currentIndex;

      this.listenShowBackTop(position)
    },
    addToCart() {
      console.log('add to cart');
      // 获取加入购物车的商品信息
      let product = {};
      product.image = this.imageInfo.detailImage[0].list[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      // 添加商品到购物车
      console.log(this.imageInfo);
      this.$store.dispatch("addToCart", product);
    }
  },
  created() {
    // 保存商品 ID
    this.id = this.$route.params.id;
    // 请求商品数据
    getDetail(this.id).then(res => {
      // console.log('detail', res);
      let data = res.result;
      // 轮播图数据
      this.SwiperImages = data.itemInfo.topImages
      // 获取商品数据
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
      // console.log('goods', this.goods);
      // 获取店铺数据
      this.shop = new Shop(data.shopInfo)
      // console.log('shop', this.shop);
      // 获取商品详细信息
      this.imageInfo = data.detailInfo;
      // console.log('imageInfo', this.imageInfo);
      // 获取商品参数信息
      this.params = data.itemParams;
      console.log('params', this.params);
      // 商品评论
      try {
        this.comment = data.rate.list[0];
      } catch (e) { console.log('商品没有评论'); }
    });
    // 商品推荐数据
    getRecommend().then(res => {
      // console.log("recommend: ", res);
      this.recommends = res.data.list;
      // console.log(this.recommends);
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on('detailImageLoad', () => {
      refresh();
    })
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
