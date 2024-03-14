<template>
    <div class="table-view">
        <table>
            <thead>
                <tr>
                    <th v-for="item in columns" :key="item.key" th>{{ item.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in data" :key="index">
                    <td v-for="column in columns" :key="column.key">
                        <template v-if="'render' in column">
                            <Render
                                :row="item"
                                :column="column"
                                :index="index"
                                :render="column.render"
                            ></Render>
                        </template>
                        <div v-else>{{ item[column.key] }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Render from './render'

export default {
    components: {
        Render,
    },
    props: {
        columns: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="less" scoped>
  table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }

  table th{
    white-space: nowrap;
    color: #5c6b77;
    background: #f7f7f7;
    font-weight: 600;
  }

  table td, table th{
    padding: 8px 16px;
    text-align: left;
    border: 1px solid #e9e9e9;
  }
</style>
