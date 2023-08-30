<template>
    <div class="form-container">
        <Form @passData="updateData" />
        <div class="content">
            <p><strong>{{ age.years }}</strong>years</p>
            <p><strong>{{ age.months }}</strong>months</p>
            <p><strong>{{ age.days }}</strong>days</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Content',
        data() {
            return {
                age: {
                    years: "--",
                    months: "--",
                    days: "--"
                }
            }
        },
        methods: {
            updateData(data) {
                //this.age = {}
                this.age = data;
            }
        }
    }
</script>

<style lang="scss" scoped>
p {
    font-size: 98px;
    font-weight: bold;
    margin: 0;
    line-height: 1.1;
    strong {
        color: #854DFF;
    }
    @media only screen and (max-width: 800px) {
        font-size: 60px;
    }
}
</style>