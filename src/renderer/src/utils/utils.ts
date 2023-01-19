export const ObjectTool = {
  byteLength: (str: string): number => {
    // returns the byte length of an utf8 string
    let s = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
      const code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;
      else if (code > 0x7ff && code <= 0xffff) s += 2;
      if (code >= 0xdc00 && code <= 0xdfff) i--;
    }
    return s;
  },
  cleanArray: <T>(actual: Array<T>): Array<T> => {
    const newArray: T[] = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  },
  /**
   * Merges two objects, giving the last one precedence
   * @param {Object} target
   * @param {(Object|Array)} source
   * @returns {Object}
   */
  objectMerge: (target: object, source: object): object => {
    if (typeof target !== "object") {
      target = {};
    }
    if (Array.isArray(source)) {
      return source.slice();
    }
    Object.keys(source).forEach((property) => {
      const sourceProperty = source[property];
      if (typeof sourceProperty === "object") {
        target[property] = ObjectTool.objectMerge(target[property], sourceProperty);
      } else {
        target[property] = sourceProperty;
      }
    });
    return target;
  },
}

export const Validate = {
  /**
   * 判断是否外部链接
   * @param {string} path
   * @returns {Boolean}
   */
  isExternal: (path: string): boolean => {
    return /^(https?:|mailto:|tel:)/.test(path);
  },
  validURL: (url: string): boolean => {
    const reg =
      /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
  },
  validLowerCase: (str: string): boolean => {
    const reg = /^[a-z]+$/;
    return reg.test(str);
  },
  validUpperCase: (str: string): boolean => {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
  },
  validEmail: (email: string): boolean => {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  },
  validMobile: (mobile: string): boolean => {
    const reg =
      /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    return reg.test(mobile);
  },
  isString: (str: unknown): boolean => {
    if (typeof str === "string" || str instanceof String) {
      return true;
    }
    return false;
  },
  isArray: (arg: unknown): boolean => {
    if (typeof Array.isArray === "undefined") {
      return Object.prototype.toString.call(arg) === "[object Array]";
    }
    return Array.isArray(arg);
  },
}

/**
 * 中划线字符驼峰
 * @param {*} str 要转换的字符串
 * @returns 返回值
 */
export const toHump = (str: string): string => {
  if (!str) return str
  return str
    .replace(/-(\w)/g, function (all, letter) {
      return letter.toUpperCase()
    })
    .replace(/(\s|^)[a-z]/g, function (char) {
      return char.toUpperCase()
    })
}
