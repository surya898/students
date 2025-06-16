import base_url from "./base_url";
import axios from "axios"; 


const getToken = () => sessionStorage.getItem("token");
export const registerApi=async(data)=>{
  return await axios.post(`${base_url}/user/`,data)
}

export const loginApi=async(data)=>{
  return await axios.post(`${base_url}/token`,data)
}

export const getVideoTutorialsApi = async () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`,  
    },
  };

  try {
    const response = await axios.get(`${base_url}/video_tutorials/`, options);
    return response;
  } catch (error) {
    console.error("Error fetching video tutorials:", error);
    throw error;  
  }
};


export const getMathVideoTutorialsApi = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${sessionStorage.getItem('token')}`,  
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/mathvideo_tutorials/`, options);
      return response;
    } catch (error) {
      console.error("Error fetching video tutorials:", error);
      throw error;  
    }
  };


  export const getMalVideoTutorialsApi = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${sessionStorage.getItem('token')}`,  
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/malvideo_tutorials/`, options);
      return response;
    } catch (error) {
      console.error("Error fetching video tutorials:", error);
      throw error;  
    }
  };

  export const getCsVideoTutorialsApi = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${sessionStorage.getItem('token')}`,  
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/csvideo_tutorials/`, options);
      return response;
    } catch (error) {
      console.error("Error fetching video tutorials:", error);
      throw error;  
    }
  };

  export const getQuestionPapersApi = async (subject) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${sessionStorage.getItem('token')}`,  
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/question_papers/?subject=${subject}`, options);
      return response.data;
    } catch (error) {
      console.error("Error fetching question papers:", error);
      throw error;
    }
  };

  export const getQuizzesApi = async () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`,
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/quizzes/`, options);
      return response.data;
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      throw error;
    }
  };

  export const getExamApi = async () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`,
      },
    };
  
    try {
      const response = await axios.get(`${base_url}/exam/`, options);
      return response.data;
    } catch (error) {
      console.error("Error fetching exams:", error);
      throw error;
    }
  };

