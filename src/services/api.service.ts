import { environment } from "./apiEndPoint";
import httpCommonClients from "./http-common";

const getUserData = async () => {
  const apiUrl = process.env.REACT_APP_API + environment.getUser;

  return await httpCommonClients.httpClient.get<any>(apiUrl);
};

// const createBookingRequest = async (createBooking: ICreateBooking) => {
//   return await httpCommonClients.httpClient.post<ICreateBooking>(
//     process.env.REACT_APP_APIURLBooking +
//       environment.apiEndpoints.createBookingRequest,
//     createBooking
//   );
// };

// const updateBookingRequest = async (updateBooking: IUpdateBooking) => {
//   return await httpCommonClients.httpClient.put<IUpdateBooking>(
//     process.env.REACT_APP_APIURLBooking +
//       environment.apiEndpoints.updateBookingRequest,
//     updateBooking
//   );
// };

const EcomDataService = {
  getUserData,
};

export default EcomDataService;
