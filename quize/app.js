const question = "ゲーム機で夫も売れたゲーム機は次の内どれ？";
const answers = [
	'スーパーファミコン',
	'プレイステーション２',
	'ニンテンドーswitch',
	'ニンテンドーDS'];
	const correct  = 'ニンテンドーDS';

	console.log();

	document.getElementById('js-question').textContent = question;

	const $button = document.getElementsByTagName('button')

	const setUpQuize = () => {
		let buttonIndex = 0;
		let buttonLength = $button.length;
		while(buttonIndex < buttonLength){
			$button[buttonIndex].textContent = answers[buttonIndex];
			buttonIndex++;
		}
	};
	setUpQuize();

	const clickHandler = (e) => {
		if(correct === e.target.textContent){
			window.alert('正解！');
		} else{
			window.alert('不正解！');
		}
	}

	let handlerIndex = 0;
	while (handlerIndex < $button.length){
		$button[handlerIndex].addEventListener('click',(e) => {
			clickHandler(e);
		});
		handlerIndex++;
	}
	