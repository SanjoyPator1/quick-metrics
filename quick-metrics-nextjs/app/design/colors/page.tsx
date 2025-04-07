"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Copy, Sun, Moon } from "lucide-react";
import { toast } from "sonner";

const ColorsPage = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied successfully", {
      description: "Item has been copied successfully",
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  // Color palettes from your CSS variables
  const colorGroups = [
    {
      title: "Core Colors",
      colors: [
        {
          name: "background",
          label: "Background",
          description: "Main background color",
        },
        {
          name: "foreground",
          label: "Foreground",
          description: "Main text color",
        },
      ],
    },
    {
      title: "UI Component Colors",
      colors: [
        {
          name: "primary",
          label: "Primary",
          description: "Primary action and highlight color",
        },
        {
          name: "primary-foreground",
          label: "Primary Foreground",
          description: "Text on primary background",
        },
        {
          name: "secondary",
          label: "Secondary",
          description: "Secondary and subtle UI elements",
        },
        {
          name: "secondary-foreground",
          label: "Secondary Foreground",
          description: "Text on secondary background",
        },
        { name: "muted", label: "Muted", description: "Subdued backgrounds" },
        {
          name: "muted-foreground",
          label: "Muted Foreground",
          description: "Subdued text",
        },
        { name: "accent", label: "Accent", description: "Accent UI elements" },
        {
          name: "accent-foreground",
          label: "Accent Foreground",
          description: "Text on accent background",
        },
      ],
    },
    {
      title: "State Colors",
      colors: [
        {
          name: "destructive",
          label: "Destructive",
          description: "Error states and destructive actions",
        },
        { name: "border", label: "Border", description: "UI element borders" },
        { name: "input", label: "Input", description: "Form input borders" },
        { name: "ring", label: "Ring", description: "Focus rings" },
      ],
    },
    {
      title: "Chart Colors",
      colors: [
        {
          name: "chart-1",
          label: "Chart 1",
          description: "Primary chart color",
        },
        {
          name: "chart-2",
          label: "Chart 2",
          description: "Secondary chart color",
        },
        {
          name: "chart-3",
          label: "Chart 3",
          description: "Tertiary chart color",
        },
        {
          name: "chart-4",
          label: "Chart 4",
          description: "Quaternary chart color",
        },
        {
          name: "chart-5",
          label: "Chart 5",
          description: "Quinary chart color",
        },
      ],
    },
  ];

  return (
    <div
      className={`container mx-auto py-8 space-y-8 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/design")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold">Color System</h1>
        </div>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground mb-8">
          Our color system is designed to be accessible and consistent across
          all devices and screens. Toggle between light and dark mode to see how
          colors adapt.
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h2 className="text-xl font-semibold mt-6">{group.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.colors.map((color) => (
              <Card key={color.name} className="overflow-hidden">
                <div className={`h-24 bg-${color.name}`}></div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    {color.label}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(`bg-${color.name}`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </CardTitle>
                  <CardDescription>{color.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-1">
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      bg-{color.name}
                    </code>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      text-{color.name}
                    </code>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      border-{color.name}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Color Variables</CardTitle>
          <CardDescription>CSS variables for color theming</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our color system uses CSS variables for easy theming. The colors
            automatically adjust for light and dark mode.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-2 border-b">CSS Variable</th>
                  <th className="text-left pb-2 border-b">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border-b">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      --color-primary
                    </code>
                  </td>
                  <td className="py-2 border-b">
                    Primary buttons, links, and accents
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border-b">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      --color-background
                    </code>
                  </td>
                  <td className="py-2 border-b">Page backgrounds</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      --color-foreground
                    </code>
                  </td>
                  <td className="py-2 border-b">Main text color</td>
                </tr>
                <tr>
                  <td className="py-2 border-b">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      --color-chart-*
                    </code>
                  </td>
                  <td className="py-2 border-b">Data visualization colors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>Color contrast guidelines</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Our color system is designed to meet WCAG 2.1 AA standards for color
            contrast. All text colors maintain a minimum contrast ratio of 4.5:1
            with their backgrounds.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded-md">
              Primary with text (AA Compliant)
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md">
              Secondary with text (AA Compliant)
            </div>
            <div className="p-4 bg-accent text-accent-foreground rounded-md">
              Accent with text (AA Compliant)
            </div>
            <div className="p-4 bg-destructive text-white rounded-md">
              Destructive with white text (AA Compliant)
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorsPage;
