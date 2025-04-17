var countGoodNumbers = function(n) {
    const MOD = 1e9 + 7;

    const chakraPower = (base, power) => {
        let result = 1n;
        base = BigInt(base);
        power = BigInt(power);
        const mod = BigInt(MOD);

        while (power > 0) {
            if (power % 2n === 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            power = power / 2n;
        }

        return result;
    };

    const even = Math.ceil(n / 2);
    const odd = Math.floor(n / 2);

    const evenWays = chakraPower(5, even);
    const oddWays = chakraPower(4, odd);

    return Number((evenWays * oddWays) % BigInt(MOD));
};


Example 1:

Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
Example 2:

Input: n = 4
Output: 400
Example 3:

Input: n = 50
Output: 564908303
