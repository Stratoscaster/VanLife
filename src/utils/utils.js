function titleCaseWord(word) {
	if (!word) {
		return '';
	}
	return word.charAt(0).toUpperCase() + word.split('').slice(1).join('').toLowerCase();
}

function titleCaseString(words) {
	if (!words) {
		return '';
	}
	return words.split(' ').map(word => titleCaseWord(word)).join(' ');
}

export {titleCaseWord, titleCaseString}