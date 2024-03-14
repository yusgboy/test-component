<template>
    <div class="logic-view">
    </div>
</template>

<script>
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import ResizeObserver from 'resize-observer-polyfill'

export default {
    name: 'FlowLogic',
    components: {

    },
    props: {
        option: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            lf: null,
        }
    },
    mounted() {
        const option = { container: this.$el, grid: true, ...this.option }
        this.lf = new LogicFlow(option)
        this.lf.render({
            nodes: [
                {
                    id: 'node_id_1',
                    type: 'rect',
                    x: 100,
                    y: 100,
                    text: { x: 100, y: 100, value: '节点1' },
                    properties: {},
                },
                {
                    id: 'node_id_2',
                    type: 'circle',
                    x: 200,
                    y: 300,
                    text: { x: 300, y: 300, value: '节点2' },
                    properties: {},
                },
            ],
        })
    },
    methods: {
        getLogicFlow() {
            return this.lf
        },
        setOption(data = {}) {
            this.lf.render(data)
        },
        register(plugin) {
            console.log(plugin)
        },
        resize() {
            const ro = new ResizeObserver()
            ro.observe(this.$el)
        },
    },
}
</script>

<style lang="less" scoped>
.logic-view{
  width: 100%;
  height: 100%;
}
</style>
