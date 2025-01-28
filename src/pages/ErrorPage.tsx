
const ErrorPage = ({ error }: { error: Error }) => (
  <section>
    <h1>Oops! Something went wrong.</h1>
    <p>{error.message}</p>
    <a href="/">Go back to the homepage</a>
  </section>
);

export default ErrorPage;
