// The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" ("the unbreakable cipher")
//
// The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.
//
// 	In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.
//
// 	Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.
//
// 	The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.
//
// 	Visual representation:
//
// 	"my secret code i want to secure"  // message
// "passwordpasswordpasswordpasswor"  // key
// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.
//
// 	Examples
// alphabet = "abcdefghijklmnopqrstuvwxyz"
// key      = "password"
//
// "codewars" --> encode -->  "rovwsoiv"
// "laxxhsj"  --> decode -->  "waffles"
// Note: any character not in the alphabet must be left alone. For example in the above case:
//
// "CODEWARS"  --> encode -->  "CODEWARS"

function VigenèreCipher(key, alphabet) {
	function process(str, shouldEncode) {
		return str.split('').map((char, i) => {
			// Если символ не в алфавите, оставляем как есть
			if (!alphabet.includes(char)) {
				return char;
			}

			// Получаем позиции символов в алфавите
			const charIndex = alphabet.indexOf(char);
			const keyChar = key[i % key.length];
			const keyIndex = alphabet.indexOf(keyChar);

			// Вычисляем сдвиг (для кодирования складываем, для декодирования вычитаем)
			const shift = shouldEncode ?
				(charIndex + keyIndex) % alphabet.length :
				(charIndex - keyIndex + alphabet.length) % alphabet.length;

			return alphabet[shift];
		}).join('');
	}

	this.encode = function(str) {
		return process(str, true);
	};

	this.decode = function(str) {
		return process(str, false);
	};
}