<template>
  <div class="detail-comment">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
    <div v-if="data">
      <div class="info-user">
        <img :src="data.user.avatar" alt="">
        <span>{{ data.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ data.content }}</p>
        <div class="info-other">
          <span class="date">
            {{ data.created | showDate }}
          </span>
        </div>
        <div v-if="data.images" class="info-img">
          <img v-for="(value, index) in data.images" :key="index" :src="value" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
  name: "DetailComment",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, 'yyyy/MM/dd hh:mm');
    }
  }
}
</script>

<style scoped>
.detail-comment {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-img {
  margin-top: 10px;
}

.info-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

</style>
