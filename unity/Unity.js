/**
 * 统一返回数据的工具类
 */

class Unity {
  /**
   * 统一返回参数
   * @param {object} data - 返回对象;
   * @param {number} code - 状态码,默认为200-成功;
   * @param {number} status - 成功为1, 失败为0,默认为1;
   */
  send(data, code = 200, status = 1, msg = 'success') {
    if (status) {
      return {
        data: data,
        code: code,
        msg: msg
      };
    } else {
      return {
        code: code,
        data: [],
        msg: data
      };
    }
  }
}

module.exports = new Unity();
