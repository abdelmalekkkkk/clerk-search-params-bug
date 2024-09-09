import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

type Search = {
  filter: string;
};

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search: Record<string, unknown>): Search => {
    return {
      filter: (search.filter as string) || "",
    };
  },
});

function Index() {
  const navigate = useNavigate({ from: Route.fullPath });
  const { filter } = Route.useSearch();

  return (
    <div className="p-2">
      <input
        value={filter}
        type="text"
        onChange={(e) => {
          navigate({
            search: {
              filter: e.target.value,
            },
          });
        }}
      />
      <p>Type something with spaces, then refresh.</p>
      <p>
        You will see that the spaces with +, that's because all instances of %20
        in the URL were replaced with +
      </p>
      <p>Now remove the ClerkProvider and try again.</p>
    </div>
  );
}
