import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <div className="w-full p-6 flex justify-center">
      <div className="w-full max-w-lg">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>This Is User Page!</AlertTitle>
          <AlertDescription>
            Hello, World^^
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}