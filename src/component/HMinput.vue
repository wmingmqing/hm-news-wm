<template>
  <div class="input_box">
    <input :type="type" class="hm-input" :class='[status]' :placeholder="placeholder" :value="value" @input="HandelInput">
    <span class="tips" v-show="showTips">{{errMsg}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  computed: {
    showTips () {
      return this.status === 'error' && this.errMsg
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: 'text'
    },
    rules: {
      type: RegExp
    },
    errMsg: {
      type: String
    }
  },
  methods: {
    HandelInput (e) {
      const { value } = e.target
      this.$emit('input', value)
      if (!this.rules) return
      if (this.rules.test(value)) {
        this.status = 'success'
      } else {
        this.status = 'error'
      }
    }
  }
}
</script>

 <style lang="scss" scoped>
.input_box {
  padding-bottom: 20px;
  position: relative;
  .hm-input {
    width: 100%;
    height: 38px;
    background-color: transparent;
    border-bottom: 1px solid #666;
    font-size: 18px;

    &.error {
      border-color: red;
    }
    &.success {
      border-color: green;
    }
  }
  .tips {
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
