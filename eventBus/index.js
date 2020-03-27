const eventListener = {
  /* test */
  TEST_EMIT() {
    uni.$emit('TEST')
  },
  TEST_ON(cb) {
    uni.$on('TEST', cb)
  },

}

export default eventListener;