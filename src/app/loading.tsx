import { Spinner } from "@/ui";

export default function loading() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Spinner />
    </main>
  );
}
