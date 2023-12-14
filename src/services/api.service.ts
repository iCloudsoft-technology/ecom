import { environment } from "./apiEndPoint";
import httpCommonClients from "./http-common";

const getUserData = async () => {
  const apiUrl = process.env.REACT_APP_API + environment.login;

  return await httpCommonClients.httpClient.get<any>(apiUrl);
};

const userLogin = async (user: any) => {
  return await httpCommonClients.httpClient.post<any>(
    process.env.REACT_APP_API + environment.login,
    user
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
};

export default EcomDataService;
