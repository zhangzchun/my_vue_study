<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <!-- 校验信息显示 -->
        <p v-if="error">{{error}}</p>

        <!-- 校验规则 -->
        <!--<p> {{ form.rules }}</p>-->
    </div>
</template>

<script>
    // Asyc-validator
    import Schema from "async-validator";

    export default {
        name: "KFormItem",
        data () {
          return {
              error:""
          }
        },
        inject:['form'],
        props:{
            label:{
                type:String,
                default:""
            },
            prop:{
                type:String,
                default:""
            }
        },
        mounted () {
            this.$on("validate",() =>{
                this.validate()
            });
        },
        methods: {
            validate() {
                // 规则
                // console.log(this.form.rules[this.prop]);
                const rules = this.form.rules[this.prop]
                // 当前值
                // console.log(this.form.model[this.prop]);
                const value = this.form.model[this.prop]

                // 校验 描述对象
                const desc = { [this.prop]: rules };

                const schema = new Schema(desc);
                return schema.validate({[this.prop]:value},errors =>{
                    if (errors) {
                        this.error = errors[0].message;
                    } else {
                        // 校验通过
                        this.error = "";
                    }
                })

            }
        },
    }
</script>

<style scoped>

</style>