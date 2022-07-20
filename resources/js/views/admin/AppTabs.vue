
<template>
  <div
    :class="{
      flex: variant === 'horizontal',
    }"
  >
    <ul
      :class="{
        flex: variant === 'vertical',
      }"
    >
      <li v-for="(tab, index) in tabList" :key="index" :class="{active: currentTab === index}"  @click="activeTab = index+1;currentTab = index">
        <label :for="`${_uid}${index}`" v-text="tab" :id="`${_uid}${index}`"/>
      </li>
    </ul>

    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab" class="tab-content">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => "vertical",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
      currentTab:0
    };
  },
};
</script>

<style>
.flex {
  display: flex;
}
.tabs-cstm li.active
{
  background: #245387;
  color: #fff;
  
}
.tabs-cstm li
{
  background: #EDF2F6;
  font-size: 12px;
  color: #000;
  padding: 13px 13px 9px 13px;
  border-radius: 5px 5px 0px 0px;
  min-width: 130px;
  text-align: center;
}
.tabs-cstm .flex
{
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
.tab-content
{
  background-color: #fff;
  padding: 9px 0px;
  border-radius: 0px 5px 5px 5px;
}
@media screen and (max-width:767px) {
  .tabs-cstm li
  {
    padding: 13px 13px 9px 0px;
  }
  .tabs-cstm .flex
  {
    overflow-x: scroll;
  }
  .table-search
  {
    width: 100% !important ;
    margin-bottom: 3%;
  }
  .table-date
  {
    width: 100% !important;
    margin-bottom: 3%;
  }
  .tab-selector
  {
    width: 49% !important;
  }
  .tab-content .admin-btn
  {
    margin-top: 3% !important;
  }
}
</style>