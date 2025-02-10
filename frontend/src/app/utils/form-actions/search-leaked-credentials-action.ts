import { IFormInitialState } from "@/app/types";
import extractDomain from '@/lib/utils/extractDomain';

async function searchLeakedCredentialsAction(
  _: IFormInitialState,
  formData: FormData
): Promise<IFormInitialState> {
  const domain = formData.get('domain')?.toString().trim() as string;

  if (!domain) return { error: "Please enter a domain" };

  const extractedDomain = extractDomain(domain);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search/leaked-credentials?domain=${encodeURIComponent(extractedDomain)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await response.json();

    if (!response.ok || !!result?.error) {
      const errorMessage = result?.message
      throw new Error(Array.isArray(errorMessage) ? errorMessage?.at(0) : errorMessage);
    }

    return { data: result, error: '' };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : 'An unknown error occurred',
    };
  }
};

export default searchLeakedCredentialsAction;
