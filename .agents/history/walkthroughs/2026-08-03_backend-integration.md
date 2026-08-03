# Walkthrough: Backend Integration

## What was changed

Updated the Franchise Enquiry form in `src/pages/join_us.jsx` to submit data to the new local backend instead of `formsubmit.co`.

Key changes:

- Removed the `action` and `method` attributes from the `<form>` tag.
- Removed the `_subject` and `_honey` hidden inputs specific to `formsubmit.co`.
- Implemented a `handleSubmit` function in React using `fetch` to send a POST request to `http://localhost:3001/api/submit-franchise-enquiry`.
- Added loading state handling (disabling the submit button while sending).
- Added success and error message banners to give the user immediate feedback.
- Extracted the hardcoded API URL into a `VITE_API_URL` environment variable for easier deployment.

## Why

To integrate the frontend with the newly created backend, keeping the user on the same page and providing a smoother user experience without third-party redirects.

## How to test it

1. Ensure the new backend server is running on `http://localhost:3001`.
2. Start the React development server.
3. Navigate to the Franchise page in your browser.
4. Fill out the form with valid data and click "Submit request".
5. Verify that the button shows a loading state and then displays a success banner.
6. Check the backend database or the backend's `/admin/enquiries` route to verify the data was received.
