<template>
    <div class="home">
        <div class="box">
            <LogicFlow ref="logicFlow"></LogicFlow>
            <TableRender></TableRender>
            <Chart></Chart>
        </div>
    </div>
</template>

<script>
import LogicFlow from '@/components/FlowLogic/FlowLogic.vue'
import TableRender from '@/components/TableRender/TableRender.vue'
import Chart from '@/components/Chart/ChartView.vue'

export default {
    name: 'HomeView',
    components: {
        LogicFlow,
        TableRender,
        Chart,
    },
    methods: {
        handleClick() {
            this.$refs.logicFlow.setOption({
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
                edges: [
                    {
                        id: 'edge_id',
                        type: 'polyline',
                        sourceNodeId: 'node_id_1',
                        targetNodeId: 'node_id_2',
                        text: { x: 139, y: 200, value: '连线' },
                        startPoint: { x: 100, y: 140 },
                        endPoint: { x: 200, y: 250 },
                        pointsList: [
                            { x: 100, y: 140 },
                            { x: 100, y: 200 },
                            { x: 200, y: 200 },
                            { x: 200, y: 250 },
                        ],
                        properties: {},
                    },
                ],
            })
        },
    },
}
</script>
<style lang="less" scoped>
.home{
  .box{
    width: 600px;
    height: 600px;
    background: aquamarine;
  }
}
</style>
