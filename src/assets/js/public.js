// export default class Public {


  function tools(url, cb) {
    fetch(url).then(res => {
      res.json().then(data => {
        cb(data)
      })
    })
  }
  // function
  function $(str) {
    if (str.charAt(0) == "#") {
      return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
      return document.getElementsByClassName(str.substring(1));
    } else if (str.charAt(0) == "*") {
      return document.getElementsByName(str.substring(1));
    } else {
      return document.getElementsByTagName(str);
    }
  }
// }
export {tools,$}
