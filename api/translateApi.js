import axiosTranslate from "./axiosTranslate";

const translateApi = {
  getTranslationByApp(appCode, lang) {
    const url = `/g-trans/translate/getlist?appCode=${appCode}&languageCode=${lang}`;
    return axiosTranslate.get(url);
  },
  getTranslation(translationCode, lang) {
    const url = `/g-trans/translate/get?translationCode=${translationCode}&languageCode=${lang}`;
    return axiosTranslate.get(url);
  },
};

export default translateApi;
