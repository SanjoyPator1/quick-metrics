import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";

const UIPatternsShowcase = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {/* Data Display Pattern */}
      <Card>
        <CardHeader>
          <CardTitle>Data Dashboard Pattern</CardTitle>
          <CardDescription>
            For visualizing metrics and analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Total Revenue
                    </p>
                    <p className="text-3xl font-bold mt-1">$24,500</p>
                    <p className="text-xs text-green-500 mt-1">
                      ↑ 12% from last month
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Total Products
                    </p>
                    <p className="text-3xl font-bold mt-1">156</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      5 new this month
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Average Order
                    </p>
                    <p className="text-3xl font-bold mt-1">$245</p>
                    <p className="text-xs text-red-500 mt-1">
                      ↓ 3% from last month
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-48 bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Chart Placeholder</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t flex justify-between">
          <p className="text-xs text-muted-foreground">
            Last updated: Today at 14:32
          </p>
          <Button variant="outline" size="sm">
            Export Data
          </Button>
        </CardFooter>
      </Card>

      {/* User Profile Pattern */}
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>User Profile Pattern</CardTitle>
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </div>
          <CardDescription>For displaying user information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl">JD</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Product Manager</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="ml-2">john.doe@example.com</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Member since:</span>
                  <span className="ml-2">January 15, 2023</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Plan:</span>
                  <span className="ml-2">Premium</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="default" className="ml-2">
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings Panel Pattern */}
      <Card>
        <CardHeader>
          <CardTitle>Settings Panel Pattern</CardTitle>
          <CardDescription>
            For configuring application preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications for important updates
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Dark Mode</h4>
                <p className="text-sm text-muted-foreground">
                  Enable dark theme for the interface
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Data Sharing</h4>
                <p className="text-sm text-muted-foreground">
                  Share anonymous usage data to help improve our services
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UIPatternsShowcase;
