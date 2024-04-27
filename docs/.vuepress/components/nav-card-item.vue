<template>
  <a class="nav-card-item" :href="href" target="_blank" rel="noopener noreferrer">
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-content">
      <slot name="text"></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NavCardItem',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* 样式定义 */
.nav-card-item {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  /* 其他样式... */
}

.nav-card-item:hover {
  /* 鼠标悬停时的样式... */
}

.item-icon {
  /* 图标样式... */
}

.item-content {
  /* 文本样式... */
}
</style>