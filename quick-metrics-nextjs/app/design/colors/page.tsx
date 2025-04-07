import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ColorsPage = () => {
  return (
    <div className="space-y-5">
      <h1>Colors Page</h1>
      <div className="flex flex-row flex-wrap gap-3">
        <Card className="width-fit">
          <CardHeader>
            <CardTitle>Primary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex-shrink-0 w-[100px] h-[100px] bg-primary" />
          </CardContent>
        </Card>
        <Card className="width-fit">
          <CardHeader>
            <CardTitle>Secondary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex-shrink-0 w-[100px] h-[100px] bg-secondary" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ColorsPage;
