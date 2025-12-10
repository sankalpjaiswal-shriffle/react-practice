const getCookie = () => {
  let cookieObj = {};

  document.cookie.split("; ").forEach((item) => {
    const ele = item.split("=");
    cookieObj[ele[0]] = ele[1];
  });
  return cookieObj;
};

const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

export { getCookie, setCookie };
