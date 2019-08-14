const axios = require("axios");
const BASE_URL = "https://medirep-api.herokuapp.com/api";
const moment = require("moment");

const getMeds = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/meds/app/daily/${user_id}`);
  return data;
};

const getDailyMeds = async user_id => {
  const { data } = await axios.get(`${BASE_URL}/meds/app/daily/${user_id}`);

  return data;
};

const getUser = async user_id => {
  const {
    data: { user }
  } = await axios.get(`${BASE_URL}/users/${user_id}`);
  return user;
};

const getEvents = async user_id => {
  const {
    data: { events }
  } = await axios.get(`${BASE_URL}/events/${user_id}`);
  return events;
};

const getQuiz = async user_id => {
  const {
    data: { quizzes }
  } = await axios.get(`${BASE_URL}/quiz/app/${user_id}`);
  return quizzes;
};

const get4DigitNumber = async user_id => {
  const {
    data: { code }
  } = await axios.get(`${BASE_URL}/codes/requestnew/${user_id}`);
  return code.code;
};

const timeFormat = time => {
  const todaysDate = moment(Date.now()).format("YYYY-MM-DD");

  return moment(new Date(`${todaysDate} ${time}`)).utc();
};

const postNewMedication = async (user_id, type, due) => {
  const obj = { type, due: timeFormat(due) };

  return axios
    .post(`${BASE_URL}/meds/app/all/${user_id}`, obj)
    .then(({ data }) => {
      return data;
    });
};

const patchMedication = async (med_id, obj) => {
  const { medication } = await axios.patch(
    `${BASE_URL}/meds/app/all/${med_id}`,
    {
      ...obj
    }
  );
  return medication;
};

const signUp = async (firstName, surname) => {
  const newUser = { first_name: firstName, surname: surname };
  const { data } = await axios.post(`${BASE_URL}/users`, {
    ...newUser
  });
  return data;
};

module.exports = {
  getMeds,
  getDailyMeds,
  getUser,
  getEvents,
  getQuiz,
  get4DigitNumber,
  postNewMedication,
  patchMedication,
  signUp
};
