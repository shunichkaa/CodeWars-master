// Task
// You have a list of daily earnings from a freelance job. You can choose to work or skip those days. You can work for up to k consecutive days, but after that, you must take at least one break day where you earn nothing.
//
// 	Your task is to determine the maximum total earnings you can achieve while following this rule.
//
// 	Inputs
// earnings: an array of non-negative integers ( 0 <= length earnings < 100 ).
// k: an integer representing the maximum number of consecutive working days ( 1 <= k < 100 ).
// 	Output
// an integer representing the maximum earnings you can achieve while respecting the mandatory break rule.
// Example
// For earnings = [60, 70, 80, 40, 80, 90, 100, 20], k = 3, return 480. Forgo earning 40 and 20.
//
// For earnings = [45, 12, 78, 34, 56, 89, 23, 67, 91], k = 4, return 460. Forgo earning 12 and 23.
//
// Credit
// Original idea by @daryjoe.
//

function maximizeEarnings(earnings, k) {
	const n = earnings.length;
	const dp = Array(n + 1).fill(null).map(() => Array(k + 1).fill(-Infinity));
	dp[0][0] = 0;

	for (let i = 1; i <= n; i++) {
		for (let j = 0; j <= k; j++) {
			if (j === 0) {
				dp[i][0] = Math.max(...dp[i - 1]);
			} else if (dp[i - 1][j - 1] !== -Infinity) {
				dp[i][j] = dp[i - 1][j - 1] + earnings[i - 1];
			}
		}
	}
	return Math.max(...dp[n]);
}