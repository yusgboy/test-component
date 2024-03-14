<template>
    <div class="alert">
        <div v-for="notice in notices" :key="notice.name" class="alert-main">{{ notice.content }}</div>
    </div>
</template>

<script>
let seed = 0
function getUuid() {
    return `alert_${seed++}`
}
export default {
    components: {

    },
    data() {
        return {
            notices: [],
        }
    },
    methods: {
        add(ntc) {
            const name = getUuid()
            const notice = { name, ...ntc }
            this.notices.push(notice)
            const { duration = 1.5 } = notice
            setTimeout(() => {
                this.remove(name)
            }, duration * 1000)
        },
        remove(name) {
            const index = this.notices.findIndex((item) => item.name === name)
            this.notices.splice(index, 1)
        },
    },
}
</script>

<style lang="less" scoped>
.alert{
  position: fixed;
  top: 16px;
  left: 0;
  width: 100%;
  text-align: center;
  pointer-events: none;

  .alert-main{
    display: inline-block;
    padding: 8px 16px;
    margin-bottom: 8px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  }
}
</style>
