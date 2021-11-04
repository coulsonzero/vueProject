<template>
 <div class="com-container">
     <div class="com-chart" ref="seller_ref"></div>
 </div>
</template>

<script>
export default {
    data () {
        return {
            charInstance: null
        }
    },
    method: {
        initChat () {
            this.charInstance = this.$echarts.init(this.$refs.seller_ref)
        }
    }
}
</script>

<style>

</style>