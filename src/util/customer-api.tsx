import axios, { AxiosInstance } from 'axios';
import { CustomerData, NextPaymentData, OverduePaymentData } from '../types/customer';
import { PlanData, PlansData } from '../types/customer';

export type LoginSuccessResponse = {
  authToken: string;
  customerId: string;
};

export type CustomerSuccessResponse = {
  customer: CustomerData;
  nextPaymentAmount: NextPaymentData;
  overduePayment: Array<OverduePaymentData>;
};

export type PlansSuccessResponse = {
  plans: Array<PlansData>;
};

export type PlanSuccessResponse = {
  plan: PlanData;
};

class CustomerAPI {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        common: {
          'x-auth-token': `${localStorage.getItem('authToken')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    });
  }

  static login = async (username: string, password: string): Promise<LoginSuccessResponse> => {
    try {
      const url = `/api/v1/authentication`;
      const response = await axios.post(process.env.REACT_APP_API_URL + url, {
        username: username,
        password: password,
      });
      if (response.data.authToken && response.data.customerId) {
        return {
          authToken: response.data.authToken,
          customerId: response.data.customerId,
        };
      } else {
        throw new Error('Unexpected error. Please try again');
      }
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error. Please try again');
    }
  };

  customer = async (customerId: string): Promise<CustomerSuccessResponse> => {
    try {
      const url = `/api/v1/customers/${customerId}`;
      const response = await this.axiosInstance.get(process.env.REACT_APP_API_URL + url);
      if (response.data) {
        return {
          ...response.data,
        };
      } else {
        throw new Error('Unexpected error. Please try again');
      }
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error. Please try again');
    }
  };

  plans = async (authToken: string): Promise<PlansSuccessResponse> => {
    try {
      const url = `/api/v1/plans`;
      const response = await this.axiosInstance.get(process.env.REACT_APP_API_URL + url);
      if (response.data) {
        return {
          ...response.data,
        };
      } else {
        throw new Error('Unexpected error. Please try again');
      }
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error. Please try again');
    }
  };

  plan = async (planId: string): Promise<PlanSuccessResponse> => {
    try {
      const url = `/api/v1/plans/${planId}`;
      const response = await this.axiosInstance.get(process.env.REACT_APP_API_URL + url);
      if (response.data) {
        return {
          ...response.data,
        };
      } else {
        throw new Error('Unexpected error. Please try again');
      }
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error. Please try again');
    }
  };

  profile = async (customerId: string, formData: any): Promise<CustomerSuccessResponse> => {
    try {
      const url = `/api/v1/customers/${customerId}`;
      const response = await this.axiosInstance.put(process.env.REACT_APP_API_URL + url, formData);
      if (response.data) {
        return {
          ...response.data,
        };
      } else {
        throw new Error('Unexpected error. Please try again');
      }
    } catch (error) {
      if (error.isAxiosError) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error. Please try again');
    }
  };
}

export default CustomerAPI;
