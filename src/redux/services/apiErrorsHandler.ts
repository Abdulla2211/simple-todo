import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

function apiErrorsHandler(error: FetchBaseQueryError | SerializedError, commonMessage: string) {
  console.error(error);
  const { status, data } = (error as FetchBaseQueryError) || {};
  if (status && status === 403) {
    if (typeof data === 'object' && data !== null && 'error' in data) {
      const { data } = error as { data?: { error?: string } };

      if (data && typeof data.error === 'string') {
        toast.error(data.error);
        return;
      }
    }
  }

  toast.error(`Произошла неизвестная техническая ошибка. (${commonMessage})`);
}

export default apiErrorsHandler;
