<template>
  <transition name="modal">
    <div class="modal-mask" @click.self="$emit('close')">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    mounted () {
      this.storedState.position = document.body.style.position
      this.storedState.overflow = document.body.style.overflow
      this.storedState.height = document.body.style.height
      document.body.style.position = 'absolute'
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    },
    beforeDestroy () {
      document.body.style.position = this.storedState.position
      document.body.style.overflow = this.storedState.overflow
      document.body.style.height = this.storedState.height
    },
    data () {
      return {storedState: {}}
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 0 2rem;
    height: 100vh;
  }

  .modal-container {
    max-height: 90vh;
    overflow-y: scroll;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }


  @media screen and (max-width: 1023px) {
    .modal-body {
      overflow-y: scroll;
    }
  }

  .modal-body {
    overflow: hidden;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  body {
    height: 100%;
    position: fixed;
  }

</style>
