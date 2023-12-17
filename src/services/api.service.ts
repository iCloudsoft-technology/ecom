import { environment } from "./apiEndPoint";
import httpCommonClients from "./http-common";

const getUserData = async () => {
  const apiUrl = process.env.REACT_APP_API + environment.login;

  return await httpCommonClients.httpClient.get<any>(apiUrl);
};

const userLogin = async (user: { username: string; password: string }) => {
  return await httpCommonClients.httpClient.post<any>(
    process.env.REACT_APP_API + environment.login,
    user
  );
};

const userSignUp = async (user: {
  fullName?: string;
  email?: string;
  phonenumber?: string;
  password?: string;
}) => {
  return await httpCommonClients.httpClient.post<any>(
    process.env.REACT_APP_API + environment.signup,
    user
  );
};

const allUsers = async () => {
  return await httpCommonClients.httpClient.get<any>(
    process.env.REACT_APP_API + environment.allUsers
  );
};

// const updateBookingRequest = async (updateBooking: IUpdateBooking) => {
//   return await httpCommonClients.httpClient.put<IUpdateBooking>(
//     process.env.REACT_APP_APIURLBooking +
//       environment.apiEndpoints.updateBookingRequest,
//     updateBooking
//   );
// };

const EcomDataService = {
  getUserData,
  userLogin,
  userSignUp,
  allUsers,
};

export default EcomDataService;
