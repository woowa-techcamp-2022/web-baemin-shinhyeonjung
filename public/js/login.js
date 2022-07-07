// 로그인 버튼 핸들러

const clickLoginButonHandler = async (event) => {
  event.preventDefault();

  try {
    const id = document.loginForm.id.value,
      pw = document.loginForm.pw.value;

    const $idAlert = document.querySelector('.id-alert');
    const $pwAlert = document.querySelector('.pw-alert');
    // alert 초기화

    $idAlert.style.visibility = 'hidden';
    $pwAlert.style.visibility = 'hidden';

    if (!id) {
      $idAlert.style.visibility = 'visible';
    }
    if (!pw) {
      $pwAlert.style.visibility = 'visible';
    }

    if (!id || !pw) return;

    const emailRegExp =
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    if (!id.match(emailRegExp)) {
      $idAlert.innerHTML = '올바른 이메일 형식이 아닙니다.';
      $idAlert.style.visibility = 'visible';
      return;
    }

    const data = { id, pw };

    const res = await fetch('/auth/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (json.error) {
      // 로그인 처리 에러
      alert(json.error);
    } else {
      location.href = 'http://localhost:3000/';
    }
  } catch (error) {
    console.log(error);
    location.href = 'http://localhost:3000/error';
  }
};

// 이벤트 바인딩
const $loginButton = document.querySelector('.login-button');
$loginButton.addEventListener('click', clickLoginButonHandler);
