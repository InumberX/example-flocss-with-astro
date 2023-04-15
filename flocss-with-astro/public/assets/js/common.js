window.addEventListener('DOMContentLoaded', () => {
  console.log('example')

  $(document)
    .off('click.jsClickExample')
    .on('click.jsClickExample', '.js-click-example .js-click-example__button', function () {
      alert('example')

      return false
    })
})
