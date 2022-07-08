const clickAllCheckBoxHandler = (event) => {
  const $agreeCheckBoxes = document.querySelectorAll('.agree-check-box');

  const $allCheckBox = event.target;

  if ($allCheckBox.getAttribute('checked')) {
    return;
  }

  // 모두 동의
  for (const $checkBox of $agreeCheckBoxes) {
    if (!$checkBox.getAttribute('checked')) {
      // unchecked
      $checkBox.setAttribute('checked', true);
    }
  }

  //   const $nextButton = document.querySelector('.next-button');
  //   $nextButton.setAttribute('disabled', false);
};

const clickCheckBoxHandler = (event) => {
  const curCheck = event.target.getAttribute('checked') === true;
  if (curCheck) {
    event.target.setAttribute('checked', false);
  } else {
    event.target.setAttribute('checked', true);
  }

  const $agreeCheckBoxes = document.querySelectorAll('.agree-check-box');

  // option이 아닌 것들 검사했을 때 모두 체크했다면 버튼 활성화. 아니면 비활성화!
  let isAllrequiredCheck = true;
  for (const $agreeCheckBox of $agreeCheckBoxes) {
    const isRequired = !$agreeCheckBox.classList.value.includes('option');

    if (isRequired) {
      const isChecked = $agreeCheckBox.getAttribute('checked');
      if (!isChecked) isAllrequiredCheck = false;
    }
  }

  console.log(isAllrequiredCheck);

  //   const $nextButton = document.querySelector('.next-button');
  //   $nextButton.setAttribute('disabled', isAllrequiredCheck);
};

const clickNextButtonHandler = () => {};

const init = () => {
  // 이벤트 연결 초기화
  const $allCheckBox = document.querySelector('.all-check');
  $allCheckBox.addEventListener('click', clickAllCheckBoxHandler);

  //   const $nextButton = document.querySelector('.next-button');
  //   $nextButton.addEventListener('click', clickNextButtonHandler);

  // 개별 동의 체크 박스
  const $agreeCheckBoxes = document.querySelectorAll('.agree-check-box');
  for (const $agreeCheckBox of $agreeCheckBoxes) {
    if (!$agreeCheckBox.getAttribute('checked')) {
      $agreeCheckBox.addEventListener('click', clickCheckBoxHandler);
    }
  }
};

init();
