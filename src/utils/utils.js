function titleCaseWord(word) {
	return word.charAt(0).toUpperCase() + word.split('').slice(1).join('').toLowerCase();
}

function titleCaseString(words) {
	return words.split(' ').map(word => titleCaseWord(word)).join(' ');
}

export {titleCaseWord, titleCaseString}