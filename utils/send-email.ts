import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";
  
  return fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        // If the response wasn't OK, throw the error
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err.error || 'Failed to send email');
    });
}