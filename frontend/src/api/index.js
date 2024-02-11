import axios from "axios";
const all_data = {
  device: localStorage.getItem("device"),
  device_name: localStorage.getItem("device_name"),
  // lang: this.$i18n.locale,
  // container_height: this.$q.screen.height + '' + 'px',
  warehouse_name: "",
  warehouseOptions: [],
  langOptions: [
    { value: "en-US", label: "English" },
    { value: "zh-hans", label: "中文简体" },
    { value: "zh-hant", label: "中文繁體" },
    { value: "fr", label: "Français" },
    { value: "pt", label: "Português" },
    { value: "sp", label: "Español" },
    { value: "de", label: "Deutsch" },
    { value: "ru", label: "русский язык" },
    { value: "ar", label: "Arabic" },
    { value: "it", label: "Italiano" },
    { value: "ja", label: "日本語" },
  ],
  // title: this.$t('index.webtitle'),
  admin: false,
  admin_login: {
    name: "",
    password: "",
  },
  openid: "",
  isPwd: true,
  isPwd2: true,
  authin: "0",
  authid: false,
  left: false,
  drawerleft: false,
  tab: "",
  login: false,
  link: "",
  login_name: "",
  login_id: 0,
  check_code: "",
  register: false,
  registerform: {
    name: "",
    password1: "",
    password2: "",
  },
  needLogin: "",
  activeTab: "",
};
// const admin_login =  {
//   name: 'bachir',
//   password: 'add0'
// }
// admin login
const adminLogin = async (name, password) => {
  all_data.admin_login.name = name;
  all_data.admin_login.password = password;
  if (all_data.admin_login.name && all_data.admin_login.password) {
    sessionStorage.setItem("axios_check", "false");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8008/login/",
        all_data.admin_login
      );
      console.log(response);
      const {
        data: { data },
      } = response;
      console.log(data.openid);

      all_data.authin = "1";
      all_data.login = false;
      all_data.admin = false;
      all_data.openid = data.openid;
      all_data.login_name = data.name;
      all_data.login_id = data.user_id;
      localStorage.setItem("auth", "1");
      localStorage.setItem("openid", data.openid);
      localStorage.setItem("login_name", all_data.login_name);
      localStorage.setItem("login_id", all_data.login_id);
      localStorage.setItem("login_mode", "admin");
      // redirect("http://localhost:5173/");
      window.location.href = "http://localhost:5173/";
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("missing");
  }
};
// register
const register = async (name, ps1, cps) => {
  all_data.registerform.name = name;
  all_data.registerform.password1 = ps1;
  all_data.registerform.password2 = cps;
  sessionStorage.setItem("axios_check", "false");
  try {
    const response = await axios.post(
      "http://127.0.0.1:8008/register/",
      all_data.registerform
    );
    const {
      data: { data },
    } = response;
    console.log(data)
    all_data.register = false;
    all_data.openid = data.openid;
    all_data.login_name = all_data.registerform.name;
    all_data.login_id = data.user_id;
    all_data.authin = "1";
    localStorage.setItem("openid", data.openid);
    localStorage.setItem("login_name", all_data.registerform.name);
    localStorage.setItem("login_id", all_data.login_id);
    localStorage.setItem("auth", "1");
    all_data.registerform = {
      name: "",
      password1: "",
      password2: "",
    };
    window.location.href = "http://localhost:5173/";
  } catch (e) {
    console.log(e);
  }
};
export { adminLogin, register };
