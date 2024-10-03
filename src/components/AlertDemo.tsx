import { FaRegCheckCircle } from "react-icons/fa";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <Alert className="bg-emerald-900 h-24 text-white">
      <AlertTitle className="flex items-center">
        <FaRegCheckCircle className="h-5 w-5 " />
        <p className="ml-2 text-xl">Message Sent!</p>
      </AlertTitle>
      <AlertDescription className="mt-3">
        {`Thanks for completing the form. We'll be in touch soon!`}
      </AlertDescription>
    </Alert>
  );
}
