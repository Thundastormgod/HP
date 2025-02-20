
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
  };

  return (
    <div className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Subscribe to the Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest stories and updates delivered to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:mx-auto sm:max-w-xl">
          <div className="sm:flex">
            <div className="min-w-0 flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="block w-full rounded-md px-4 py-3"
                required
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
