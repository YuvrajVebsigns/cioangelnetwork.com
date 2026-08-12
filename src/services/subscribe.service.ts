import { API_ENDPOINTS } from '@/constants/api';
import { apiFetch } from '@/services/apiFetch';
import { buildWebsiteAuthHeaders, ensureWebsiteAuth, getWebsiteDomain } from '@/lib/website-auth';

type WebsiteSubscriptionResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

function getApiErrorStatus(error: unknown) {
  if (typeof error === 'object' && error !== null && 'statusCode' in error) {
    const statusCode = (error as { statusCode?: unknown }).statusCode;
    return typeof statusCode === 'number' ? statusCode : Number(statusCode);
  }

  if (typeof error === 'object' && error !== null && 'status' in error) {
    const status = (error as { status?: unknown }).status;
    return typeof status === 'number' ? status : Number(status);
  }

  return undefined;
}

async function postWebsiteSubscription(email: string) {
  const domain = getWebsiteDomain();
  const auth = await ensureWebsiteAuth(domain);

  const headers: Record<string, string> = {
    ...buildWebsiteAuthHeaders(auth),
    'x-website-domain': domain,
  };

  return apiFetch<WebsiteSubscriptionResponse>(API_ENDPOINTS.WEBSITE.SUBSCRIBES, {
    method: 'POST',
    requireAuth: false,
    headers,
    body: JSON.stringify({ email }),
  });
}

export async function submitWebsiteSubscription(email: string) {
  try {
    return await postWebsiteSubscription(email);
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    if (statusCode === 401) {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('websiteAuth');
      }

      return postWebsiteSubscription(email);
    }

    throw error;
  }
}
