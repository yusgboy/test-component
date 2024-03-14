<template>
    <div class="chart-view" :style="{width:width,height:height}">
    </div>
</template>

<script>
import * as echarts from 'echarts'
import ResizeObserver from 'resize-observer-polyfill'
import { debounce } from 'lodash'

export default {
    components: {

    },
    props: {
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
        chartOptions: {
            type: Object,
            default: () => {},
        },
        autoResize: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            validator: (t) => {
                const type = ['canvas', 'svg']
                return type.includes(t)
            },
            default: 'canvas',
        },
    },
    data() {
        return {
            myChart: null,
            ob: null,
        }
    },
    watch: {
        chartOptions: {
            deep: true,
            handler(newVal) {
                this.setOption(newVal)
            },
        },
    },
    mounted() {
        this.initChart()
        if (this.autoResize) {
            this.observerEl()
        }
    },
    beforeDestroy() {
        if (!this.myChart) return
        if (this.autoResize) {
            this.unObserveEl()
        }
        this.myChart.dispose()
        this.myChart = null
    },
    methods: {
        initChart() {
            this.myChart = echarts.init(this.$el, null, {
                renderer: this.type,
            })
            this.myChart.setOption(this.chartOptions)
        },
        setOption(chartOptions) {
            this.clearChart()
            this.resizeHandler()
            this.myChart.setOption(chartOptions)
        },
        clearChart() {
            this.myChart && this.myChart.clear()
        },
        resizeHandler() {
            this.myChart.resize()
        },
        debounceResize: debounce(function () {
            this.resizeHandler()
        }, 200),
        observerEl() {
            this.ob = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width, height } = entry.contentRect
                    console.log(width, height)
                    this.$emit('resize', { width, height })
                    // 抛出去width，height 如果图表需要用像素可以使用 @resize="handleResize"  然后再setOptions
                    this.debounceResize()
                }
            })
            this.ob.observe(this.$el)
        },
        unObserveEl() {
            if (this.ob) {
                this.ob.disconnect()
                this.ob = null
            }
        },
    },

}
</script>

<style lang="less">

</style>
