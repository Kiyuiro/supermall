<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control v-show="isTabFixed"
                 ref="tabControl2"
                 :title="['流行', '新款', '精选']"
                 class="tab-control"
                 @tabClick="tabClick"></tab-control>
    <scroll ref="scroll" :probe-type="3"
            :pull-up-load="true" class="content"
            @pullingUp="loadMore" @scroll="contentScroll">
      <home-swiper :banners="banners" @homeSwiperImageLoad="homeSwiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <tab-control ref="tabControl"
                   :title="['流行', '新款', '精选']"
                   @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top :is-show="isShowBackTop" @click.native="backClick"/>
  </div>
</template>
<script>
import HomeSwiper from "@/views/home/HomeSwiper";
import HomeRecommendView from "@/views/home/HomeRecommendView";

import NavBar from "@/components/content/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

import {getHomeGoods, getHomeMultidata} from "@/network/home";
import {debounce} from "@/common/utils"
import {backTopMixin} from "@/common/mixin";


export default {
  name: "Home",
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0
    }
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  methods: {
    // 事件监听
    tabClick(index) {
      // console.log(index);
      this.currentType = Object.keys(this.goods)[index]
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 轮播图数据请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 商品数据请求
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 重置上拉加载
        this.$refs.scroll.finishPullUp();
      })
    },
    // 获取滚动高度
    contentScroll(position) {
      // console.log(position)
      // 判断是否显示 BackTop
      this.listenShowBackTop(position);
      // 判断 TabControl 是否固定
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop
    },
    // 上拉加载更多商品数据
    loadMore() {
      console.log("load more");
      this.getHomeGoods(this.currentType);
    },
    // 轮播图加载完成
    homeSwiperImageLoad() {
      // 获取 tabControl 的 offsetTop
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  },
  created() {
    // 请求轮播图数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 监听图片加载是否完成
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on('imageLoad', () => {
      // 刷新加载高度
      refresh();
    });
  },
  activated() {
    console.log('home activated');
    this.$refs.scroll.scrollTo(0, this.scrollY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    console.log('home deactivated');
    // 保存离开时滚动的高度
    this.scrollY = this.$refs.scroll.getScrollY();
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
