const str = 'What are you doing now?';

function search() {
  const keyword = prompt();

  if (str.includes(keyword)) {
    console.log('입력하신 값이 포함되어 있습니다.');
  } else {
    console.log('해당 값을 찾을 수 없습니다.');
  }
}

search();
