"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowLeft, Copy } from "lucide-react";
import { toast } from "sonner";

const TypographyPage = () => {
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied successfully", {
      description: "Item has been copied successfully",
    });
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/design")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">Typography</h1>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground mb-8">
          Typography is a core component of our design system. We use the Geist
          font family for both text and monospace content, with carefully
          defined scales for headings, body text, and special text classes.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Headings Section */}
        <Card>
          <CardHeader>
            <CardTitle>Headings</CardTitle>
            <CardDescription>
              Used for section titles and content hierarchy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <div
                key={level}
                className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b"
              >
                <div className="w-32 shrink-0">
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    h{level}
                  </code>
                </div>
                <div className="flex-grow">
                  {React.createElement(
                    `h${level}`,
                    {},
                    `Heading ${level}: The quick brown fox jumps over the lazy dog`
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`<h${level}>Heading ${level}</h${level}>`)
                  }
                  className="shrink-0"
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Display Text */}
        <Card>
          <CardHeader>
            <CardTitle>Display Text</CardTitle>
            <CardDescription>
              Used for hero sections and major feature highlights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {["large", "medium", "small"].map((size) => (
              <div
                key={size}
                className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b"
              >
                <div className="w-32 shrink-0">
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    display-{size}
                  </code>
                </div>
                <div className="flex-grow">
                  <div className={`display-${size}`}>Display {size}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(
                      `<div class="display-${size}">Display ${size}</div>`
                    )
                  }
                  className="shrink-0"
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Body Text */}
        <Card>
          <CardHeader>
            <CardTitle>Body Text</CardTitle>
            <CardDescription>
              Used for paragraphs and general content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {["large", "medium", "small"].map((size) => (
              <div
                key={size}
                className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b"
              >
                <div className="w-32 shrink-0">
                  <code className="bg-muted px-2 py-1 rounded text-sm">
                    body-{size}
                  </code>
                </div>
                <div className="flex-grow">
                  <p className={`body-${size}`}>
                    Body {size}: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ac lacinia neque. Fusce convallis,
                    purus at placerat luctus.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(`<p class="body-${size}">Body text</p>`)
                  }
                  className="shrink-0"
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Monospace Text */}
        <Card>
          <CardHeader>
            <CardTitle>Monospace Text</CardTitle>
            <CardDescription>
              Used for code snippets and technical content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {["normal", "sm", "xs"].map((size) => {
              const className = size === "normal" ? "mono" : `mono-${size}`;
              return (
                <div
                  key={size}
                  className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b"
                >
                  <div className="w-32 shrink-0">
                    <code className="bg-muted px-2 py-1 rounded text-sm">
                      {className}
                    </code>
                  </div>
                  <div className="flex-grow">
                    <p className={className}>
                      console.log(&quot;Hello, Quick Metrics!&quot;);
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(`<p class="${className}">Code here</p>`)
                    }
                    className="shrink-0"
                  >
                    <Copy className="h-3 w-3 mr-1" /> Copy
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Font Variables */}
        <Card>
          <CardHeader>
            <CardTitle>Font Variables</CardTitle>
            <CardDescription>CSS variables for font families</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left pb-2 border-b">Variable</th>
                    <th className="text-left pb-2 border-b">Value</th>
                    <th className="text-left pb-2 border-b">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border-b">
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        --font-geist-sans
                      </code>
                    </td>
                    <td className="py-2 border-b">Geist</td>
                    <td className="py-2 border-b">Primary text</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        --font-geist-mono
                      </code>
                    </td>
                    <td className="py-2 border-b">Geist Mono</td>
                    <td className="py-2 border-b">Code blocks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TypographyPage;
