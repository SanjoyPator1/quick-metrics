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

const CardsShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content area of the card component.</p>
          </CardContent>
          <CardFooter className="border-t flex justify-between">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <div className="bg-muted/50 p-4 rounded-lg">
          <pre className="text-xs overflow-x-auto">
            {`<Card>
<CardHeader>
<CardTitle>Card Title</CardTitle>
<CardDescription>Card description</CardDescription>
</CardHeader>
<CardContent>
<p>Content here</p>
</CardContent>
<CardFooter className="border-t">
<Button>Action</Button>
</CardFooter>
</Card>`}
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <Card className="border-2 border-primary">
          <CardHeader className="bg-primary/10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Featured Card</CardTitle>
                <CardDescription>With accent styling</CardDescription>
              </div>
              <Badge>New</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p>Featured cards can be used to highlight important content.</p>
              <p className="text-sm text-muted-foreground">
                Use borders and background colors to create emphasis.
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/20">
            <Button className="w-full">Call to Action</Button>
          </CardFooter>
        </Card>

        <div>
          <h3 className="text-sm font-medium mb-2">Card Components:</h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>
              <code>Card</code> - Main container
            </li>
            <li>
              <code>CardHeader</code> - Title and description area
            </li>
            <li>
              <code>CardTitle</code> - Main heading
            </li>
            <li>
              <code>CardDescription</code> - Subheading text
            </li>
            <li>
              <code>CardContent</code> - Main content area
            </li>
            <li>
              <code>CardFooter</code> - Actions area
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsShowcase;
