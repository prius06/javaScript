const quiz = [
	{
		question : 'ゲーム機で夫も売れたゲーム機は次の内どれ？',
		answers : [
		'スーパーファミコン',
		'プレイステーション２',
		'ニンテンドーswitch',
		'ニンテンドーDS'],
		correct : 'ニンテンドーDS'
},{
	question : '室内競技はどれ？',
	answers : [
		'野球',
		'サッカー',
		'バスケットボール',
		'陸上'],
		correct : 'バスケットボール'
},{
	question : '女の子に人気の職業はどれ？',
	answers : [
		'お花屋さん',
		'ケーキ屋さん',
		'パイロット',
		'警察官'],
		correct : 'ケーキ屋さん'
}
];
	const quizLength = quiz.length;
	let quizIndex = 0;
	let score = 0;


	const $button = document.getElementsByTagName('button')

	const setUpQuize = () => {
		let buttonIndex = 0;
		let buttonLength = $button.length;
		while(buttonIndex < buttonLength){
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	$button[buttonIndex].textContent = quiz[quizIndex ].answers[buttonIndex];
			buttonIndex++;
		}
	};
	setUpQuize();

	const clickHandler = (e) => {
		if(quiz[quizIndex].correct === e.target.textContent){
			window.alert('正解！');
			score++;
		} else{
			window.alert('不正解！');
		}

		quizIndex++;

		if(quizIndex < quizLength){
			setUpQuize();
		}else{
			window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
		}
	};

	let handlerIndex = 0;
	while (handlerIndex < $button.length){
		$button[handlerIndex].addEventListener('click',(e) => {
			clickHandler(e);
		});
		handlerIndex++;
	}
	