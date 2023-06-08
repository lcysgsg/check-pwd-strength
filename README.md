-   根据给定密码的长度、大小写字母、数字和特殊字符计算密码的强度级别
-   如果密码是长度小于 8 个字符，强度级别为 1。
-   字符的类型和数量决定了强度级别：
-   包含数字 +1,
-   包含特殊字符 +1,
-   包含小写字母 +1,
-   包含大写字母 +1,
-   3 级以上时，长度 8 以上，+1,
-   3 级以上时，长度 12 以上 +1。

## Usage

```javascript
import checkPwdStrength from "check-pwd-strength"

checkPwdStrength('1234567890') // 1
checkPwdStrength('1234@1234') // 2
checkPwdStrength('a@4') // 3
checkPwdStrength('abcd@1234') // 4
```
