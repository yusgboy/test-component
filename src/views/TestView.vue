<template>
    <div class="box">
        <div class="one"></div>
        <div class="test-view">
            <ChartView :chart-options="$eChartFn.testBar()"></ChartView>
        </div>
    </div>
</template>

<script>
import ChartView from '@/components/Chart/ChartView.vue'

export default {
    name: 'TestView',
    components: {
        ChartView,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="less" scoped>
.box{
    display: flex;
    height: 300px;

    .one{
        width: 200px;
        flex-shrink: 0;
    }
}

.test-view{
    color: red;
    flex: 1;
}

</style>
