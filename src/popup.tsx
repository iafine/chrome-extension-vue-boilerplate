import $ from 'jquery'

chrome.storage.local.get('SET', function (data) {
  const SET = data.SET
  if (SET) {
    const username = SET.username
    const password = SET.password
    const skus = SET.skus
    const state = SET.state

    $('input[name="username"]').val(username)
    $('input[name="password"]').val(password)
    $('textarea[name="skus"]').val(skus)
    $("input[type='checkbox'][name='state']").prop('checked', state)
  } else {
    // $("input[type='checkbox'][name='state']").prop("checked", true);
  }
})

$(document).on('click', '.save', function () {
  SetData('')
})

$(document).on('click', '.buy', function () {
  SetData(
    'https://www.ti.com.cn/zh-cn/ordering-resources/buying-tools/quick-add-to-cart.html'
  )
})

function SetData(url: string) {
  const username = $('input[name="username"]').val()
  const password = $('input[name="password"]').val()
  const skus = $('textarea[name="skus"]').val()
  const state = $("input[type='checkbox'][name='state']").prop('checked')
  // var state = $("input[type='checkbox'][name='state']").prop("checked");
  chrome.storage.local.set(
    {
      SET: { username: username, password: password, skus: skus, state: state }
    },
    function () {
      if (url != '') {
        window.open(url)
      }
    }
  )
}
