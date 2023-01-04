import axios from 'axios';

export const SendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const datas = { fullName, email, message };
    const res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
};
