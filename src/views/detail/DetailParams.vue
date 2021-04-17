<template>
  <div v-if="data" class="detail-params-info">
    <table v-for="(value_table, index_table) in data.rule.tables" :key="index_table"
           class="info-size">
      <tr v-for="(value_tr, index_tr) in value_table" :key="index_tr">
        <td v-for="(value_td, index_td) in value_tr">
          {{ value_td }}
        </td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(value, index) in data.info.set" :key="index">
        <td class="info-param-key">{{ value.key }}</td>
        <td class="info-param-value">{{ value.value }}</td>
      </tr>
    </table>
    <div v-if="data.info.images" class="info-img">
      <img :src="data.info.image[0]" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParams",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.detail-params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.detail-params-info table {
  width: 100%;
  border-collapse: collapse;
}

.detail-params-info table tr {
  height: 42px;
}

.detail-params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.info-param-key {
  width: 95px;
}

.info-params {
  border-top: 1px solid rgba(0, 0, 0, .1);
}

.info-param-value {
  color: #eb4868;
}

.info-img {
  width: 100%;
}
</style>
