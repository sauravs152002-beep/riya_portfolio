import { useRouteError } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{ padding: 20, color: 'red' }}>
      <h1>Unhandled Error</h1>
      <pre>{error instanceof Error ? error.message : String(error)}</pre>
      <pre>{error instanceof Error ? error.stack : ''}</pre>
    </div>
  );
}