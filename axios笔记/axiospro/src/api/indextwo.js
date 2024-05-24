const mytoken='token'
// 存贮token
export function savatoken(token) {
    localStorage.setItem(mytoken,token)
}
// 读取token
export function gettoken() {
    localStorage.getItem(mytoken)
    const b = localStorage.getItem(mytoken)
    console.log(b);
    // 要return才能得到
    return b;
}
// 删除token
export function removetoken() {
    localStorage.removeItem(mytoken)
}
// 我们都知道在node的代码中使用require加载模块，在模块中使用exports或者module.exports导出接口，require、module、exports都是node的全局对象，我们不需要在模块中定义它们就可以直接使用，不过实际它们都不是全局的，而是模块对象，node的文档中有说明，此外还有__dirname和__filename这两个变量也是模块对象，它们的具体作用请参见文档