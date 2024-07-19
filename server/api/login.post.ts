let token = ''
for (let i = 0; i <= 8; i++) {
    token += Math.floor(Math.random() * 10).toString()
}
export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event)
    if (email === "admin@qq.com" && password === '123456') {
        event.res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly`)
        return { code: 200, msg: '登陆成功', token }
    }
})