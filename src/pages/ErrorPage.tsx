interface ErrorPageProps {
  error?: Error; // Make the error prop optional
}

const ErrorPage = ({ error }: ErrorPageProps) => (
  <section>
    <h1>Oops! Something went wrong.</h1>
    <p>{error?.message || "An unexpected error occurred."}</p>
    <a href="/">Go back to the homepage</a>
  </section>
);

export default ErrorPage;

