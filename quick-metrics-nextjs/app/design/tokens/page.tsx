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

const TokensPage = () => {
  const router = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied successfully", {
      description: "Item has been copied successfully",
    });
  };

  // Spacing tokens
  const spacingTokens = [
    { name: "px", value: "1px", description: "1 pixel" },
    { name: "0.5", value: "0.125rem", description: "2px" },
    { name: "1", value: "0.25rem", description: "4px" },
    { name: "1.5", value: "0.375rem", description: "6px" },
    { name: "2", value: "0.5rem", description: "8px" },
    { name: "2.5", value: "0.625rem", description: "10px" },
    { name: "3", value: "0.75rem", description: "12px" },
    { name: "3.5", value: "0.875rem", description: "14px" },
    { name: "4", value: "1rem", description: "16px" },
    { name: "5", value: "1.25rem", description: "20px" },
    { name: "6", value: "1.5rem", description: "24px" },
    { name: "8", value: "2rem", description: "32px" },
    { name: "10", value: "2.5rem", description: "40px" },
    { name: "12", value: "3rem", description: "48px" },
    { name: "16", value: "4rem", description: "64px" },
    { name: "20", value: "5rem", description: "80px" },
    { name: "24", value: "6rem", description: "96px" },
  ];

  // Border radius tokens
  const radiusTokens = [
    {
      name: "radius-sm",
      value: "calc(var(--radius) - 4px)",
      description: "Small radius",
    },
    {
      name: "radius-md",
      value: "calc(var(--radius) - 2px)",
      description: "Medium radius",
    },
    {
      name: "radius-lg",
      value: "var(--radius)",
      description: "Large radius (default)",
    },
    {
      name: "radius-xl",
      value: "calc(var(--radius) + 4px)",
      description: "Extra large radius",
    },
  ];

  // Font size tokens
  const fontSizeTokens = [
    { name: "xs", value: "0.75rem", description: "12px" },
    { name: "sm", value: "0.875rem", description: "14px" },
    { name: "base", value: "1rem", description: "16px" },
    { name: "lg", value: "1.125rem", description: "18px" },
    { name: "xl", value: "1.25rem", description: "20px" },
    { name: "2xl", value: "1.5rem", description: "24px" },
    { name: "3xl", value: "1.875rem", description: "30px" },
    { name: "4xl", value: "2.25rem", description: "36px" },
    { name: "5xl", value: "3rem", description: "48px" },
  ];

  // Shadow tokens
  const shadowTokens = [
    { name: "shadow-xs", description: "Extra small shadow" },
    { name: "shadow-sm", description: "Small shadow" },
    { name: "shadow", description: "Default shadow" },
    { name: "shadow-md", description: "Medium shadow" },
    { name: "shadow-lg", description: "Large shadow" },
    { name: "shadow-xl", description: "Extra large shadow" },
  ];

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
        <h1 className="text-3xl font-bold">Design Tokens</h1>
      </div>

      <div className="max-w-3xl">
        <p className="text-muted-foreground mb-8">
          Design tokens are the visual design atoms of the design system —
          specifically, they are named entities that store visual design
          attributes. We use them in place of hard-coded values to ensure
          flexibility and consistency across all our product experiences.
        </p>
      </div>

      {/* Spacing Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Spacing Tokens</CardTitle>
          <CardDescription>
            Consistent spacing values for margin and padding
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-4 border-b">Token</th>
                    <th className="text-left py-2 px-4 border-b">Value</th>
                    <th className="text-left py-2 px-4 border-b">
                      Description
                    </th>
                    <th className="text-left py-2 px-4 border-b">Visual</th>
                    <th className="text-left py-2 px-4 border-b">Copy</th>
                  </tr>
                </thead>
                <tbody>
                  {spacingTokens.map((token, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-muted/50" : ""}
                    >
                      <td className="py-2 px-4 border-b">
                        <code className="text-sm bg-muted p-1 rounded">
                          {token.name}
                        </code>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <code className="text-sm">{token.value}</code>
                      </td>
                      <td className="py-2 px-4 border-b text-sm">
                        {token.description}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <div
                          className="bg-primary/20 border border-primary/40"
                          style={{
                            width: token.value,
                            height: token.value,
                            minWidth: "8px",
                            minHeight: "8px",
                          }}
                        ></div>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`p-${token.name}`)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-md">
              <p className="text-sm font-medium mb-2">Usage:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs mb-1">Padding:</p>
                  <code className="text-xs block mb-1">p-4 (all sides)</code>
                  <code className="text-xs block mb-1">
                    px-4 (left & right)
                  </code>
                  <code className="text-xs block mb-1">
                    py-4 (top & bottom)
                  </code>
                  <code className="text-xs block mb-1">pt-4 (top only)</code>
                </div>
                <div>
                  <p className="text-xs mb-1">Margin:</p>
                  <code className="text-xs block mb-1">m-4 (all sides)</code>
                  <code className="text-xs block mb-1">
                    mx-4 (left & right)
                  </code>
                  <code className="text-xs block mb-1">
                    my-4 (top & bottom)
                  </code>
                  <code className="text-xs block mb-1">mt-4 (top only)</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Border Radius Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Border Radius Tokens</CardTitle>
          <CardDescription>
            Consistent corner rounding for UI elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {radiusTokens.map((token, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 bg-primary/20 border border-primary/40 mb-4"
                  style={{ borderRadius: `var(--${token.name})` }}
                ></div>
                <code className="text-sm bg-muted p-1 rounded mb-1">
                  --{token.name}
                </code>
                <p className="text-xs text-center text-muted-foreground">
                  {token.description}
                </p>
                <p className="text-xs mt-2">{token.value}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() =>
                    copyToClipboard(
                      `rounded-${token.name.replace("radius-", "")}`
                    )
                  }
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Font Size Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Font Size Tokens</CardTitle>
          <CardDescription>Typography sizing scale</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fontSizeTokens.map((token, index) => (
              <div
                key={index}
                className="flex items-center gap-6 pb-3 border-b"
              >
                <div className="w-16">
                  <code className="text-sm bg-muted p-1 rounded">
                    text-{token.name}
                  </code>
                </div>
                <div className="flex-grow">
                  <p style={{ fontSize: token.value }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                <div className="w-20 text-right text-sm text-muted-foreground">
                  {token.value} ({token.description})
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(`text-${token.name}`)}
                >
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shadow Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Shadow Tokens</CardTitle>
          <CardDescription>Elevation and depth effects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shadowTokens.map((token, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 bg-card border rounded-lg flex items-center justify-center ${token.name}`}
                >
                  <span className="text-xs text-center text-muted-foreground px-2">
                    {token.name}
                  </span>
                </div>
                <p className="text-xs mt-3 text-center text-muted-foreground">
                  {token.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => copyToClipboard(token.name)}
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Line Heights */}
      <Card>
        <CardHeader>
          <CardTitle>Line Heights</CardTitle>
          <CardDescription>Text line spacing variables</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="p-4 border rounded-md">
              <p className="text-sm font-medium mb-2">
                Tight (--line-height-tight)
              </p>
              <p className="leading-tight border-l-4 border-primary pl-4">
                This text has tight line height. It&apos;s useful for headings
                and short blocks of text where you want to minimize vertical
                space. The quick brown fox jumps over the lazy dog.
              </p>
              <code className="text-xs block mt-2">leading-tight</code>
            </div>

            <div className="p-4 border rounded-md">
              <p className="text-sm font-medium mb-2">
                Normal (--line-height-normal)
              </p>
              <p className="leading-normal border-l-4 border-primary pl-4">
                This text has normal line height. It&apos;s a good balance for
                readability in most text. The quick brown fox jumps over the
                lazy dog. Lorem ipsum dolor sit amet consectetur.
              </p>
              <code className="text-xs block mt-2">leading-normal</code>
            </div>

            <div className="p-4 border rounded-md">
              <p className="text-sm font-medium mb-2">
                Relaxed (--line-height-relaxed)
              </p>
              <p className="leading-relaxed border-l-4 border-primary pl-4">
                This text has relaxed line height. It&apos;s good for longer
                blocks of text to enhance readability. The quick brown fox jumps
                over the lazy dog. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <code className="text-xs block mt-2">leading-relaxed</code>
            </div>

            <div className="p-4 border rounded-md">
              <p className="text-sm font-medium mb-2">
                Loose (--line-height-loose)
              </p>
              <p className="leading-loose border-l-4 border-primary pl-4">
                This text has loose line height. It provides maximum readability
                for dense or complex content. The quick brown fox jumps over the
                lazy dog. Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <code className="text-xs block mt-2">leading-loose</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Z-Index Tokens */}
      <Card>
        <CardHeader>
          <CardTitle>Z-Index Tokens</CardTitle>
          <CardDescription>Layer stacking order values</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 border-b">Token</th>
                  <th className="text-left py-2 px-4 border-b">Value</th>
                  <th className="text-left py-2 px-4 border-b">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/50">
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-0</code>
                  </td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b text-sm">Base layers</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-10</code>
                  </td>
                  <td className="py-2 px-4 border-b">10</td>
                  <td className="py-2 px-4 border-b text-sm">
                    Sticky elements, headers
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-20</code>
                  </td>
                  <td className="py-2 px-4 border-b">20</td>
                  <td className="py-2 px-4 border-b text-sm">Dropdown menus</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-30</code>
                  </td>
                  <td className="py-2 px-4 border-b">30</td>
                  <td className="py-2 px-4 border-b text-sm">
                    Floating UI elements
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-40</code>
                  </td>
                  <td className="py-2 px-4 border-b">40</td>
                  <td className="py-2 px-4 border-b text-sm">
                    Modals and dialogs
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    <code className="text-sm">z-50</code>
                  </td>
                  <td className="py-2 px-4 border-b">50</td>
                  <td className="py-2 px-4 border-b text-sm">
                    Toasts and notifications
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokensPage;
