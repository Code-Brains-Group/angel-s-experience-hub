/**
 * Web3Forms Utility
 */

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export interface Web3FormsResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Submits a FormData object to Web3Forms API.
 * @param formData The FormData object containing form fields.
 * @returns A promise that resolves to the API response.
 */
export const submitToWeb3Forms = async (formData: FormData): Promise<{ status: number; data: Web3FormsResponse }> => {
  if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
    console.error("Web3Forms Error: Access Key is missing. Please set VITE_WEB3FORMS_KEY in your .env file.");
    throw new Error("Web3Forms Configuration Missing");
  }

  // Add the access key to the form data if it's not already there
  if (!formData.has("access_key")) {
    formData.append("access_key", WEB3FORMS_KEY);
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    return {
      status: response.status,
      data: data as Web3FormsResponse,
    };
  } catch (error) {
    console.error("Web3Forms Submit Error:", error);
    throw error;
  }
};
