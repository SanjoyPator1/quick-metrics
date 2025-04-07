"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

const DesignPage = () => {
  const router = useRouter();

  return (
    <div className="space-y-5">
      <h1>Design page</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>{" "}
            <CardDescription>See your Typography here</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant={"link"}
              onClick={() => router.push("/design/typography")}
            >
              Go to Typography
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>{" "}
            <CardDescription>See your Colors here</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant={"link"}
              onClick={() => router.push("/design/colors")}
            >
              Go to Colors
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesignPage;
