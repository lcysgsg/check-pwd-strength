// type IPasswordStrengthLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 根据给定密码的长度、大小写字母、数字和特殊字符计算密码的强度级别
 * 如果密码是长度小于8个字符，强度级别为1。
 * 字符的类型和数量决定了强度级别：
 * 包含数字 +1,
 * 包含特殊字符 +1,
 * 包含小写字母 +1,
 * 包含大写字母 +1,
 * 3级以上时，长度8以上，+1,
 * 3级以上时，长度12以上 +1。
 *
 * @param {string} pwd - The password to calculate the strength level of.
 * @return {IPasswordStrengthLevel} The calculated strength level of the password.
 */
export function checkPwdStrength(pwd) {
    let level = 0
    if (!pwd) return level

    if (pwd.length < 8) {
        return 1
    }

    if (/\d/.test(pwd)) level += 1 // 有数字
    if (/[a-z]/.test(pwd)) level += 1 // 有字母小写
    if (/[A-Z]/.test(pwd)) level += 1 // 有字母大写
    if (/\W/.test(pwd)) level += 1 // 有特殊字符
    if (level >= 3) {
        if (pwd.length >= 8) level += 1 // 够长
        if (pwd.length >= 12) level += 1 // 真的长
    }

    return level
}
