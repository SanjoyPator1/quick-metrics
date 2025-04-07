import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const FeedbackShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Success/Error States */}
      <Card>
        <CardHeader className="bg-green-500/10 border-b border-green-500/20">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <Check className="h-4 w-4" />
            </div>
            <CardTitle className="text-green-700 dark:text-green-300">
              Success State
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm">
            Your report has been successfully generated.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-destructive/10 border-b border-destructive/20">
          <div className="flex items-center gap-2">
            <div className="bg-destructive text-white p-1 rounded-full">
              <X className="h-4 w-4" />
            </div>
            <CardTitle className="text-destructive">Error State</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-sm">
            There was an error processing your CSV file. Please check the format
            and try again.
          </p>
        </CardContent>
      </Card>

      {/* Alert Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Info Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 dark:bg-blue-900/30">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  New version available.{" "}
                  <a href="#" className="font-medium underline">
                    Update now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Warning Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 dark:bg-yellow-900/30">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Your subscription will expire in 3 days.{" "}
                  <a href="#" className="font-medium underline">
                    Renew now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicators */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Progress Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">File Upload (25%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Processing (60%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Completed (100%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackShowcase;
